const { prefix } = require('../config.json');
const cheerio = require('cheerio');
const request = require('request');

let query;
let messageContent;
let weekDay;

switch (new Date().getDay()) {
  case 1:
    query = 'td[class="s7"] > a';
    weekDay = 'Segunda-Feira';
    break;
  case 2:
    query = 'td[class="s8"] > a';
    weekDay = 'Terça-Feira';
    break;
  case 3:
    query = 'td[class="s9"] > a';
    weekDay = 'Quarta-Feira';
    break;
  case 4:
    query = 'td[class="s10"] > a';
    weekDay = 'Quinta-Feira';
    break;
  case 5:
    query = 'td[class="s9"] > span > a';
    weekDay = 'Sexta-Feira';
    break;
  default:
    console.log('fim de semana rsrs');
}

console.log(query);

request(
  {
    method: 'GET',
    url:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQgsu8aH0A6edj2xWspyynCgimYnHsYNcw4KpfoRCEAT9WiD2Vi9ic3O1knYQi3k24UG9VKl0ZQi1ly/pubhtml?gid=975049268&single=true',
  },
  (err, res, body) => {
    if (err) return console.error(err);

    let $ = cheerio.load(body);

    messageContent = $(query).text();
  }
);

module.exports = {
  name: `${prefix}aula 1`,
  execute(message) {
    message.channel.send(`${weekDay} | Link aula 1: ${messageContent}`);
  },
};
