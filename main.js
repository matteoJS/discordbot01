const Discord = require('discord.js')
const secret = require('./secret.json')

const client = new Discord.Client()

client.on('message', msg => {
    if (msg.content === '!hi') {
        msg.reply('Hello there!')
    } 
})

client.on('ready', () => {
    console.log(`${client.user.username} is ready to chat!`)
})

client.on('error', error => console.log(error))

client.login(secret.token)