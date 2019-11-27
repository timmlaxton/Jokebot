const Slackbot = require('slackbots');
const axios = require('axios')

const bot = new Slackbot({
  token: 'xoxb-853155594439-839848867779-Xc6dJVyl6xOsdHNiWoSjsmpX',
  name: 'jokebot'
});


// Start Handler

bot.on('start', () => {
  var params = {
    icon_emoji: ':cat:'
  }
};
