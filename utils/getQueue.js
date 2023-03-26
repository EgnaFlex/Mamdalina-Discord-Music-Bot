const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'queue',
  aliases: ['q'],
  description: 'Show the music queue and now playing.',
  execute(message, args, queue) {
    const serverQueue = queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send('There is no song playing right now.');

    const queueEmbed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Song Queue')
      .setDescription(`Now playing: **[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})**\n\n` +
        serverQueue.songs.slice(1).map((song, index) => `${index + 1}. **[${song.title}](${song.url})**`).join('\n'));

    return message.channel.send({ embeds: [queueEmbed] });
  },
};
