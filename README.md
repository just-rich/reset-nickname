# Reset a bot's nickname in all guilds

This code resets a bot's nickname in all the guilds it is in, with a delay of 2 seconds between each guild to prevent rate limiting.

## Convert a .txt list of tokens into token.js file to easily run this code for many tokens

This code will take tokens from a .txt and replace the word `token` in the index.js file with each token from the list, saving it to it's own token.js file (token1.js, token2.js, token3.js, and so on) to remove the manual labor of it.

## How to run
1. Run `npm install`
2. Create a `tokens.txt` file with a bot token on it's own line.  
3. Run `node make-files.js` and it will create a `token.js` file for each token with the code from `index.js` and a bot's token in it.  
4. Then run `node token1.js` and repeat for however many `token.js` files there are. It will reset the bot's nickname in each server. When it's done printing logs, it's finished.
