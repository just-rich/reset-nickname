const fs = require('fs');

// Path to the text file with code
const codeFilePath = 'path/to/code_file.txt';

// Path to the text file with tokens
const tokensFilePath = 'path/to/tokens_file.txt';

// Read the tokens file into an array
const tokens = fs.readFileSync(tokensFilePath, 'utf-8').split('\n');

// Loop over each token
tokens.forEach((token, i) => {
  // Read the contents of the code file into a string
  const code = fs.readFileSync(codeFilePath, 'utf-8');

  // Replace all occurrences of "token" with the current token
  const codeWithTokenReplaced = code.replace(/token/g, token);

  // Generate the new file name
  const newFileName = `token${i+1}.js`;

  // Write the modified code to a new file
  fs.writeFileSync(newFileName, codeWithTokenReplaced, 'utf-8');
});

