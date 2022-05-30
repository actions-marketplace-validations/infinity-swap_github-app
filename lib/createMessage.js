const core = require('@actions/core')
const short_link_view_slack = require('./shortLinkVeiwSlack');

function createMessage() {
  let json_from_github = core.getInput("json_from_github", {});
  let warn_message = core.getInput("warn_message", {});
  json_from_github = JSON.parse(json_from_github);
  let message = {}
  message["blocks"] = [];

  if (json_from_github !== undefined) {
    if ("event" in json_from_github) {
      if ("release" in json_from_github.event) {
        message.blocks.push(
            {
              "type": "header",
              "text": {
                "type": "plain_text",
                "text": `${ json_from_github.event.release.name } is published!`
              }
            }
        )

        if (warn_message !== "**") {
          message.blocks.push(
            {
              "type": "section",
              "text": {
                "type": "mrkdwn",
                "text": `*${ warn_message }*`
              }
            }
          )
        }

        message.blocks.push(
            {
              "type": "section",
              "text": {
                "type": "mrkdwn",
                "text": "*Information:*"
              }
            }
        );

        message.blocks.push(
            {
              "type": "section",
              "text": {
                "type": "mrkdwn",
                "text": short_link_view_slack(json_from_github.event.release.body)
              },
              "accessory": {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Go to Release",
                  "emoji": true
                },
                "value": "click_me_123",
                "url": json_from_github.event.release.html_url,
                "action_id": "button-action"
              }
            }
        )
      }

      if ("repository" in json_from_github.event) {
        message.blocks.push(
            {
              "type": "section",
              "text": {
                "type": "mrkdwn",
                "text": `*repository:* ${ json_from_github.event.repository.name }`
              }
            }
        )
      }

      if ("release" in json_from_github.event) {
        message.blocks.push(
            {
              "type": "section",
              "text": {
                "type": "mrkdwn",
                "text": `*repository:* ${ json_from_github.event.release.tag_name }`
              }
            }
        )
      }
    }

    message.blocks.push(
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": `*Author:* ${ json_from_github.actor }`
          }
        }
    )
  }

  return message;
}

module.exports = createMessage
