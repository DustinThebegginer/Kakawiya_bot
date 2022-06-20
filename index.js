const Discord = require("discord.js")
require("dotenv").config()


const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_MEMBERS"
  ]
})

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
})

client.on("message", (message) => {
  if (message.content == "rickroll") {
    message.reply("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
  }
  
  if (message.content == "ronaldo") {
    message.reply("SUIIIII!!")
  }
    if (message.content == "Owner's instagram") {
      message.reply("My owners instagram is: <https://www.instagram.com/skandarwali/>")
    }
    
    
  })

const welcomeChannelId = "951832232857862166"

client.on("guildMemberAdd", async (member) => {
  member.guild.channels.cache.get(welcomeChannelId).send({
    content: `<@${member.id}> Welcome to the server!`,

  })
})

client.login(process.env.TOKEN)