const { Client, IntentsBitField } = require('discord.js');

const client = new Client({ intents: [IntentsBitField.Flags.Guilds] });

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  // Reset the bot's nickname in all servers it is in
  for (const guild of client.guilds.cache.values()) {
    try {
      const me = await guild.members.fetch(client.user.id);
      const currentNickname = me.nickname;
      if (currentNickname !== null) {
        await me.setNickname(null);
        console.log(`Successfully reset nickname in ${guild.name}`);
      } else {
        console.log(`No nickname found in ${guild.name}`);
      }
    } catch (error) {
      console.log(`Failed to reset nickname in ${guild.name}: ${error}`);
    }
    await wait(2000); // Wait for 2 seconds before processing the next server
  }
});

client.login('token');

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

