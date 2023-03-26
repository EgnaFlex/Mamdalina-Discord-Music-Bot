const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'queue',
  description: 'Müzik sırasını listeler',
  execute(message, args, serverQueue) {
    if (!serverQueue)
      return message.channel.send(
        'Şu anda çalınan bir şarkı yok!'
      );
    const queueEmbed = new MessageEmbed()
      .setTitle('Müzik Sırası')
      .setColor('#ff0000')
      .addField(
        'Şu anda çalınan',
        `**${serverQueue.songs[0].title}**`
      )
      .addField(
        'Sırada bekleyen şarkılar',
        serverQueue.songs
          .slice(1)
          .map((song, index) => `${index + 1}. ${song.title}`)
          .join('\n')
      );
    return message.channel.send(queueEmbed);
  },
};
