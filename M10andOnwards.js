// // "object constructor" syntax
// //let user = new Object()

// // "object literal" syntax
// // let user = {}
// // let user {
// //     key: value, // key: value pairs
// //     property-name: value, // property name = key
// // }

// // let user = {
// //     name: "Karim",
// //     age: 30,
// // }
// // console.log(user)

// // //object.key = whatever
// // user.isStudent = true;
// // console.log(user)

// // // Remove properties
// // delete user.age
// // console.log(user)

// // // 2 notation styles for referencing keys
// // // object.key
// // // object[multi-word key] - if multi-word then it has to be within quotes
// // // add commas at object list on the last property
// // user["likes bird"] = true;
// // console.log(user)

// let newUser = {};

// // set new key
// newUser["likes roblox"] = true

// // get
// alert(newUser["likes roblox"]);

// // delete
// delete newUser["likes roblox"]

// console.log(newUser);

// // If this fulfills a condition, run a value set on apple in this case.
// // let fruit = prompt("Which fruit to buy?", "apple"); // second parameter is a placeholder text in prompt function
// // let bag = {
// //     [fruit]: 5, // reference something from outside then give it a value which in this case is 5
// // }
// // alert(bag.apple);

// let fruit = 'apple';
// let bag = {
//     [fruit + 'Computers']: 5
// }
// console.log(bag)

// // function makeUser(name, age){
// //     return {
// //         name: name, // or name,
// //         age: age, // or age,
// //         // etc.
// //     }
// // }

// // let user = makeUser("Marcus", 54)
// // alert(user.name);

// let student = {
//     name: "Quint",
//     age: 21,
// }
// alert("age" in student);
// alert("gamer" in student);

// // CHECK FOR VARIABLE DATA
// let newStudent = {
//     age: 35
// }
// let key = "age";
// alert(key in newStudent)

// // Syntax:
// // for (key in object) {
// //     // code to run
// // }

// let user = {
//     name: "Bianca",
//     age: 29,
//     isStudent: false,
// }
// console.log(user)

// for (let key in user) {
//     // keys
//     alert(key) // outputs keys
//     // values for the keys
//     alert(user[key]); // outputs values
// }

// practice
// let user = {
//     name: "Angel",
//     surname: "___",
// }


// OBJECTS
// A collection of related
// date (properties) and
// functions (methods)
// Often represent real-world entity
// ex. book, movie, person.

// STRUCTURE
const object = {
    propertyname: "object",
    secondproperty: "thing2"
}
console.log(object)

// EXAMPLE
const steve = {
    // OBJECT STATES
    // These properties describe
    // the state of an object.
    // or its characteristics.
    firstName: "Steve",
    lastName: "Minecraft",
    age: 55,
    isEmployed: false,
    // OBJECT BEHAVIORS (methods)
    sayHello: function() {
        console.log("I... AM STEVE")
    },
    action: function() {
        console.log("CHICKEN JOCKEY!!!")
    },
}
console.log(steve.lastName)
steve.sayHello()
steve.action()

const spongeBob = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 26,
    isEmployed: true,
    sayHello: function() {
        console.log("Hi! I am Spongebob!")
    },
    action: function() {
        console.log("I am making a Krabby Patty.")
    },
}
steve.sayHello()
spongeBob.sayHello()

let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    displayInfo: function() {
        console.log(`${this.title} by ${this.author}`);
    },
}
book.displayInfo();

class Book {
    constructor(title, author, genre) {
        this.title = title;
        this.author = author;
        this.genre = genre;
    }
    displayInfo() {
        console.log(`${this.title} by ${this.author} - Genre: ${this.genre}`)
    }
}

let myBook = new Book("The Hobbit", "J.R.R. Tolkien", "Fantasy");
myBook.displayInfo()

let mySecondBook = new Book("Dune", "Frank Herbert", "Sci-Fi")
mySecondBook.displayInfo();

// #property is a private property example

// INTERHITANCE



/* 
Javascript Scoping
Global Scope
Logic Scope
Block Scope
Module Scope
Scope is a place to store variables
*/

// const a = 1

// function test() {
//     const b = 2
//     console.log(a, b)
// }

// test()
// console.log(a, b)

// const globalVar = "Global"
// console.log(globalVar)

// const moduleVar = "Module"

// export const exportedVar = "Exported"
// new file to explicitly export that file into the new file
/* import { exportedVar } from "./moduleScript.js"*/

// function test() {
//     const b = 2
//     const c = 1

//     if (true) { // block scope is the first and the last curl brackets
//         const c = 3 // if you use var instead of const then it will become function scopes instead of just a block scope
//         console.log(b, c)
//     }
//     console.log(c)
// }

// test()



/* Hoisting */

// function sumFunc(a, b) {
//     return a + b
// }

// console.log(`sumFunc(1, 2) => ${sumFunc(1, 2)}`)
// console.log(`sumConst(3, 4) => ${sumConst(3, 4)}`)

// const sumConst = (a, b) = a + b

// var a = undefined // hoist the variable until you initialize it
// const a = undefined

// console.log(a)

// a = 2


/* Closure */
// A closure can be created by making an outer function with all of your current functions
// A function defined inside of another function, the inner function has access to the variables and scope of the outer function. Allow for private variablles and state maintenance. Used frequently in JS frameworks: React, Vue, Angular

// EXAMPLE 1:
// function outer() {
//     let message = "Hello"

//     function inner() {
//         console.log(message)
//     }

//     inner();
// }

// outer()

// EXAMPLE 2:
// function createCounter() { // private it, like an object
//     let count = 0; // variable is private

//     function increment() {
//         count++;
//         console.log(`Count increased to ${count}`)
//     }

//     function getCount(){
//         return count
//     }

//     return {increment}
// }

// const counter = createCounter();

// counter.increment();
// counter.increment(); 

// console.log(`current count is ${counter.getCount()}`)

// EXAMPLE 3:

// function createGame() {
    
//     let score = 0;

//     function increaseScore(points){
//         score += points
//         console.log(`+${points}pts`);
//     }

//     function decreaseScore(points){
//         score -= points
//         console.log(`-${points}pts`);
//     }

//     function getScore(){
//         return score;
//     }

//     return {increase, decreaseScore, getScore}
// }


// Method Chaining = Calling one method after another in one continous line of code

// let username = window.prompt("Enter your username: ")

// // ---- NO METHOD CHAINING -----

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;

// console.log(username);

// // ----- METHOD CHAINING -----

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// console.log(username)



// callback = a function that is passed as an argument to another function
//      used to handle asynchronous operations


// // EXAMPLE 1:
// hello(goodbye); // put function name in paratheses to ensure hello is executed first and the one inside is executed next


// function hello(callback){ // callback in parameter to allow function to be in the calling function
//     console.log("Hello!");
// }


// function leave(){
//     console.log("Leave!")
// }

// function goodbye(){
//     console.log("Goodbye!");
// }

// // EXAMPLE 2:

// sum(displayConsole, 1, 2)

// function sum(callback, x, y){
//     let result = x + y;
//     callback(result);
// }

// function displayConsole(result){
//     console.log(result)
// }

// // pretend you have an html element called H1
// function displayPage(result){
//     document.getElementById("myH1").textContent = result;
// }


// synchronous = executes line by line consecutively in a sequential manner
//      Code that waits for an operation to complete

// asynchronous = Allows multiple operations to be performed concurrently without waiting
//      Doesn't block the execution flow and allows the program to continue
//      (I/O operations, network requests, fetching data)
//      Handled with: Callbacks, Promises, Async/Await

function func1(){
    setTimeout(() => {console.log("Task 1");
                        callback()}, 3000);
}

function func2(){
    console.log("Task 2")
    console.log("Task 3")
    console.log("Task 4")
}

func1(func2)


// Callback Hell = Situation in JavaScript where callbacks are nested within other callbacks to the degress where the code eis difficult to read.
//      Old pattern to handle asynchronous functions
//      Use Promises + async/await to avoid Callback Hell
// function task1(){
//     setTimeout(() => {
//         console.log("Task 1 complete"); 
//         callback()
//     }, 2000)
// }
// function task2(){
//     setTimeout(() => {
//         console.log("Task 2 complete"); 
//         callback()
//     }, 1000)
// }
// function task3(){
//     setTimeout(() => {
//         console.log("Task 3 complete"); 
//         callback()
//     }, 3000)
// }
// function task4(){
//     setTimeout(() => {
//         console.log("Task 4 complete"); 
//         callback()
//     }, 1500)
// }

// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => console.log("All tasks are completed."))
//         })
//     })
// })


// Promise = An Object that manages asynchronous operations.
//      Wrap a Promise Object around {asynchronous code}
//      "I promise to return a value"
//      PENDING -> RESOLVED OR REJECTED
//      new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogwalked = true;

            if(dogwalked){
                resolve("You walk the dog");
            } else {
                reject("You didn't walk the dog")
            }
        }, 1500);
    });
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true;

            if(kitchenCleaned) {
                resolve("You clean the kitchen");
            } else {
                reject("You didn't clean the kitchen")
            }
        }, 2500);
    })
}

function takeOutTrash(){

    
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTaken = true;

            if(trashTaken) {
                resolve("You take out the trash");
            } else {
                reject("You didn't take out the trash")
            }
        }, 500);
    })
}

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return takeOutTrash()})
//          .then(value => {console.log(value); console.log("You finished all the chores")})
//          .catch(error => console.error(error));

// Async/Await = Async = makes a function return a promise
//               Await = maskes an async function wait for a promise

//               Allows you write asyncronous code in a synchronous manner
//               Async doesn't have resolve or reject parameters
//               Everything after Await is placed in an event queue

async function doChores(){ // await depends on async
    
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores!");
    }
    catch(error){
        console.error(error)
    }
}

// // Marcus is a bully so i made a promise
// function marcusIs(){

//     return new Promise((resolve, reject) => {
//         const marcusBullies = true;

//         if (marcusBullies) {
//             resolve("Anonymous Reporting System.")
//         } else{
//             reject("Marcus is.")
//         }
//     })
// }
// marcusIs().then(value => {console.log(value)}).catch(error => console.error(error))
