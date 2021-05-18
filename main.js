const { Client } = require('selfo.js');

const bot = new Client();

bot.on('ready', () => {
	console.log(bot.user.tag + ' Online!');
});

bot.login(require('./token.json').token);
