let baileys = require("@adiwajshing/baileys");

module.exports = {
	name: "infochat",
	alias: ["sider"],
	desc: "See Who I am who reads messages",
	category: "info",
	isQuoted: true,
	async run({ msg, naisa }) {
		let message = await msg.getQuotedObj();
		if (!msg.quoted.fromMe) return msg.reply("The message was not sent by a bot!");
		let teks = "";
		for (let i of message.userReceipt) {
			let read = i.readTimestamp;
			let unread = i.receiptTimestamp;
			let waktu = read ? read : unread;
			teks += `⭔ @${i.userJid.split("@")[0]}\n`;
			teks += ` ┗━⭔ *Time :* ${require("moment-timezone")(waktu * 1000).format("DD/MM/YY HH:mm:ss")}\n`;
			teks += `⭔ *Status :* ${read ? "Terbaca" : "Centang 2"}\n\n`;
		}
		await msg.reply(teks);
	},
};
