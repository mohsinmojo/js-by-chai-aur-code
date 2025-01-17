//singleton
// object.create


// object literals

const mySymbol = Symbol("mykey1")


const myUser = {
    name: "mohsin",
    [mySymbol]: "mykey1",
    age: 40,
    email: "mohsdhd@gmail.com",  //this is object literals
    Id: "rajamohan",
    password: 67398,
    logIn: false,
    "full name": "mohammad moshin",
}
// console.log(myUser.name);
// console.log(myUser["full name"]);
// console.log(myUser[mySymbol]);

myUser.email = "mohdmohsin@gmail.com"
// console.log(myUser.email);
// Object.freeze(myUser)
myUser.email = "mohdanish@gmail.com"
// console.log(myUser);
myUser.greeting = function(){
    console.log("hello user");
    
}

myUser.greetingtwo = function(){
    console.log(`hello user ${this.name} how are you`);
    
}
// console.log(myUser.greeting());
// console.log(myUser.greetingtwo());

//===================================================================================================






