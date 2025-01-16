const name = "mohsin "
const code = 5679380
// console.log(name + code);(we will not merge strings like that) 
 console.log(`hello my name is ${name} and my code is ${code}`);
//  (we will use this syntax when we combined two or more strings)

// one more structure by which we can make string

const gameName = new String('mohsin-md-rose')
console.log(gameName[4]);
console.log(gameName[5]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('d'));
console.log(typeof gameName);
console.log(gameName.toLowerCase());
console.log(gameName.charCodeAt());
console.log(tense.trim()); 
console.log(tense.repeat(2)); 

const newString = gameName.substring(1, 4)
console.log(newString);
const anotherName = gameName.slice(2, 6)
console.log(anotherName);

const xName = "  rose is red   "
console.log(xName);
console.log(xName.trim());

const link = "https//:roseisred%783mohsin"
console.log(link.replace('%783', 'md'));
console.log(link.includes('hitesh'));
console.log(gameName.split('-'));

















