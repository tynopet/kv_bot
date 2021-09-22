const {Telegraf} = require('telegraf');
const {kakoyHandler} = require('./handlers');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(() => {
    console.log('Bot is running...');
});

bot.command('time', (ctx) => {
    if (Math.random() > 0.5) {
        ctx.reply('Гайс, это все еще таймится');
    } else {
        ctx.reply('Не заходите в подземелье, оно на приколе');
    }
});

bot.command('school', (ctx) => {
    ctx.reply('В школе расскажешь');
});

bot.command('kakoy', kakoyHandler);

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

bot.launch();