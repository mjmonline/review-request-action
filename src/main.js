const core = require("@actions/core");
const github = require("@actions/github");

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput("who-to-greet");
  console.log(`Hello ${nameToGreet}!`);
  const time = new Date().toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}

// import * as core from "@actions/core";
// import { context, GitHub } from "@actions/github";

// async function run() {
//   try {
//     const repoToken = core.getInput("repo-token", { required: true });
//     const issue = context.issue;

//     const client = new GitHub(repoToken);

//     const reviewers = core
//       .getInput("reviewers")
//       .split(",")
//       .map((a) => a.trim());
//     const teamReviewers = core
//       .getInput("team-reviewers")
//       .split(",")
//       .map((a) => a.trim());

//     await client.pulls.createReviewRequest({
//       owner: issue.owner,
//       repo: issue.repo,
//       pull_number: issue.number,
//       reviewers: reviewers,
//       team_reviewers: teamReviewers,
//     });
//   } catch (error) {
//     core.setFailed(error.message);
//     throw error;
//   }
// }

// run();
