const value = 5000
// console.log(value);
const score = new Number(1000.87804)
// console.log(score.toString().charAt(1));     it will give u number of strings 0=1,1=0
// console.log(score.toFixed(2)); ye point waale number ko fixed yaani point ke baad kitni value chahiye or round figur bhi kar deta hai

const anyNumber = 23.8980
// console.log(anyNumber.toPrecision(4));// ye value ko precise yani round figure main deta hai

const oneNumber = 10000000
// console.log(oneNumber.toLocaleString()); ye kisi bhi number ya date ko local yaani internantional indent main change kar deta hai
// console.log(oneNumber.toLocaleString(`en-IN`));ye kisi bhi number ya date ko local yaani indin indent main change kar deta hai
// console.log(Number.MIN_VALUE); smallest positive number possible in javascript
// console.log(Number.MAX_VALUE); largest positive number possible in javascript
// console.log(Number.EPSILON);

// ======================Maths=======================================================


// console.log(Math);
// console.log(Math.abs(-19));//isse hum - ki value ko + main change kar sakte hai
// console.log(Math.round(5.9));//isse hum value ko round up main le sakte hai
// console.log(Math.ceil(5.9));//isse hum round up main upper value ke liye use karte hai
// console.log(Math.floor(5.9));//isse hum round up main niche ki value ke liye use karte hai
// console.log(Math.sqrt(225));//isse hum sqrt nikal sakte hai
// console.log(Math.min(123, 234, 432));//minimum value
// console.log(Math.max(123, 234, 432));//max value
// console.log(Math.sin(45));//trigo value

// console.log(Math.random());//iski value hamesha 0-1 ke bich main aati hai
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 20 
const max = 30 
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
 















