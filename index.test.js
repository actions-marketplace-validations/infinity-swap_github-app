const process = require('process')
const path = require('path')
const createMessage = require('./lib/createMessage')

test('test create message with json_from_github', () => {
  setupInputs({
    'json_from_github': "{}",
  })

  const message = createMessage()
  console.log(message);

  expect(message).toEqual({})
})


test('test create message with warn_message', () => {
  setupInputs({
    'json_from_github': sample_github_json,
    'warn_message': "[This message warns the reader]",
  })

  const message = createMessage()
  // console.log(JSON.stringify(message));

  expect(message).toEqual(sample_warn_result)
})


function setupInputs(inputs) {
  for (const input in inputs) {
    let key = 'INPUT_' + input.toUpperCase()
    process.env[key] = inputs[input]
  }
}


const sample_warn_result = {
  "blocks": [
    {
      "type": "header",
      "text": {
        "type": "plain_text",
        "text": "5.1.4-beta is published!"
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*[This message warns the reader]*"
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*Repository:* sample-repo"
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*Tag:* tag16"
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*Author:* sample-user"
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*Information:*"
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "# TEST BODY MESSAGE"
      },
      "accessory": {
        "type": "button",
        "text": {
          "type": "plain_text",
          "text": "Go to Release",
          "emoji": true
        },
        "value": "click_me_123",
        "url": "https://github.com/sample-org/sample-repo/releases/tag/tag16",
        "action_id": "button-action"
      }
    }
  ]
};


const sample_github_json = "{\n" +
  "  \"token\": \"***\",\n" +
  "  \"job\": \"build\",\n" +
  "  \"ref\": \"refs/tags/tag16\",\n" +
  "  \"sha\": \"asdfg\",\n" +
  "  \"repository\": \"sample-org/sample-repo\",\n" +
  "  \"repository_owner\": \"sample-org\",\n" +
  "  \"repository_owner_id\": \"00000000\",\n" +
  "  \"repositoryUrl\": \"git://github.com/sample-org/sample-repo.git\",\n" +
  "  \"run_id\": \"0000000000\",\n" +
  "  \"run_number\": \"22\",\n" +
  "  \"retention_days\": \"90\",\n" +
  "  \"run_attempt\": \"1\",\n" +
  "  \"artifact_cache_size_limit\": \"10\",\n" +
  "  \"repository_id\": \"000000000\",\n" +
  "  \"actor_id\": \"0000000\",\n" +
  "  \"actor\": \"sample-user\",\n" +
  "  \"workflow\": \"Sample-workflow\",\n" +
  "  \"head_ref\": \"\",\n" +
  "  \"base_ref\": \"\",\n" +
  "  \"event_name\": \"release\",\n" +
  "  \"event\": {\n" +
  "    \"action\": \"published\",\n" +
  "    \"organization\": {\n" +
  "      \"avatar_url\": \"https://avatars.githubusercontent.com/u/00000000?v=4\",\n" +
  "      \"description\": \"\",\n" +
  "      \"events_url\": \"https://api.github.com/orgs/sample-org/events\",\n" +
  "      \"hooks_url\": \"https://api.github.com/orgs/sample-org/hooks\",\n" +
  "      \"id\": \"00000000\",\n" +
  "      \"issues_url\": \"https://api.github.com/orgs/sample-org/issues\",\n" +
  "      \"login\": \"sample-org\",\n" +
  "      \"members_url\": \"https://api.github.com/orgs/sample-org/members{/member}\",\n" +
  "      \"node_id\": \"asdfg\",\n" +
  "      \"public_members_url\": \"https://api.github.com/orgs/sample-org/public_members{/member}\",\n" +
  "      \"repos_url\": \"https://api.github.com/orgs/sample-org/repos\",\n" +
  "      \"url\": \"https://api.github.com/orgs/sample-org\"\n" +
  "    },\n" +
  "    \"release\": {\n" +
  "      \"assets\": [],\n" +
  "      \"assets_url\": \"https://api.github.com/repos/sample-org/sample-repo/releases/00000000/assets\",\n" +
  "      \"author\": {\n" +
  "        \"avatar_url\": \"https://avatars.githubusercontent.com/u/0000000?v=4\",\n" +
  "        \"events_url\": \"https://api.github.com/users/sample-user/events{/privacy}\",\n" +
  "        \"followers_url\": \"https://api.github.com/users/sample-user/followers\",\n" +
  "        \"following_url\": \"https://api.github.com/users/sample-user/following{/other_user}\",\n" +
  "        \"gists_url\": \"https://api.github.com/users/sample-user/gists{/gist_id}\",\n" +
  "        \"gravatar_id\": \"\",\n" +
  "        \"html_url\": \"https://github.com/sample-user\",\n" +
  "        \"id\": \"0000000\",\n" +
  "        \"login\": \"sample-user\",\n" +
  "        \"node_id\": \"asdfg\",\n" +
  "        \"organizations_url\": \"https://api.github.com/users/sample-user/orgs\",\n" +
  "        \"received_events_url\": \"https://api.github.com/users/sample-user/received_events\",\n" +
  "        \"repos_url\": \"https://api.github.com/users/sample-user/repos\",\n" +
  "        \"site_admin\": false,\n" +
  "        \"starred_url\": \"https://api.github.com/users/sample-user/starred{/owner}{/repo}\",\n" +
  "        \"subscriptions_url\": \"https://api.github.com/users/sample-user/subscriptions\",\n" +
  "        \"type\": \"User\",\n" +
  "        \"url\": \"https://api.github.com/users/sample-user\"\n" +
  "      },\n" +
  "      \"body\": \"# TEST BODY MESSAGE\",\n" +
  "      \"created_at\": \"2011-05-05T17:11:42Z\",\n" +
  "      \"draft\": false,\n" +
  "      \"html_url\": \"https://github.com/sample-org/sample-repo/releases/tag/tag16\",\n" +
  "      \"id\": \"00000000\",\n" +
  "      \"mentions_count\": 3,\n" +
  "      \"name\": \"5.1.4-beta\",\n" +
  "      \"node_id\": \"asdfg\",\n" +
  "      \"prerelease\": false,\n" +
  "      \"published_at\": \"2011-05-05T11:14:27Z\",\n" +
  "      \"tag_name\": \"tag16\",\n" +
  "      \"tarball_url\": \"https://api.github.com/repos/sample-org/sample-repo/tarball/tag16\",\n" +
  "      \"target_commitish\": \"main\",\n" +
  "      \"upload_url\": \"https://uploads.github.com/repos/sample-org/sample-repo/releases/00000000/assets{?name,label}\",\n" +
  "      \"url\": \"https://api.github.com/repos/sample-org/sample-repo/releases/00000000\",\n" +
  "      \"zipball_url\": \"https://api.github.com/repos/sample-org/sample-repo/zipball/tag16\"\n" +
  "    },\n" +
  "    \"repository\": {\n" +
  "      \"allow_forking\": false,\n" +
  "      \"archive_url\": \"https://api.github.com/repos/sample-org/sample-repo/{archive_format}{/ref}\",\n" +
  "      \"archived\": false,\n" +
  "      \"assignees_url\": \"https://api.github.com/repos/sample-org/sample-repo/assignees{/user}\",\n" +
  "      \"blobs_url\": \"https://api.github.com/repos/sample-org/sample-repo/git/blobs{/sha}\",\n" +
  "      \"branches_url\": \"https://api.github.com/repos/sample-org/sample-repo/branches{/branch}\",\n" +
  "      \"clone_url\": \"https://github.com/sample-org/sample-repo.git\",\n" +
  "      \"collaborators_url\": \"https://api.github.com/repos/sample-org/sample-repo/collaborators{/collaborator}\",\n" +
  "      \"comments_url\": \"https://api.github.com/repos/sample-org/sample-repo/comments{/number}\",\n" +
  "      \"commits_url\": \"https://api.github.com/repos/sample-org/sample-repo/commits{/sha}\",\n" +
  "      \"compare_url\": \"https://api.github.com/repos/sample-org/sample-repo/compare/{base}...{head}\",\n" +
  "      \"contents_url\": \"https://api.github.com/repos/sample-org/sample-repo/contents/{+path}\",\n" +
  "      \"contributors_url\": \"https://api.github.com/repos/sample-org/sample-repo/contributors\",\n" +
  "      \"created_at\": \"2011-04-21T14:50:21Z\",\n" +
  "      \"default_branch\": \"main\",\n" +
  "      \"deployments_url\": \"https://api.github.com/repos/sample-org/sample-repo/deployments\",\n" +
  "      \"description\": null,\n" +
  "      \"disabled\": false,\n" +
  "      \"downloads_url\": \"https://api.github.com/repos/sample-org/sample-repo/downloads\",\n" +
  "      \"events_url\": \"https://api.github.com/repos/sample-org/sample-repo/events\",\n" +
  "      \"fork\": false,\n" +
  "      \"forks\": 0,\n" +
  "      \"forks_count\": 0,\n" +
  "      \"forks_url\": \"https://api.github.com/repos/sample-org/sample-repo/forks\",\n" +
  "      \"full_name\": \"sample-org/sample-repo\",\n" +
  "      \"git_commits_url\": \"https://api.github.com/repos/sample-org/sample-repo/git/commits{/sha}\",\n" +
  "      \"git_refs_url\": \"https://api.github.com/repos/sample-org/sample-repo/git/refs{/sha}\",\n" +
  "      \"git_tags_url\": \"https://api.github.com/repos/sample-org/sample-repo/git/tags{/sha}\",\n" +
  "      \"git_url\": \"git://github.com/sample-org/sample-repo.git\",\n" +
  "      \"has_downloads\": true,\n" +
  "      \"has_issues\": true,\n" +
  "      \"has_pages\": false,\n" +
  "      \"has_projects\": true,\n" +
  "      \"has_wiki\": true,\n" +
  "      \"homepage\": null,\n" +
  "      \"hooks_url\": \"https://api.github.com/repos/sample-org/sample-repo/hooks\",\n" +
  "      \"html_url\": \"https://github.com/sample-org/sample-repo\",\n" +
  "      \"id\": \"000000000\",\n" +
  "      \"is_template\": false,\n" +
  "      \"issue_comment_url\": \"https://api.github.com/repos/sample-org/sample-repo/issues/comments{/number}\",\n" +
  "      \"issue_events_url\": \"https://api.github.com/repos/sample-org/sample-repo/issues/events{/number}\",\n" +
  "      \"issues_url\": \"https://api.github.com/repos/sample-org/sample-repo/issues{/number}\",\n" +
  "      \"keys_url\": \"https://api.github.com/repos/sample-org/sample-repo/keys{/key_id}\",\n" +
  "      \"labels_url\": \"https://api.github.com/repos/sample-org/sample-repo/labels{/name}\",\n" +
  "      \"language\": null,\n" +
  "      \"languages_url\": \"https://api.github.com/repos/sample-org/sample-repo/languages\",\n" +
  "      \"license\": null,\n" +
  "      \"merges_url\": \"https://api.github.com/repos/sample-org/sample-repo/merges\",\n" +
  "      \"milestones_url\": \"https://api.github.com/repos/sample-org/sample-repo/milestones{/number}\",\n" +
  "      \"mirror_url\": null,\n" +
  "      \"name\": \"sample-repo\",\n" +
  "      \"node_id\": \"asdfg\",\n" +
  "      \"notifications_url\": \"https://api.github.com/repos/sample-org/sample-repo/notifications{?since,all,participating}\",\n" +
  "      \"open_issues\": 0,\n" +
  "      \"open_issues_count\": 0,\n" +
  "      \"owner\": {\n" +
  "        \"avatar_url\": \"https://avatars.githubusercontent.com/u/00000000?v=4\",\n" +
  "        \"events_url\": \"https://api.github.com/users/sample-org/events{/privacy}\",\n" +
  "        \"followers_url\": \"https://api.github.com/users/sample-org/followers\",\n" +
  "        \"following_url\": \"https://api.github.com/users/sample-org/following{/other_user}\",\n" +
  "        \"gists_url\": \"https://api.github.com/users/sample-org/gists{/gist_id}\",\n" +
  "        \"gravatar_id\": \"\",\n" +
  "        \"html_url\": \"https://github.com/sample-org\",\n" +
  "        \"id\": \"00000000\",\n" +
  "        \"login\": \"sample-org\",\n" +
  "        \"node_id\": \"asdfg\",\n" +
  "        \"organizations_url\": \"https://api.github.com/users/sample-org/orgs\",\n" +
  "        \"received_events_url\": \"https://api.github.com/users/sample-org/received_events\",\n" +
  "        \"repos_url\": \"https://api.github.com/users/sample-org/repos\",\n" +
  "        \"site_admin\": false,\n" +
  "        \"starred_url\": \"https://api.github.com/users/sample-org/starred{/owner}{/repo}\",\n" +
  "        \"subscriptions_url\": \"https://api.github.com/users/sample-org/subscriptions\",\n" +
  "        \"type\": \"Organization\",\n" +
  "        \"url\": \"https://api.github.com/users/sample-org\"\n" +
  "      },\n" +
  "      \"private\": true,\n" +
  "      \"pulls_url\": \"https://api.github.com/repos/sample-org/sample-repo/pulls{/number}\",\n" +
  "      \"pushed_at\": \"2011-05-05T11:14:27Z\",\n" +
  "      \"releases_url\": \"https://api.github.com/repos/sample-org/sample-repo/releases{/id}\",\n" +
  "      \"size\": 9,\n" +
  "      \"ssh_url\": \"git@github.com:sample-org/sample-repo.git\",\n" +
  "      \"stargazers_count\": 0,\n" +
  "      \"stargazers_url\": \"https://api.github.com/repos/sample-org/sample-repo/stargazers\",\n" +
  "      \"statuses_url\": \"https://api.github.com/repos/sample-org/sample-repo/statuses/{sha}\",\n" +
  "      \"subscribers_url\": \"https://api.github.com/repos/sample-org/sample-repo/subscribers\",\n" +
  "      \"subscription_url\": \"https://api.github.com/repos/sample-org/sample-repo/subscription\",\n" +
  "      \"svn_url\": \"https://github.com/sample-org/sample-repo\",\n" +
  "      \"tags_url\": \"https://api.github.com/repos/sample-org/sample-repo/tags\",\n" +
  "      \"teams_url\": \"https://api.github.com/repos/sample-org/sample-repo/teams\",\n" +
  "      \"topics\": [],\n" +
  "      \"trees_url\": \"https://api.github.com/repos/sample-org/sample-repo/git/trees{/sha}\",\n" +
  "      \"updated_at\": \"2011-04-21T14:50:21Z\",\n" +
  "      \"url\": \"https://api.github.com/repos/sample-org/sample-repo\",\n" +
  "      \"visibility\": \"private\",\n" +
  "      \"watchers\": 0,\n" +
  "      \"watchers_count\": 0\n" +
  "    },\n" +
  "    \"sender\": {\n" +
  "      \"avatar_url\": \"https://avatars.githubusercontent.com/u/0000000?v=4\",\n" +
  "      \"events_url\": \"https://api.github.com/users/sample-user/events{/privacy}\",\n" +
  "      \"followers_url\": \"https://api.github.com/users/sample-user/followers\",\n" +
  "      \"following_url\": \"https://api.github.com/users/sample-user/following{/other_user}\",\n" +
  "      \"gists_url\": \"https://api.github.com/users/sample-user/gists{/gist_id}\",\n" +
  "      \"gravatar_id\": \"\",\n" +
  "      \"html_url\": \"https://github.com/sample-user\",\n" +
  "      \"id\": \"0000000\",\n" +
  "      \"login\": \"sample-user\",\n" +
  "      \"node_id\": \"asdfg\",\n" +
  "      \"organizations_url\": \"https://api.github.com/users/sample-user/orgs\",\n" +
  "      \"received_events_url\": \"https://api.github.com/users/sample-user/received_events\",\n" +
  "      \"repos_url\": \"https://api.github.com/users/sample-user/repos\",\n" +
  "      \"site_admin\": false,\n" +
  "      \"starred_url\": \"https://api.github.com/users/sample-user/starred{/owner}{/repo}\",\n" +
  "      \"subscriptions_url\": \"https://api.github.com/users/sample-user/subscriptions\",\n" +
  "      \"type\": \"User\",\n" +
  "      \"url\": \"https://api.github.com/users/sample-user\"\n" +
  "    }\n" +
  "  },\n" +
  "  \"server_url\": \"https://github.com\",\n" +
  "  \"api_url\": \"https://api.github.com\",\n" +
  "  \"graphql_url\": \"https://api.github.com/graphql\",\n" +
  "  \"ref_name\": \"tag16\",\n" +
  "  \"ref_protected\": false,\n" +
  "  \"ref_type\": \"tag\",\n" +
  "  \"secret_source\": \"Actions\",\n" +
  "  \"workspace\": \"/home/runner/work/sample-repo/sample-repo\",\n" +
  "  \"action\": \"__run\",\n" +
  "  \"event_path\": \"/home/runner/work/_temp/_github_workflow/event.json\",\n" +
  "  \"action_repository\": \"sample-user/sample-app\",\n" +
  "  \"action_ref\": \"v0.0.1\",\n" +
  "  \"path\": \"/home/runner/work/_temp/_runner_file_commands/add_path_asdfg\",\n" +
  "  \"env\": \"/home/runner/work/_temp/_runner_file_commands/set_env_asdfg\",\n" +
  "  \"step_summary\": \"/home/runner/work/_temp/_runner_file_commands/step_summary_asdfg\"\n" +
  "}\n";
