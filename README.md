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

* `!sheriff <emoji> <message>` - post a sheriff meme in the channel or DM.  
	`<emoji>` can be one or multiple emoji. Can be left blank (and will fill in with a random emoji)  
	`<message>` is an optional message to add to your sheriff.

You can run Sheriffbot locally or you can use my copy (which is a constant WIP, don't get your hopes up)

### Use my bot:
1. Authorize sheriffbot to join your discord by clicking [this link](https://discordapp.com/oauth2/authorize?client_id=583103282898272276&scope=bot&permissions=2048).
2. `!sheriff` away

### Run it yourself:
1. `npm install https://github.com/rfilmyer/sheriffbot-discord.git`
3. Create a new application in Discord and set it to be a bot.
4. Set the `DISCORD_TOKEN` environment variable to your `token` from discord (under the "Bot" menu)
5. Run the application with `node app.js`

## Next steps
 * Known bug with compound emoji involving zero-width joiners
 * Handle custom discord emoji?
 * Better emoji repository
 * Help message
 * Any sort of error handling whatsoever