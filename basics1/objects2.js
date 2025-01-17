//how to construct or singleton objects

// const user1 = new Object() //this is singleton objects
const user2 = {} //this is non singleton objects

user2.name = "raju"
user2.Id = 1233,
user2.logIn = "raju24@"

// console.log(user2);

const newUser = {
    email: "modhid@gmail.com",
    fullname: {
        userfullname: {
            firstname: "mohammad",
            lastname: "mohsin",
        }
    }
}

// console.log(newUser.fullname.userfullname.firstname); 


const obj1 = {1: "A"}
const obj2 = {2: "B"}
const obj4 = {4: "c"}
// const obj3 =Object.assign({}, obj1, obj2, obj4) //we will do chianing two or more object like this
const obj3 = {...obj1, ...obj2, ...obj4}
//  console.log(obj3); 

const users = [
    {
        email: "mohdf@gmail.com"
    },
    {
        name: "mohammmad"
    }
]
users[1].email

console.log(user2);
console.log(Object.keys(user2))//whenever we want objects keys to we usee this structure
console.log(Object.values(user2))//whenever we want objects values to we usee this structure
console.log(Object.entries(user2))
console.log(user2.hasOwnproperty('logIn'));

