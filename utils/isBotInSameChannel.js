module.exports = {
  name: 'isBotInSameChannel',
  description: 'Checks if the bot is in the same voice channel as the user',
  execute(message) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return false;
    }
    const botVoiceChannel = message.guild.me.voice.channel;
    if (!botVoiceChannel) {
      return false;
    }
    return voiceChannel.id === botVoiceChannel.id;
  }
};
