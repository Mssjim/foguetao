const { Client } = require('selfo.js');

new Client().on('ready', () => {
	console.log(bot.user.tag + ' Online!');
}).login(require('./token.json').token);
