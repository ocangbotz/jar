module.exports = {
	name: "setdeskgc",
	alias: ["sdgc"],
	category: "group",
	desc: "To change desk group ",
	use: "<text>",
	query: "Masukkan teks",
	isGroup: true,
	isAdmin: true,
	isBotAdmin: true,
	async run({ msg, naisa }, { q }) {
		await naisa.groupUpdateDescription(msg.chat, q).then(async(res) => {
	  await msg.reply("Success change description group")
	}).catch((err) => msg.reply(require('util').format(err)))
	},
};
