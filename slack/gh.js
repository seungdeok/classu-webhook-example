const fetch = require('node-fetch');

fetch(slackURL, {
  method: 'post',
  body: JSON.stringify({
    channel: "#chat",
    text: "test message",
    username: "chat-bot"
  }),
  headers: { 'Content-Type': 'application/json' },
})
  .then(res => res);