module.exports = {
	name: "save",
	alias: ["sf"],
	category: "private",
	desc: "Menyimpan / menambah file",
	isOwner: true,
	query: "Masukkan nama path file,\n example: .sf ./command/other/fitur.js",
	use: "<name file>",
	isQuoted: true,
	async run({ msg, naisa }, { isOwner, q, map, args }) {
		await require("fs").writeFileSync(q, msg.quoted.text);
		await msg.reply(`Saved successfully, and is restarting`);
		process.send("reset");
	},
};