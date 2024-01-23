import { Octokit, } from "octokit";
import readline from "readline";
import fs from 'node:fs/promises';
import { program as commander } from 'commander';
import path from 'path';
import log from 'why-is-node-running';
import inquirer from 'inquirer';

const DELAY = 3;

commander
  .version('1.0.0', '-v, --version')
  .usage('[OPTIONS]...')
  .option('-t, --token <value>')
  .parse(process.argv);

const options = commander.opts();

const REPO_NAME = 'planner-movie-challenge-fw-repo-1';
const PROJECT_NAME = 'planner-movie-challenge-fw-project-1';

const githubToken = options.token;

if (!githubToken) {
  console.error('Please provide a GitHub personal access token using --token');
  process.exit(1);
}

const octokit = new Octokit({ auth: githubToken });

async function getOwner() {
  const query = `
    query {
      viewer {
        id
        login
      }
    }
  `;

  const result = await graphqlRequest(query);
  return { id: result.viewer.id, login: result.viewer.login };
}

async function getProjects(login, projectName) {
  const condition = `is:open ${projectName}`;
  const query = `
    query getProjects ($login: String!, $condition: String!) {
      user (login: $login) {
        projectsV2 (first: 1, query: $condition) {
          nodes {
            id
          }
        }
      }
    }
  `;
  const variables = {
    login,
    condition
  };
  const result = await graphqlRequest(query, variables);
  return result?.user?.projectsV2?.nodes?.[0]?.id;
}

async function getRepository(repoName, ownerLogin) {
  const query = `
    query getRepository ($name: String!, $owner: String!){
      repository (name: $name, owner: $owner) {
        id
      }
    }
  `;
  const variables = {
    name: repoName,
    owner: ownerLogin
  };
  const result = await graphqlRequest(query, variables);
  return result?.repository?.id;
}

async function createRepository(name) {
  const mutation = `
      mutation CreateRepository($name: String!) {
        createRepository(input: { name: $name, visibility: PUBLIC }) {
          repository {
            id
          }
        }
      }
    `;

  const variables = {
    name,
  };

  const result = await graphqlRequest(mutation, variables);
  return result.createRepository.repository.id;
}

async function deleteRepository(ownerLogin, repositoryName) {
  const result = await octokit.rest.repos.delete({
    owner: ownerLogin,
    repo: repositoryName
  });
  return result;
}

async function createProject(title, ownerId, repositoryId) {
  const mutation = `
    mutation CreateProjectV2($title: String!, $ownerId: ID!, $repositoryId: ID) {
        createProjectV2(input: { title: $title, ownerId: $ownerId, repositoryId: $repositoryId }) {
        projectV2 {
          id
        }
      }
    }
  `;

  const variables = {
    title,
    ownerId,
    repositoryId,
  };

  const result = await graphqlRequest(mutation, variables);
  return result.createProjectV2.projectV2.id;
}

async function setProjectToPublic(projectId) {
  const mutation = `
    mutation UpdateProjectV2($projectId: ID!) {
        updateProjectV2(input: { projectId: $projectId, public: true }) {
        projectV2 {
          id
        }
      }
    }
  `;

  const variables = {
    projectId,
  };

  const result = await graphqlRequest(mutation, variables);
  return result.updateProjectV2.projectV2.id;
}

async function deleteProject(ownerId, projectId) {
  const mutation = `
    mutation deleteProject($clientMutationId: String, $projectId: ID!) {
      deleteProjectV2(input: { clientMutationId: $clientMutationId, projectId: $projectId }) {
        projectV2 {
          id
        }
      }
    }
  `;

  const variables = {
    ownerId,
    projectId,
  };

  const result = await graphqlRequest(mutation, variables);
  return result.deleteProjectV2.projectV2.id;
}

async function createMilestone(ownerLogin, repositoryName, title, description) {
  const result = //await octokit.rest.milestones.create({
    await octokit.request("POST /repos/{owner}/{repo}/milestones", {
      owner: ownerLogin,
      repo: repositoryName,
      title,
      description
    });
  return result.data.node_id;
}

async function createIssue(repositoryId, milestoneId, title, body,) {
  const mutation = `
    mutation CreateIssue($body: String, $repositoryId: ID!, $milestoneId: ID, $title: String!) {
      createIssue(input: { body: $body, repositoryId: $repositoryId, milestoneId: $milestoneId, title: $title }) {
        issue {
          id
        }
      }
    }
  `;

  const variables = {
    title,
    body,
    repositoryId,
    milestoneId,
  };

  const result = await graphqlRequest(mutation, variables);
  return result.createIssue.issue.id;
}

async function linkIssueToProject(issueId, projectId) {
  const mutation = `
    mutation linkIssueToProject($projectId: ID!, $contentId: ID!) {
      addProjectV2ItemById(input: { projectId: $projectId, contentId: $contentId }) {
        item {
          id
        }
      }
    }
  `;

  const variables = {
    contentId: issueId,
    projectId,
  };

  const result = await graphqlRequest(mutation, variables);
  return result.addProjectV2ItemById.item.id;
}

async function graphqlRequest(mutation, variables = {}) {
  try {
    const result = await octokit.graphql(
      mutation, variables);
    return result;
  } catch (error) {
    console.error('GraphQL request failed:', error.message);
    process.exit(1);
  }
}

function confirmAction(message) {
  return inquirer.prompt({
    type: 'confirm',
    name: 'isConfirmed',
    message: message,
  });
}

async function extractInfoFromFile(filePath) {
  const text = await fs.readFile(filePath, { encoding: 'utf8' });
  const indexOfFirst = text.indexOf('\n');
  const title = text.substring(0, indexOfFirst).replace('# ', '');
  const description = text.substring(indexOfFirst + 1);

  return [title, description];
}

const sleep = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000))

// Main Script
async function main() {

  const { id: ownerId, login: ownerLogin } = await getOwner();
  console.log('User ID:', ownerId);

  //Check if repo is already created  
  const olderRepositoryId = await getRepository(REPO_NAME, ownerLogin);
  if (olderRepositoryId) {
    //Ask for confirmation to delete repo
    const userInput = await confirmAction(`Repository '${REPO_NAME}' already exists. Do you want to delete it?`);
    if (!userInput.isConfirmed) {
      console.log('Aborted. Exiting...');
      process.exit(-1);
    }
    else {
      await deleteRepository(ownerLogin, REPO_NAME);
    }
  }
  await sleep(DELAY);

  //Create repo
  const repositoryId = await createRepository(REPO_NAME);
  console.log('Repository created with ID:', repositoryId);
  await sleep(DELAY);

  //Check if project is already created  
  const olderProjectId = await getProjects(ownerLogin, PROJECT_NAME);
  if (olderProjectId) {
    //Ask for confirmation to delete repo
    const isConfirmed = await confirmAction(`Project '${PROJECT_NAME}' already exists. Do you want to delete it?`);
    if (!isConfirmed) {
      console.log('Aborted. Exiting...');
      process.exit(-1);
    }
    else {
      await deleteProject(ownerId, olderProjectId);
    }
  }
  await sleep(DELAY);

  //Create project
  const projectId = await createProject(PROJECT_NAME, ownerId, repositoryId);
  console.log('Project created with ID:', projectId);
  await sleep(DELAY);

  //Update project to public
  await setProjectToPublic(projectId);
  console.log('Project updated with ID:', projectId);
  await sleep(DELAY);

  //Process files
  const BASE_DIR = './planning';
  const FRAMEWORK = 'react';

  const initialPath = path.join(BASE_DIR, FRAMEWORK);
  try {
    const userStoryFolders = await fs.readdir(initialPath);
    for (const userStoryFolder of userStoryFolders) {
      //process HU File
      const filePath = path.join(initialPath, userStoryFolder, `${userStoryFolder}.md`);
      try {
        const [title, description] = await extractInfoFromFile(filePath);

        const milestoneId = await createMilestone(ownerLogin, REPO_NAME, title, description);
        console.log('Milestone created with ID:', milestoneId);
        await sleep(DELAY);

        //process tasks files
        const taskFiles = await fs.readdir(path.join(initialPath, userStoryFolder));
        for (const taskFile of taskFiles) {
          if (taskFile.startsWith('Task')) {
            const filePath = path.join(initialPath, userStoryFolder, taskFile);
            try {
              const [title, description] = await extractInfoFromFile(filePath);

              const issueId = await createIssue(repositoryId, milestoneId, title, description);
              console.log('Issue created with ID:', issueId);
              await sleep(DELAY);

              const itemId = await linkIssueToProject(issueId, projectId);
              console.log('Item created with ID:', itemId);
              await sleep(DELAY);

            } catch (err) {
              console.error(`Unexpected error processing ${filePath}`);
              console.error(err);
            }
          }
        }

      } catch (err) {
        console.error(`Unexpected error processing ${filePath}`);
        console.log(err);
      }
    }

  } catch (err) {
    console.error(`Unexpected error processing ${initialPath}`);
    console.error(err);
    process.exit(-1);
  }
}

await main();
