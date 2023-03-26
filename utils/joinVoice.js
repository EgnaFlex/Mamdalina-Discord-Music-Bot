const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
  name: 'join',
  description: 'Joins your voice channel.',
  async execute(message, args, queue) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play music!');
    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: voiceChannel.guild.id,
      adapterCreator: voiceChannel.guild.voiceAdapterCreator,
    });
    queue.set(message.guild.id, {
      textChannel: message.channel,
      voiceChannel,
      connection,
      songs: [],
      volume: 5,
      playing: true,
    });
    message.channel.send(`Joined ${voiceChannel.name}!`);
  },
};
