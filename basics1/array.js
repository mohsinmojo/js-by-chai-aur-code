//array

const myArr = [1, 2, 3, 4, 5, 6]
const myNumber = ["mohsin", "raja", "john"]  //hum array ko teen tarike se mention kar sakte hai
const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[1]);
//array methods

// const rArray = [2, 3, 4, 5, 6]


// rArray.push(7)   //push means add karna 
// rArray.push(8, 9)
// rArray.pop()    //pop means last value remove karna
// rArray.unshift(2,3)//isse hum array main koi bhi value ko add kar sakte hai wo bhi shuruat main
// rArray.shift()//shift means first value ko remove karna


// console.log(rArray.includes(7));//includes se hum question puchte hai jo ki true or false main answer dega
// console.log(rArray.includes(5));
// console.log(rArray.indexOf(-9));//includes se hum question puchte hai jo ki true or false main answer dega

// const newArray = rArray.join()//isse hum array ko string main convert kar sakte hai


// console.log(rArray);
// console.log(newArray);
// console.log(typeof newArray);


//slice, splice

const rArray = [0, 1, 2, 3, 4]

// console.log("m ", rArray);
const array1 = rArray.slice(1, 4)
// console.log(array1)



const array2 = rArray.splice(1, 4)
// console.log("c ", rArray);
// console.log(array2)


const marval = ["ironman", "america", "hulk"]
const dc = ["superman", "batman", "flash"]

// marval.push(dc)
// console.log(marval[3][2]);
// const newA = marval.concat(dc)
// console.log(newA);

const allHeros = [...marval, ...dc]
// console.log(allHeros);

const realArray = [1, 2, 3, [4, 5, 6], 7,  [5, 6, 7, [8, 9]]]
const real_another_array = realArray.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("mohsin"))
console.log(Array.from("mohsin"))
console.log(Array.from({name: "mohsin"}))//intersting for interview

let score1 = 1000
let score2 = 2000
let score3 = 3000
 

console.log(Array.of(score1, score2, score3));





