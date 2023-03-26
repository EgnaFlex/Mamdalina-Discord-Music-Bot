module.exports = {
  name: 'isVoiceEmpty',
  description: 'Checks if the voice channel is empty or not',
  execute(voiceChannel) {
    if (!voiceChannel) {
      return true;
    }
    const members = voiceChannel.members.filter(member => !member.user.bot);
    return members.size === 0;
  },
};
