import { Octokit, App } from "octokit";
import readline from "readline";

const REPO_NAME = 'planner-movie-challenge-fw-repo-1';
const PROJECT_NAME = 'planner-movie-challenge-fw-project-1';

const githubToken = process.argv[3];

if (!githubToken) {
  console.error('Please provide a GitHub personal access token using --token');
  process.exit(1);
}

const octokit = new Octokit({ auth: githubToken });

const apiUrl = 'https://api.github.com/graphql';

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

// Step 1: Create a GitHub Repository
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

// Step 2: Create a GitHub Project
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

// Step 4: Create an Issue in the Project
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

// Generic GraphQL Request Function
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
  const readlineI = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readlineI.question(
      message,
      (answer) => resolve(answer.toLowerCase() === 'yes')
    );
  });
}
// Main Script
async function main() {

  const { id: ownerId, login: ownerLogin } = await getOwner();
  console.log('User ID:', ownerId);

  const olderRepositoryId = await getRepository(REPO_NAME, ownerLogin);

  if (olderRepositoryId) {
    const isConfirmed = await confirmAction(`Repository '${REPO_NAME}' already exists. Do you want to delete it? (yes/no): `);
    if (!isConfirmed) {
      console.log('Aborted. Exiting...');
      process.exit(0);
    }
    else{
      await deleteRepository(ownerLogin, REPO_NAME);
    }
  }

  const repositoryId = await createRepository(REPO_NAME);
  console.log('Repository created with ID:', repositoryId);

  const olderProjectId = await getProjects(ownerLogin, PROJECT_NAME);
  if (olderProjectId) {
    const isConfirmed = await confirmAction(`Project '${PROJECT_NAME}' already exists. Do you want to delete it? (yes/no): `);
    if (!isConfirmed) {
      console.log('Aborted. Exiting...');
      process.exit(0);
    }
    else{
      await deleteProject(ownerId, olderProjectId);
    }
  }

  const projectId = await createProject(PROJECT_NAME, ownerId, repositoryId);
  console.log('Project created with ID:', projectId);

  const projectId2 = await setProjectToPublic(projectId);
  console.log('Project updated with ID:', projectId2);

  const milestoneId = await createMilestone(ownerLogin, REPO_NAME, 'planner-movie-challenge-fw-milestone-title-1', 'planner-movie-challenge-fw-milestone-description-1');
  console.log('Milestone created with ID:', milestoneId);

  const issueId = await createIssue(repositoryId, milestoneId, 'planner-movie-challenge-fw-issue-title-1', 'planner-movie-challenge-fw-issue-body-1');
  console.log('Issue created with ID:', issueId);

  const itemId = await linkIssueToProject(issueId, projectId);
  console.log('Item created with ID:', itemId);
}

main();
