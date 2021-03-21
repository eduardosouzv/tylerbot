const dayjs = require('dayjs');
const getSchedule = require('./getSchedule');

const { prefix } = require('../config.json');

const isBetween = require('dayjs/plugin/isBetween');
const customParseFormat = require('dayjs/plugin/customParseFormat');

dayjs.extend(isBetween);
dayjs.extend(customParseFormat);

let res;

const data = {
  weekDay: '',
  classLink: '',
  numClass: '',
};

const class1 = dayjs('07:10', 'HH:mm');
const class2 = dayjs('08:00', 'HH:mm');
const class3 = dayjs('08:50', 'HH:mm');
const class4 = dayjs('09:55', 'HH:mm');
const class5 = dayjs('10:45', 'HH:mm');
const class6 = dayjs('11:35', 'HH:mm');
const classEnd = dayjs('12:30', 'HH:mm');

getSchedule().then((response) => {
  res = response;
});

function selectClassByNowDate() {
  const nowDate = new Date();
  switch (dayjs(nowDate).day()) {
    case 1: //segunda
      data.weekDay = 'Segunda-Feira';

      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class1, class2, 'minute', '[)')) {
        // 1 aula
        data.classLink = res.segunda.aula1;
        data.numClass = '1';
        break;
      }
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class2, class3, 'minute', '[)')) {
        // 2 aula
        data.classLink = res.segunda.aula2;
        data.numClass = '2';
        break;
      }
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class3, class4, 'minute', '[)')) {
        // 3 aula
        data.classLink = res.segunda.aula3;
        data.numClass = '3';
        break;
      }
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class4, class5, 'minute', '[)')) {
        // 4 aula
        data.classLink = res.segunda.aula4;
        data.numClass = '4';
        break;
      }
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class5, class6, 'minute', '[)')) {
        // 5 aula
        data.classLink = res.segunda.aula5;
        data.numClass = '5';
        break;
      }
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class6, classEnd, 'minute', '[)')) {
        // 6 aula
        data.classLink = res.segunda.aula6;
        data.numClass = '6';
        break;
      }
    case 2: // terca
      data.weekDay = 'Terça-Feira';
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class1, class2, 'minute', '[)')) {
        // 1 aula
        data.classLink = res.terca.aula1;
        data.numClass = '1';
        break;
      }
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class2, class3, 'minute', '[)')) {
        // 2 aula
        data.classLink = res.terca.aula2;
        data.numClass = '2';
        break;
      }
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class3, class4, 'minute', '[)')) {
        // 3 aula
        data.classLink = res.terca.aula3;
        data.numClass = '3';
        break;
      }
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class4, class5, 'minute', '[)')) {
        // 4 aula
        data.classLink = res.terca.aula4;
        data.numClass = '4';
        break;
      }
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class5, class6, 'minute', '[)')) {
        // 5 aula
        data.classLink = res.terca.aula5;
        data.numClass = '5';
        break;
      }
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class6, classEnd, 'minute', '[)')) {
        // 6 aula
        data.classLink = res.terca.aula6;
        data.numClass = '6';
        break;
      }
    case 3: // quarta
      data.weekDay = 'Quarta-Feira';
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class1, class2, 'minute', '[)')) {
        // 1 aula
        data.classLink = res.quarta.aula1;
        data.numClass = '1';
        break;
      }
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class2, class3, 'minute', '[)')) {
        // 2 aula
        data.classLink = res.quarta.aula2;
        data.numClass = '2';
        break;
      }
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class3, class4, 'minute', '[)')) {
        // 3 aula
        data.classLink = res.quarta.aula3;
        data.numClass = '3';
        break;
      }
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class4, class5, 'minute', '[)')) {
        // 4 aula
        data.classLink = res.quarta.aula4;
        data.numClass = '4';
        break;
      }
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class5, class6, 'minute', '[)')) {
        // 5 aula
        data.classLink = res.quarta.aula5;
        data.numClass = '5';
        break;
      }
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class6, classEnd, 'minute', '[)')) {
        // 6 aula
        data.classLink = res.quarta.aula6;
        data.numClass = '6';
        break;
      }
    case 4: // quinta
      data.weekDay = 'Quinta-Feira';
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class1, class2, 'minute', '[)')) {
        // 1 aula
        data.classLink = res.quinta.aula1;
        data.numClass = '1';
        break;
      }
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class2, class3, 'minute', '[)')) {
        // 2 aula
        data.classLink = res.quinta.aula2;
        data.numClass = '2';
        break;
      }
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class3, class4, 'minute', '[)')) {
        // 3 aula
        data.classLink = res.quinta.aula3;
        data.numClass = '3';
        break;
      }
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class4, class5, 'minute', '[)')) {
        // 4 aula
        data.classLink = res.quinta.aula4;
        data.numClass = '4';
        break;
      }
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class5, class6, 'minute', '[)')) {
        // 5 aula
        data.classLink = res.quinta.aula5;
        data.numClass = '5';
        break;
      }
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class6, classEnd, 'minute', '[)')) {
        // 6 aula
        data.classLink = res.quinta.aula6;
        data.numClass = '6';
        break;
      }
    case 5: // sexta
      data.weekDay = 'Sexta-Feira';
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class1, class2, 'minute', '[)')) {
        // 1 aula
        data.classLink = res.sexta.aula1;
        data.numClass = '1';
        break;
      }
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class2, class3, 'minute', '[)')) {
        // 2 aula
        data.classLink = res.sexta.aula2;
        data.numClass = '2';
        break;
      }
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class3, class4, 'minute', '[)')) {
        // 3 aula
        data.classLink = res.sexta.aula3;
        data.numClass = '3';
        break;
      }
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class4, class5, 'minute', '[)')) {
        // 4 aula
        data.classLink = res.sexta.aula4;
        data.numClass = '4';
        break;
      }
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class5, class6, 'minute', '[)')) {
        // 5 aula
        data.classLink = res.sexta.aula5;
        data.numClass = '5';
        break;
      }
      if (dayjs(nowDate.toTimeString(), 'HH:mm').isBetween(class6, classEnd, 'minute', '[)')) {
        // 6 aula
        data.classLink = res.sexta.aula6;
        data.numClass = '6';
        break;
      }
  }
}

function isWeekend() {
  const day = new Date().getDay();
  return day === 6 || day === 0;
}

module.exports = {
  name: `${prefix}aula`,
  execute(message) {
    selectClassByNowDate();

    let title = `👺 **${data.weekDay}** | Aula ${data.numClass}`;
    let description = `\n**Link:   ** ${data.classLink}`;

    if (isWeekend()) {
      title = '😎 FIM DE SEMANA CARA';
      description = '🚗💥🙏☂️🔥';
    }

    if (dayjs(new Date().toTimeString(), 'HH:mm').isAfter(classEnd, 'minute')) {
      title = 'Acabou a aula';
      description = '💤';
    }

    message.channel.send({
      embed: {
        color: '#FF0000',
        title: title,
        description: description,
      },
    });
  },
};
