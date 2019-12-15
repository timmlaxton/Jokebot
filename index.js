const Slackbot = require('slackbots');
const axios = require('axios');

const bot = new Slackbot({
  token: 'xoxb-853155594439-839848867779-sGzyKCYpI5I0TXAYVxTDG97b',
  name: 'jokebot'
});


// Start Handler

bot.on('start', () => {
  const params = {
    icon_emoji: ':smiley:'
  };

  bot.postMessageToChannel(
    'general',
    'Get Ready to Laugh With @Jokebot!',
     params
);
});

//Error Handler

bot.on('error', (err) =>console.log(err));

//Message Handler
bot.on('message', (data) => {
  if(data.type !== 'message'){
    return;
  }

  handleMessage(data.text);
});

// Response to data
function handleMessage(message){
  if(message.includes(' chucknorris')) {
    chuckJoke();
  } else if(message.inlcudes(' yomama')) {
    yoMamaJoke();
  }
}


// Tell a Chuck Norris Joke
function chuckJoke() {
  axios.get('http://api.icndb.com/jokes/random')
  .then(res => {
    const joke = res.data.joke;

    const params = {
      icon_emoji: ':laugh:'
    };

    bot.postMessageToChannel('general',`Chuck Norris: ${joke}`, params);
  });
}

// Tell a YoMama Joke
  function yoMamaJoke() {
    axios.get('http://api.yomamma.info')
    .then(res => {
      const joke = res.data.value.joke;

      const params = {
        icon_emoji: ':laughing:'
      };

      bot.postMessageToChannel('general', `Yo Mama: ${joke}`, params);
    });
}
