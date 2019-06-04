# sheriffbot-discord

⠀ ⠀ ⠀  🤠
　   🖥
    🖥   🖥　🖥
   👇   🖥 👇
  　  🖥　🖥
　   🖥　 🖥
　   👢     👢

howdy. i'm the sheriff of discord bots.

Sheriffbot is a discord bot that creates Sheriff memes on demand, either with a random or a prespecified set of emoji.

## How to use

Just one command so far:

* `!howdy <emoji> <message>` - post a sheriff meme in the channel or DM.  
	`<emoji>` can be one or multiple emoji. Can be left blank (and will fill in with a random emoji)  
	`<message>` is an optional message to add to your sheriff.

You can run Sheriffbot locally or you can use my copy (which is a constant WIP, don't get your hopes up)

### Use my bot:
1. Authorize sheriffbot to join your discord by clicking [this link](https://discordapp.com/oauth2/authorize?client_id=583103282898272276&scope=bot&permissions=2048).
2. `!howdy` away

### Run it yourself:
1. Clone this repository
2. Install the dependencies (currently `discord.js`, I know my dependency management sucks right now, I'm still learning Node)
3. Create a new application in Discord and set it to be a bot.
4. Create a file `config.json` that has your `token` from discord (under the "Bot" menu)
5. Run the application with `node app.js`

## Next steps
 
 * Having the `token` be set through an environment variable instead, for easier containerization
 * Actual dependency management
 * Better emoji repository