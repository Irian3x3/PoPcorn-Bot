
const Discord = require("discord.js");
const bot = new Discord.Client();
var version = 'v0.3';
const ytdl = require('ytdl-core')
const moment = require("moment");
require("moment-duration-format");
var command = '.commands';
const PREFIX = '.';
var changes = 'Added 2 new command (ban and kick), Fixed bugs and crashes, removed splay command';
var AI = 'AI currently in work';







bot.on('ready', () => {
  bot.user.setActivity('people type .help', {type: 'WATCHING'});
  console.log('This bot is online');
  
})










bot.on('message',  message => {


  let args = message.content.slice(PREFIX.length).split(" ");

  


  switch (args[0]) {



    case 'ping':
      message.channel.send(`Pong \`${Math.round(bot.ws.ping)}ms\``)

    break;

    case 'welcome':
      message.channel.send('Thank you for inviting me :)')
      break;


    case 'help':

      const help = new Discord.MessageEmbed()
        .setTitle('Help command')
        .addField('Please select .command to get a list of our commands', command)

      message.channel.send(help)
      break;




    case 'commands':

      const commands = new Discord.MessageEmbed()
        .setTitle('These are the commands')
        .setFooter('.Warn, .website, .info, .advice, .say, .spank, .slap, hi, .punch, .dropkickanime, .play, .premium, .User, .serverinfo, .rate(Requires a number under 10), .ban <user> <reason>, .kick <user> <reason>')


      message.channel.send(commands)
      break;




    case 'Warn':
      if (!message.member.hasPermission('MANAGE_MESSAGES')) {

        const warn = new Discord.MessageEmbed()
          .setTitle('You require `Manage Messages` permission to run this command')
          .setColor(0x15ff00)


        message.channel.send(warn)
      } else {
        if (!args[1]) return message.channel.send('Please state a user')

        const warn2 = new Discord.MessageEmbed()
          .setTitle('User has been warned')
          .addField('Reason', (args[2]))
        message.channel.send(warn2)
      }


      break;



    case 'website':
      message.channel.send('https://www.twitch.tv/yt_rozex')
      break;

    case 'info':
      const info = new Discord.MessageEmbed()
        .setTitle('Info')
        .setFooter('PoPcorn bot is a discord bot made by LagsAlot#5671, this bot had many features (fun and moderation)')

      message.channel.send(info)
      break;


    case 'advice':
      message.channel.send('Always smile your smile is your attraction')
      break;


    case 'clear':
      if (!message.member.hasPermission(['MANAGE_MESSAGES'])) {

        message.channel.send('You require the `Manage Messages` permission to execute this command')
      }
      else {
        message.delete();
        message.channel.bulkDelete(args[1]);
      }
      break;


    case 'say':
      if (!message.member.hasPermission(['MANAGE_MESSAGES'])) {

        message.channel.send('You require the `Manage Messages` permission to execute this command')
      }
      else {

        message.delete();
        message.channel.send(args.slice(1).join(" "));
      }
      break;

    case 'spank':
      if (!args) return message.content.reply('state user')
      message.channel.send('spanked the user https://tenor.com/view/spank-tomandjerry-gif-5196956')
      break;




    case 'slap':
      if (!args[1]) return message.content.reply('User specification is required')
      message.channel.send('Slapped specified user https://tenor.com/view/vanderpump-rules-pump-rules-slap-gif-4474446')
      break;


    case 'hi':

      message.channel.send('https://tenor.com/view/hi-lilo-stitch-hello-gif-3566277')
      break;

    case 'punch':

      if (!args[1]) return message.channel.reply('User specification is required')
      message.channel.send('Oh yeah you puch him boy https://tenor.com/view/face-punch-punch-minions-fine-happy-gif-4902917')
      break;


    case 'dropkickanime':
      if (!args[1]) return message.channel.reply('State a fricking user dude')
      message.channel.send('Do it! Yeah u go https://images.app.goo.gl/jKU8o3QaQYEorgvW6')
      break;



    case 'premium':
      message.channel.send('There is currently **NO PREMIUM** version of `PoPcorn Bot` If you find any website stating popcorn bot premium **THEY ARE FAKE**');
      break;



    case 'play':
      message.channel.send('Play command was not working as expected so it has been transfered to a whole new Discord bot that is still under work')












    case 'roast':
      message.channel.send('Your so ugly that when you went to an ugly looking contest they rejected you as they didn\'t want professionals')
      break;


    case 'roast2':
      message.channel.send('When your mom dropped you at school she got arrested for literring')
      break;


    case 'roast3':
      message.channel.send('You are the living proof of stone age')
      break;

    case 'User':
      const User = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('User Profile')
        .addField('Author', message.author.username)
        .addField('Current Server', message.guild.name)
        .addField('Member Roles', message.member.roles.cache)
        .setThumbnail(message.author.displayAvatarURL())

        .setTimestamp(Date.now())
      message.channel.send(User)
      break;


    case 'serverinfo':
      const serverinfo = new Discord.MessageEmbed()
        .setTitle('Server Info')
        .addField('Server Owner', message.guild.owner)
        .addField('Created At', message.guild.createdAt)
        .addField('Reigon', message.guild.region)
        .addField('AFK voice channel', message.guild.afkChannel)
        .addField('Member count', message.guild.memberCount)
        .addField('online', message.guild.voice)
        .addField('Server roles', message.guild.roles.cache)
        .setThumbnail(message.guild.iconURL)
        .setColor(0xfd0000)
      message.channel.send(serverinfo);
      break;


     





    case 'rate':
      if (args[1])
        message.channel.send('Please check you DM')
      message.member.send('Thank you for rating PoPcorn bot, Your rating has been submitted')
      break;



    case 'A.I':
      message.channel.send('Command still under work, NOT AVAILABLE FOR PUBLIC')
      break;



    case 'lagsalot':

      const emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'LagsAlot');
      message.react(emoji);


    case 'creeper':
      message.channel.send('Sorry this command IS ONLY FOR PREMIUM USERS!')
      break;

    case 'tip':
      if (!message.args[1]) {
        message.channel.send('So you want life tips HUH i\'ve got a very good one here', tips)
      }
      break;


    case 'new':
      const changed = new Discord.MessageEmbed()
        .setTitle('Whats New!')
        .addField('Current Version', version)
        .addField('Changes To The Bot', changes)
        .setTimestamp(Date.now())
        .setColor(0xec1581)
      message.channel.send(changed);
      break;





    case 'poll':

      const poll = new Discord.MessageEmbed()
        .setColor(0xFFC300)
        .setTitle('Poll Help Command')
        .setTimestamp(Date.now())
        .setDescription('Type .poll (your message goes here) to start a new poll')


      if (!args[1]) {
        message.channel.send(poll)
        break;
      }

      let msgArgs = args.slice(1).join(" ")

      message.channel.send("**" + msgArgs + "**").then(messageReaction => {
        messageReaction.react("👍");
        messageReaction.react("👎");
      })
      break;







    case 'ban':
      if(!message.member.hasPermission(['BAN_MEMBERS'])){
        message.channel.send(`**${message.author.username}**, you dont have permission to ban someone`)
      }

      if(!message.guild.me.hasPermission(['BAN_MEMBERS'])){
        return message.channel.send(`**${message.author.username}, i do not have the permission to ban someone`)
      }

      const target = message.mentions.members.first();

      if(!target){
        return message.channel.send(`**${message.author.username}**, you need to menton a user`)
      }

      if(target.id === message.author.id){
        return message.channel.send(`**${message.author.username}**, you cannot ban yourself!`)
      }


      if(!args[1]){
        return message.channel.send(`**${message.author.username}**, you need to provide a reason to ban a user`)
      }

      if(target.id === message.guild.ownerID){
        return message.channel.send(`**${message.author.username}**, that user is the server owner i cannot ban that user`)
      }


      let ban = new Discord.MessageEmbed()
      .setTitle(`successfully Banned ${target}`)
      .setColor(0x3BF04B)
      .setFooter(`Banned by ${message.author.tag}`)

      message.channel.send(ban)
      target.ban(args[1])

      break;


      case 'kick':

        if(!message.member.hasPermission(['KICK_MEMBERS'])){
          message.channel.send(`**${message.author.username}**, you dont have permission to kick someone`)
        }
  
        if(!message.guild.me.hasPermission(['KICK_MEMBERS'])){
          return message.channel.send(`**${message.author.username}, i do not have the permission to kick someone`)
        }
  
        const userg = message.mentions.members.first();
  
        if(!userg){
          return message.channel.send(`**${message.author.username}**, you need to menton a user`)
        }
  
        if(userg.id === message.author.id){
          return message.channel.send(`**${message.author.username}**, you cannot kick yourself!`)
        }
  
  
        if(!args[1]){
          return message.channel.send(`**${message.author.username}**, you need to provide a reason to kick a user`)
        }
  
        if(target.id === message.guild.ownerID){
          return message.channel.send(`**${message.author.username}**, that user is the server owner i cannot kick that user`)
        }
  
  
        let kickedf = new Discord.MessageEmbed()
        .setTitle(`successfully kicked ${userg}`)
        .setDescription()
        .setColor(0x15daea)
        .setFooter(`kicked by ${message.author.tag}`)
  
        message.channel.send(kickedf)
        userg.kick(args[1])



    






      














































  }
});

bot.login(process.env.token);

