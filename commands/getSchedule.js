const cheerio = require('cheerio');
const axios = require('axios');

async function getSchedule() {
  try {
    const result = await axios.get(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQgsu8aH0A6edj2xWspyynCgimYnHsYNcw4KpfoRCEAT9WiD2Vi9ic3O1knYQi3k24UG9VKl0ZQi1ly/pubhtml?gid=975049268&single=true'
    );

    let $ = cheerio.load(result.data);

    let messLinks = $('td > a').text();
    let englishLinks = [
      $('td[class="s21"]> span > a').text(),
      $('td[class="s9"]> span > a').text(),
    ];

    let arrLinks = messLinks.split('meet');
    let classLinks = [];

    arrLinks.map((el) => {
      classLinks.push(
        'https://meet' + el.replace('https://', '').replace('?hs=122&authuser=0', '')
      );
    });
    return {
      segunda: {
        aula1: classLinks[1],
        aula2: classLinks[5],
        aula3: classLinks[9],
        aula4: classLinks[13],
        aula5: classLinks[14],
        aula6: englishLinks[0],
      },
      terca: {
        aula1: classLinks[2],
        aula2: classLinks[6],
        aula3: classLinks[10],
        aula4: classLinks[18],
        aula5: classLinks[19],
        aula6: classLinks[23],
      },
      quarta: {
        aula1: classLinks[3],
        aula2: 'edf 🛌🏼',
        aula3: 'edf 🛌🏼',
        aula4: classLinks[15],
        aula5: classLinks[12],
        aula6: classLinks[24],
      },
      quinta: {
        aula1: classLinks[4],
        aula2: classLinks[7],
        aula3: classLinks[11],
        aula4: classLinks[16],
        aula5: classLinks[21],
        aula6: classLinks[25],
      },
      sexta: {
        aula1: englishLinks[1],
        aula2: classLinks[8],
        aula3: classLinks[12],
        aula4: classLinks[17],
        aula5: classLinks[22],
      },
    };
  } catch (error) {
    console.error(error);
  }
}

module.exports = getSchedule;
