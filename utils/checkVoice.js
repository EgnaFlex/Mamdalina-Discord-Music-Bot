const { VoiceState } = require('discord.js');

module.exports = {
  name: 'checkvoice',
  description: 'Check if the user is in a voice channel with the bot',
  execute(message, args) {
    // Get the user who sent the command
    const { member } = message;
    if (!member) {
      return message.reply('You must be in a server to use this command.');
    }

    // Get the voice channel where the user is currently connected
    const voiceChannel = member.voice.channel;
    if (!voiceChannel) {
      return message.reply('You must be connected to a voice channel to use this command.');
    }

    // Get the bot's current voice state in the same server
    const botVoiceState = message.guild.me.voice;
    if (!botVoiceState) {
      return message.reply('I am not currently in a voice channel.');
    }

    // Compare the two voice states to see if the user is in the same channel as the bot
    const sameChannel = botVoiceState.channelId === voiceChannel.id;
    if (sameChannel) {
      return message.reply('You are in the same voice channel as the bot.');
    } else {
      return message.reply('You are not in the same voice channel as the bot.');
    }
  },
};
