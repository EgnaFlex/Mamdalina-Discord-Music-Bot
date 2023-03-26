module.exports = {
  name: 'leave',
  description: 'Leaves the voice channel if the bot is currently in one',
  execute(message, args, queue) {
    const serverQueue = queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send('There is nothing playing.');
    }

    if (!message.member.voice.channel) {
      return message.channel.send(
        'You have to be in a voice channel to stop the music!'
      );
    }

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
    message.member.voice.channel.leave();
    queue.delete(message.guild.id);
  },
};
