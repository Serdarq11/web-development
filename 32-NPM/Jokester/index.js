const jokes = require('give-me-a-joke');
const colors = require('colors');
const cowsay = require('cowsay');

console.log(jokes);
// {
//   getRandomCNJoke: [Function (anonymous)],
//   getCustomJoke: [Function (anonymous)],
//   getRandomDadJoke: [Function (anonymous)],
//   getRandomJokeOfTheDay: [Function (anonymous)]
// }

jokes.getRandomDadJoke (function(joke) {
    console.log(joke.rainbow);  // Did you hear about the cheese who saved the world? It was Legend-dairy! => each letter has a different color of rainbow, it can be seen in bash
});
