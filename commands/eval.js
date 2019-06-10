const { RichEmbed } = require('discord.js');

module.exports = {
	name: 'eval',
	description: 'evaluate',
	execute(client, message, args) {
		if (message.author.id !== process.env.OwnerId && message.author.id !== process.env.OwnerId)
		return;
		try {
			let codein = args.join(" ");
			let code = eval(codein);
			if (typeof code !== 'string')
			code = require('util').inspect(code, { depth: 0 });
			let embed = new RichEmbed()
			.setAuthor('Evaluate')
			.setColor("RANDOM")
			.addField(':inbox_tray: Input', `\`\`\`js\n${codein}\`\`\``)
			.addField(':outbox_tray: Output', `\`\`\`js\n${code}\n\`\`\``);
			message.channel.send(embed);
		}
		catch (e) {
		message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
		}	
	},
};