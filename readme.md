# Wordle

Wordle clone uses a node module to generate a random 5 letter english word and uses a dictonary API to check if each entered guess is an english word or not.

### To use
Make sure you have node.js installed.

1. Open powershell and navigate to the Wordle folder.

2. Run ``npm run start:backend``.

2. Open index.html.

### Rules

A basic clone of wordle, user has six chances to guess the correct word and depending on the word entered it’ll respond whether user has the correct letters in the right spaces, correct letters in wrong spaces, or just wrong letters. It sends each entered word to an API to check if it is a legitimate english word and if not it will not let user retry word.
