const emojiDescriptionList = require('./emojiLookup.json');

const GraphemeSplitter = require("grapheme-splitter");
const splitter = new GraphemeSplitter();

const Discord = require('discord.js');
const client = new Discord.Client();

const discordToken = process.env.DISCORD_TOKEN

client.on('ready', () => {
	console.log("howdy 🤠")
})

client.on('message', message => {
	//split and look for command word
	const messageContentSplit = message.content.split(' ')
	if (messageContentSplit[0] === '!sheriff') {
		const replaceEmojiString = messageContentSplit[1] || randomEmoji();
		const replaceEmojiArray = splitter.splitGraphemes(replaceEmojiString);
		const sheriffText = messageContentSplit.slice(2,).join('');
		const finalSheriff = withBottomText(replaceEmojiArray, sheriffText || undefined);
		message.channel.send(finalSheriff)
	}
})

client.login(discordToken)
	.catch(console.error)


// emoji handling
function randomEmoji(){
	const allEmoji = Object.keys(emojiDescriptionList)
	return allEmoji[Math.floor(Math.random()*allEmoji.length)]
}

function lookupEmojiDescription(emoji) {
	return emojiDescriptionList[emoji]
}

// conceptually, this lines up when we replace the placeholder
const sheriffRaw = `
⠀ ⠀ ⠀  🤠
　   aaa
    a   a　a
   👇   aa 👇
  　  a　a
　   a　 a
　   👢     👢
`

const sheriffArray = ["⠀ ⠀ ⠀  🤠\n" + 
	"　   ", "", "", "\n" + 
	"    ", "   ", "　", "\n" +
	"   👇   ", "", " 👇\n" + 
	"  　  ", "　", "\n" +
	"　   ", "　 ", "\n" +
	"　   👢     👢"]

function createSheriff(emojiArray){
	let formattedSheriff = []
	sheriffArray.forEach(function(section){
		formattedSheriff.push(section)
		const emoji = emojiArray[Math.floor(Math.random()*emojiArray.length)];
		formattedSheriff.push(emoji)
	})

	const noDanglingEmoji = formattedSheriff.slice(0, -1)
	return noDanglingEmoji.join('')
}

function withBottomText(emojiArray, bottomText) {
	const sheriff = createSheriff(emojiArray)
	const sheriffTextIntro = "\nhowdy. i'm the sheriff of "
	let fullSheriff;
	if (bottomText !== undefined) {
		fullSheriff = sheriff + bottomText
	} else if (emojiArray.length >= 1) {
		const emojiLabel = lookupEmojiDescription(emojiArray[0])
		fullSheriff = sheriff + sheriffTextIntro + emojiLabel
	}
	return fullSheriff
}

