//String basics
const name = "Sandip"
const Score = 18
console.log(name + Score);

const gameName = new String('Cricket')
console.log(gameName[3]);
 console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));

const newGame = new String('Sandip');
console.log(newGame.substring(0,4));

const url = "https:bagdasandip%20.com"
console.log(url.replace('%','-'));
console.log(url.includes('hello'));
