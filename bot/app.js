import { Telegraf, Markup } from "telegraf";


const token = '7802744747:AAGHFyork4eXZCkBjJumlqB_6RXRoIv6kJw'
const webAppUrl = 'https://lizard-cliker-pro.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Hello! Press to start the app', 
        Markup.inlineKeyboard([
        Markup.button.webApp('Open mini app', `${webAppUrl}?ref=${ctx.payload}`),
    ]))
})

bot.launch()