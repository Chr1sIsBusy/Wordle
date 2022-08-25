# Please read this first

While I did mostly follow a tutorial to make this there is my own code in there. The guide wanted me to use a freemium sort of API's where it was free up to so many calls and then it would charge my card but I don't like giving my card out to things that are supposed to be free so I found different APIs, had to figure out how to connect them, and eventually coming up solutions like including using a node module instead of an API which I believe to be faster then making an API request. That said there is still an API at use because it's important I have examples to use in the future. This is the project where I began to understand Javascript a lot more and why node.js is so helpful and what API's even are. I am proud of this one.

### To use
Make sure you have node.js installed.

1. Open new terminal and type in ``npm run start:backend``.

2. Open index.html and should work from there.


I would like that to start automatically but I'm still learning.


### Rules

A basic clone of wordle, you have six chances to guess the correct word and depending on the word you entered it’ll tell you whether you have the correct letters in the right spaces, correct letters in wrong spaces, or just wrong letters. It sends each entered word to an API to check if it is a legitimate english word and if not it will not let you enter said word and uses a node model to generate random english words.
