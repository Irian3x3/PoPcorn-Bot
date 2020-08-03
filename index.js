
const Discord = require("discord.js");
const bot = new Discord.Client();
var version = 'v0.1';
const ytdl = require ('ytdl-core')
const moment = require("moment");
require("moment-duration-format");
var command = '.commands';
const PREFIX = '.';
var changes = 'Added 2 new commands, Fixed the play command issue';
var AI = 'AI currently in work';




bot.on('ready',() =>{
   bot.user.setActivity('.help | popcornbot.wordpress.com');
    console.log('This bot is online');
})








bot.on('message', async message=>{ 
    let args = message.content.slice(PREFIX.length).split(' ');

   
    switch(args[0]){








      case 'welcome':
         message.channel.send('Thank you for inviting me :)')
      break;


      case 'help':

      const help = new Discord.MessageEmbed()
      .setTitle('Help command')
      .addField('Please select .command to get a list of our commands', command )

      message.channel.send(help)
      break;




      case 'commands':

        const commands = new Discord.MessageEmbed()
        .setTitle('These are the commands')
        .setFooter('.Warn, .website, .info, .advice, .say, .spank, .slap, hi, .punch, .dropkickanime, .play, .premium, .User, .serverinfo, .rate(Requires a number under 10), .destroy')
  
        
          message.channel.send(commands)
      break;
    
            

      
            case 'Warn':
             if(!message.member.hasPermission('MANAGE_MESSAGES')) {

              const warn = new Discord.MessageEmbed()
              .setTitle('You require `Manage Messages` permission to run this command')
              .setColor(0x15ff00)


              message.channel.send(warn)
             }else{
               if(!args[1]) return message.channel.send('Please state a user')

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
              if(!message.member.hasPermission(['MANAGE_MESSAGES'])) {

                message.channel.send('You require the `Manage Messages` permission to execute this command')
              }
              else{
                message.delete();
                message.channel.bulkDelete(args[1]);
              }
              break;
                
                
            case 'say':
                if(!message.member.hasPermission(['MANAGE_MESSAGES'])) {

                    message.channel.send('You require the `Manage Messages` permission to execute this command')
                  }
                  else{

                    message.delete();
                    message.channel.send(args.slice(1).join(" "));
                  }
                  break;

            case 'spank':
                if(!args) return message.content.reply('state user')
                message.channel.send('spanked the user https://tenor.com/view/spank-tomandjerry-gif-5196956')
                break;
            
            
             

            case 'slap':
                if(!args[1])    return message.content.reply('User specification is required')
                  message.channel.send('Slapped specified user https://tenor.com/view/vanderpump-rules-pump-rules-slap-gif-4474446')
            break;

        
            case 'hi':

             message.channel.send( 'https://tenor.com/view/hi-lilo-stitch-hello-gif-3566277')
            break;

            case 'punch':

                if(!args[1])           return message.channel.reply('User specification is required')
                message.channel.send('Oh yeah you puch him boy https://tenor.com/view/face-punch-punch-minions-fine-happy-gif-4902917')
            break;


            case 'dropkickanime':
                      if(!args[1])        return message.channel.reply('State a fricking user dude')
                      message.channel.send('Do it! Yeah u go https://images.app.goo.gl/jKU8o3QaQYEorgvW6')
            break;



            case 'premium':
                message.channel.send('There is currently **NO PREMIUM** version of `PoPcorn Bot` If you find any website stating popcorn bot premium **THEY ARE FAKE**');
            break;



          case 'play':
            const voiceChannel = message.member.voice.channel
            const play = new Discord.MessageEmbed()
           .setTitle('You need to be in a Voice Channel to run this command')
           .setColor(0xf0ff00)


            if(!voiceChannel) return message.channel.send(

               message.channel.send(play)

            );
           const permissions = voiceChannel.permissionsFor(message.client.user)
           if(!permissions.has('CONNECT')) return message.channel.send(':no_entry_sign: I dont have the permission `connect` so i can\'t run this command')
           if(!permissions.has('SPEAK')) return message.channel.send(':no_entry_sign: I don\'t have `Speak` permission')


           try{
                  var connection = await voiceChannel.join()
           }catch (error){
             console.log('Erorr connecting: {erorr}')
             message.channel.send(':x: Erorr while connection to the Voice Channel')
           }

           const dispatcher = connection.play(ytdl(args[1]))
           .on('finish', () => {
             voiceChannel.leave()
             message.channel.send('I have left the voice channel after playing the music ')
           })
      .on('error', error =>{
        console.log(error)
      })
      dispatcher.setVolumeLogarithmic(5 / 5)
      break;




    

       

     

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
  .addField ('Author', message.author.username)
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
      if(args[1]) 
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
      if(!message.args[1]){
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


    message.delete();
    message.channel.send(args.slice(1).join(" "));
    const emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'thumbsup');
  const emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'thumbsdown');
  message.react(emoji);







  case 'mute':
    if(!message.member.hasPermission('BAN_MEMBERS')){
      message.channel.send('You require `BAN_MEMBERS` permission ||B R U H||')
    }else{
      
    }
















  





   



  




   

    
    
          









      
    }
});

bot.login(process.env.token);

