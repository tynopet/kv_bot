const dateFns = require('date-fns');
const Random = require('../utils/prng');

const kakoy = [
  'таймящий',
  'затягивающий лапшичку',
  'отсутствующий',
  'розовый',
  'улетевший',
  'отлетевший',
  'pvp',
  'рейдящий',
  'переезжающий через порожек',
  'дачный',
  'школьный',
  'фармящий репу',
  'баблящий',
  'зарейджевший',
  'стримящий',
  'мемный',
  'пердящий в войс'
];

const getKakoy = (userId, date) => {
  const seed = userId + Math.round(dateFns.getTime(date) / 1e7);
  const random = new Random(seed);
  const randomValue = random.next();
  const wordsCount = randomValue % 4 + 1;

  let result = '';
  let tmp = [...kakoy];

  for (let i = 0; i < wordsCount; i++) {
    const idx = new Random(seed + i).next() % (tmp.length - 1);

    result += tmp[idx] + ' ';
    tmp = tmp.filter(el => el !== tmp[idx]);
  }

  return result;
};


const kakoyHandler = (ctx) => {
    const date = dateFns.startOfDay(new Date());
    const answer = getKakoy(ctx.update.message.from.id, date);
  
    ctx.reply(
      `Сегодня ты ${answer} Квинтилий!`,
      {
        reply_to_message_id: ctx.message.message_id
      }
    );
  };

  module.exports = kakoyHandler;