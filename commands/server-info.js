const { prefix } = require('../config.json');

module.exports = {
	name: `${prefix}server`,
	execute(message) {
        message.channel.send({embed: {
			color: '#99004C',
			title: `${message.guild.name}`,
            description: `\n**Regiao   ** ${message.guild.region}\n**Membros   ** ${message.guild.memberCount}\n**Dono  ** ${message.guild.owner}`,
          }});
    },
};