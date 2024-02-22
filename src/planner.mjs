import { Octokit, } from "octokit";
import fs from 'node:fs/promises';
import path from 'path';
import inquirer from 'inquirer';

const DELAY = 3;
const REPO_NAME = 'planner-movie-challenge-fw-repo-3';
const PROJECT_NAME = 'planner-movie-challenge-fw-project-3';

import { Command, Option } from 'commander';
const program = new Command();

program
  .name('movie-challenge-planner')
  .description('CLI to create planning for Movie Challenge as Github Project')
  .addOption(new Option('-t, --token <value>', 'Github Personal Access Token').makeOptionMandatory())
  .addOption(new Option('-l, --lang <value>', 'Language for planning').makeOptionMandatory().choices(['es', 'pt']))
  .addOption(new Option('-f, --framework <value>', 'Framework for planning').makeOptionMandatory().choices(['react', 'angular']));

program.parse();

const options = program.opts();
const {token, lang, framework} = options;
const octokit = new Octokit({ auth: token });

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
  try{
    const result = await graphqlRequest(query, variables);
    return result?.user?.projectsV2?.nodes?.[0]?.id;
  }
  catch(error){
    console.log(error);
    return null;
  }
}

async function getRepository(repoName, ownerLogin, milestoneTitle) {
  const conditionMilestone = `${milestoneTitle}`;
  const query = `
    query getRepository ($name: String!, $owner: String!, $condition: String){
      repository (name: $name, owner: $owner) {
        id,
        milestones(first: 100, query: $condition){
          nodes {
            id
            number
            issues(first: 100){
              nodes {
                id
              }
            }
          }
        }
      }
    }
  `;
  const variables = {
    name: repoName,
    owner: ownerLogin,
    condition: conditionMilestone,
  };
  try{
    const result = await graphqlRequest(query, variables);    
    return result?.repository;  
  }
  catch(error){
    console.log(error);
    return null;
  }
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

async function deleteMilestone(ownerLogin, repositoryName, milestoneNumber) {
  const result = //await octokit.rest.milestones.create({
    await octokit.request("DELETE /repos/{owner}/{repo}/milestones/{milestone_number}", {
      owner: ownerLogin,
      repo: repositoryName,
      milestone_number: milestoneNumber
    });
  return result;
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

async function deleteIssue(issueId) {
  const mutation = `
    mutation DeleteIssue($issueId: ID!) {
      deleteIssue(input: { issueId: $issueId }) {
        clientMutationId
      }
    }
  `;

  const variables = {
    issueId
  };

  const result = await graphqlRequest(mutation, variables);
  return result.clientMutationId;
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
  const olderRepository = await getRepository(REPO_NAME, ownerLogin, "Filtrar e Ordenar");
  console.log(olderRepository)
  if (olderRepository) {    
    for (const milestone of olderRepository?.milestones?.nodes ?? []) {
      await deleteMilestone(ownerLogin, REPO_NAME, milestone.number);
      console.log(`Milestone deleted: ${milestone.number}`);
      for (const issue of milestone?.issues?.nodes ?? []) {
        await deleteIssue(issue.id);
        console.log(`Issue deleted: ${issue.id}`);
      }
    }
  }
}

await main();
