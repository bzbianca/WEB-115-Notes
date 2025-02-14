// JavaScript Code goes here
console.log("Internal JS console message. Hello, class")
console.log(document)
// console.dir(document)

// ALERTS //
// alert("Hello world") // Textbox pop-up

// window.onload = function(){
//     alert(`Hello, class`)
// }

// PROMPTS //
// let : normal variable that you can changeindex.js
// const : variable that cannot be change

// const student = prompt("What is your name?")
// console.log(student)

// writes to document, but doesn't work with script defer
// document.write(`<p>Hello, ${student}!</p>`)

// modern web dev standard

// const student = prompt("What is your name?");
// const messageElement = document.createElement("p"); // Create a new p element, which contains the student variable
// messageElement.textContent = `Hello, ${student}!`; // sets text content of that <p> element.
// document.body.appendChild(messageElement) // Append the new <p> to body>.
// // This ensures the content is dynamically added without overwriting any page content
// 

// WRITE TO ELEMENTS BY IDs //
// document.getElementById("myH1").innerHTML = "I love JavaScript";
// document.getElementById("myParagraph").textContent = "Hello, this is a paragraph."

// // Styling page elements
// document.body.style.color = "white"
// document.body.style.backgroundColor = "black"
// document.body.style.fontSize = "2em"

// console.log("test")

// EVENT LISTENERS //
document.getElementById("myH1").addEventListener("click", function(){
    // function details go here.
    document.getElementById("myH1").style.color = "red"
});

document.getElementById("myH1").addEventListener("mouseover", function(){
    document.getElementById("myH1").style.color = "orange"
});

document.getElementById("myParagraph").addEventListener("dblclick", function(){
    document.getElementById("myParagraph").style.fontSize = "2em"
});

document.getElementById("myButton").addEventListener("click", function(){
    document.body.style.backgroundColor = "black"
});

// DIFFERENCE BETWEEN .innerHTML and .textContent //

console.log(document.getElementById("paragraph2").innerHTML) // Outputs: "<b>text</b>"
console.log(document.getElementById("paragraph2").textContent) // Outputs: "text"

// Variables
// let x; // Declaration, can reference it like python 
// console.log(x)
// x = 2;
// console.log(x)
// const y = 10; // Initialization
// let z = 3; 

// x = "hello" // string
// console.log(x)

// z = true; // boolean
// console.log(z)

// let studentName = window.prompt("What is your name")

// console.log(studentName);

// window.alert(`Hello, your name is ${studentName}`) // backticks necessary

// let online = false;
// console.log(online)
// console.log(`Online Status: ${online}`)
// let enrolled = true;
// console.log(enrolled)
// console.log(`Enrolled: ${enrolled}`)

// ARITHMETIC OPERATORS = Operands
// +, -, *, l, **, %, ++, --

let students = 24;
console.log(students)
students = students + 1;
console.log(students)
students += 1; // Augmented Assignment Operators
// students -= 1;
// students *= 1;
// students /= 1;
// students **= 1;
// students %= 1;
students++;
console.log(students)
students--;
console.log(students)

// Order of Operations
// 1. Parentheses
// 2. Exponent
// 3. Multiplication & Division
// 4. Addition & Subtraction

let className = "WEB-115";
console.log(className);
console.log(typeof className);
console.log(className, typeof className)
myNumber = 5;
console.log(typeof myNumber)
/*
let myAge = window.prompt("How old are you?")
console.log(typeof myAge)
myAge = Number(myAge) // Convert to number
console.log(typeof myAge)
*/
/*
let x = "pizza";
let y = "pizza";
let z = "";

x = Number(x);
console.log(x);
y = String(y);
console.log(typeof y)
z = Boolean(z); // checks if the string has stuff in it, false = empty, true = has string
console.log(z)
*/

/*

MODULE 3 (M3)





// 4 TYPES OF ERRORS //

1. Load-time ERRORS (a. k. a. Syntax Errors)
    Occurs when program is loaded by browser.
    Grammar. Spelling mistakes, missing parentheses. Incomplete brackets.

2. Run-time Errors
    Occur when interpreter is unable to run the code.
    Syntax is correct, but execution is broken.
    ex. Reference an undeclared variable. Illegal math operations.

3. Logic Errors
 When code runs unexpectedly.

4. User Error
When user odes something un expected to the dev.


// DEBUGGING METHODS & TOOLS //
1. Tracing: The examination of individual statments in an executing program.
Displaying alert boxes at diff. points to show results intermittently.

2. Logging
(ex. console.log)

3. Commenting Out Code

4. Break Mode and Breakpoints
    Break Mode: Mode for running a program in which execution is paused/suspended to allow you to review the current state of variables and functions.

5. Scope Window
6. Watch Window
7. Call Stack

try catch finally block

*/

try {
    console.log(x);
}
catch {
    console.log;
}
finally {
    // Close files
    // Close connections
    // Release resources
    console.log("This code always executes");
}
// try{
//     const dividend = window.prompt("Enter dividend");
//     const divisor = window.prompt("Enter a divisor");

//     const result = dividend / divisor;
//     console.log(result);
// }
// catch{
//     console.error(error)
// }
// console.log("You have reached the end.");
/*
try{
    const dividend = window.prompt("Enter a dividend");
    const divisor = window.prompt("Enter a divisor");

    if(divisor == 0){
        throw new Error("You can't divide a zero!");
    }
    if(isNaN(dvidend) || isNaN(divisor)){
        throw new Error("Value must a number.")
    }
    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}

try{
    alert(username)
} catch(error){
    console.error("Error: this variable has not been declared.")
}
*/
// MODULE 4 (M4) //

// IF STATEMENTS //

let age = 25;

if (age >= 21){
    console.log("You are a legal adult.");
}
else{
    console.log("You are a minor.");
}

// Nested if Statements
// Got a license?

let hasLicense = true // Boolean true false variable

if(age >= 16){ // if age >= 16
    if(hasLicense == true){ // Yes to license
        console.log("You are old enough to rive and have your license.");
    }
    else {
        console.log("You're old enough to drive, but still need a license.");
    }
    
}
else{ // if age < 16
    console.log("You are not enough old to drive.");
}

// else if statement. Enter a social media site. Gotta be 13+

age = 13;


if(age >= 100){
    console.log("You are TOO OLD to brainrot.");
}
else if(age < 0){
    console.log("You cannot be younger than nothing.");
}
else if(age == 0){
    console.log("How is a baby on tiktok?");
}
else if(age >= 13){
    console.log("You are old enough to doomscroll...");
}
else{
    console.log("You must be 13+ to scroll tiktok.");
}

// Function are reusable sections of code.
// Declare code once, use it whenever you want after that.
// Call the function to execute that code.

// SYNTAX OF FUNCTION FOR JAVASCRIPT //
/*
function functionname(parameters, parameters){
    // function code goes here
}
*/

function happyBirthday(username, birthdayAge){
    console.log("Happy birthday to you");
    console.log("Happy birthday to you");
    console.log(`Happy birthday dear ${username}`);
    console.log("Happy birthday to you");
    console.log(`You are ${birthdayAge} years old.`);
}

happyBirthday("Evan", 45); // Arguments
happyBirthday("Mr. Gardner", 38);
happyBirthday("Marcus", 56);

function add(x, y){
    let result = x + y;
    return result
}
let answer = add(2, 3)
console.log(answer)
console.log(add(3,5))

function subtract(x, y){
    let result = x - y;
    return result
}

let subtractAnswer = subtract(8, 5);
console.log(subtractAnswer)
/*
function isEven(number){
    if (number % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
*/
function isEven(number){
    return number % 2 === 0 ? true : false; // Ternary Operator
}

console.log(isEven(12));

function isValidEmail(email){
    return email.includes("@") ? true : false;
}
console.log(isValidEmail("etgardner@waketech.edu"))

// LOOPS //

// While loop //
// Repeat some code WHILE condition is true
/*
let username = "";

if(username === ""){
    console.log(`You didn't enter your name.`);
}
else{
    console.log(`Hello ${username}`);
}
*/
/*
1. while(condition){code}
2. do{code}while(condition)
*/
/*
let myUsername = "";

while(myUsername === ""){
    console.log(`Name no found.`);
    myUsername = window.prompt(`Enter your name`);
}
console.log("While loop finished.");
console.log(`Hello ${myUsername}`);
*/
// ANOTHER WAY VIA DO WHILE. RUN CODE FIRST, THEN CHECK CONDITION.
/*
let myName;

// || means or
// ! means not

do{
    myName = window.prompt(`Enter your name`);
}while(myName === "" || myName === null);
*/
/*
let loggedIn = false;
let myNewUserName;
let myPassword;

while(!loggedIn){
    myNewUserName = window.prompt(`Enter your Username.`)
    myPassword = window.prompt(`Enter your Password`)
    if(myNewUserName === "username" && myPassword === "password"){
        loggedIn = true;
        console.log("Log in success!")
    }
    else{
        console.log("Invalid credentials. Try again.")
    }
}
*/
// FOR LOOPS //
// Repeat some code a LIMITED amount of times.

for(let i = 0; i <=2; i++){ // i = 0; i <=2; i++
    console.log("Hello");
    console.log(i)
}
for(let i = 1; i <= 20; i++){
    if(i == 13){
        break; // continue; (continue will skip that part of the loop, while break will break out of the loop)
    }
    console.log(i)
}

/*
1. for(counter;condition;increment or decrement{code}
* continue; will skip iteration
* break; will exit the loop
*/

// 1D Array = a variable like a structure that can hold more than 1 value.
// 1D Array = a list from Python

let fruits = ["apple", "orange", "banana"];
console.log(fruits[0]);
fruits[3] = "coconut"; // Add to new [3] of the array
console.log(fruits[3]);

fruits.push("coconut"); // Add element to end of array
fruits.pop(); // Remove last element.
fruits.unshift("mango") // Add element to beginning of array.
fruits.shift(); // remove element from beginning.

let numOfFruits = fruits.length;
console.log(numOfFruits);
console.log(fruits.length);

let index = fruits.indexOf("apple"); // Search for index of matching.
console.log(index);
// If .indexOf doesn't find a match, then returns -1.
// Use in an if statement to do something if no match (if .indexOf() = -1...)

// Iterate through an array.

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// Iterate through array backwards.
for(let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}

// // Enhanced for loop

for(let fruit of fruits){
    console.log(fruit);
}

// Sort method (alpha A-Z)
fruits.sort();
console.log(fruits);
// Reverse sort. (alpha Z-A)
fruits.reverse();
console.log(fruits);

// 2D Arrays = a multi-dimensional array that stores a matrix of data in rows and columns.
// Useful for games, spreadsheets, image representations

//  [X, O, X]
//  [O, X, O]
//  [X, O, O]

const matrix = [[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]];
console.log(matrix)

for (let row of matrix){
    // console.log(row) // 1st
    const rowString = row.join(' '); 
    // .join adds something between each array element
    console.log(rowString)
}

// matrix[row][column]
matrix[0][0] = 'X';
matrix[0][1] = 'O';
matrix[0][2] = 'X';
matrix[1][0] = 'O';
matrix[1][1] = 'X';
matrix[1][2] = 'O';
matrix[2][0] = 'X';
matrix[2][1] = 'X';
matrix[2][2] = 'X';


const numPad = [[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
                ['*', 0, '#']];
console.log(numPad)

// Objects = like a Dictonary in Python
// NOT the same as "Objects" from the term Object-Oriented Programming!!

let person = {
    // Name/Value pairs
    firstName : "John",
    lastName : "Smith",
    age : 46,
    email: "johnsmith@email.com"
}

console.log(person)
// Dot notation
console.log(person.firstName)

// Bracket Notation

// console.log(person[age]) // Will not work.
console.log(person["age"]) // Assuming a variable.
console.log(person["age"] + 10)

// Looping through Object - very particular
for (i in person){
    // console.log[i]; // Will not work
    // console.log(person.i) // Also will not work.
    console.log(person[i]) // THIS WORKS!!!
}

for (i in person) {
    console.log(i + ": " + person[i]);
}

// MATH Object = a built-in object that provides
//              a collection of properties & methods
/*
let x = 1.99;
let y = 4;
let z = 8.2

console.log(Math.PI); // Gives value of PI. 3.14159265
console.log("The minimum is: " + Math.min(x, y, z)); // find minimum
console.log("THe maximum is: " + Math.max(x, y, z)); // find maximum


console.log(Math.sqrt(y)); // find square root
console.log(Math.round(z)); // general round
console.log(Math.floor(x)); // round down
console.log(Math.ceil(x)); // round up

console.log(Math.trunc(z)); // remove decimal portion
console.log(Math.pow(x,y)) // x to the power of y

console.log(Math.sign(0)) // returns whether x is NEGATIVE(-1), NULL(0), or POSITIVE(1)

console.log(Math.random); // Returns a random number between 0 (inclusive ... )
console.log(Math.random() * 10) // Returns a random number from 0-9
console.log(Math.random() * 11) // Returns a random number from 0-10
console.log(Math.random() * 101) // Returns a random number from 0-100

let min = 1;
let max = 100;

//This is JS function always returns a random number
//              between min (included) and max and (excluded)
// Returns random number that could be 1-99
function getRndIntegerExclusive(min, max) {
    return Math.floor(Math.random() * (max - min) ) - min;
}

//This JS function always returns a random number
// between min and max (both included) (1-100).

function getRndIntegerInclusive(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/

// SPREAD OPERATOR = ... allows an iterable items such as an
//[array] or "string" to be expanded into separate elements.
//                          (unpacks the elements)

let numbers = [1,2,3,4,5];

// cannot pass array to Math.max. Returns NaN.
let maximum = Math.max(numbers)
console.log(numbers)

// use spread operator on [numbers]
let newMaximum = Math.max(...numbers) 
console.log(...numbers)

console.log(maximum)
console.log(newMaximum)

let minimum = Math.min(...numbers);
console.log(minimum);

// Spread strings

let username = "Mr. Gardner"
let letters = [...username];
console.log(username)

console.log(letters) // unpacks the string into individual letters

// All one string, but dash between each letter.
let assembledUsername = [...username].join("-"); 
console.log(assembledUsername)

// Combining arrays with spread operator

let fruitsAgain = ["apple", "orange", "banana"];
let vegetables = ["carrots", "peppers", "broccoli"];

// combines fruits Again + vegetables
let foods = [...fruitsAgain, ...vegetables];
console.log(foods)

// combines fruitsAgain + vegetables
foods = [...fruitsAgain, ...vegetables, "eggs", "milk"];
console.log(foods);

// CONDITIONAL (Logical Operators) in JS
// Used to combine or manipulate boolean values (true or false)
// AND operator = && (python verison = and)
// OR operator = || (python verison = or)
// NOT operator =! (python verison = not)

// === is the Strict Equality Operator
// !== is the Strict INEQUALITY Operator

let x = true;
let y = false;
let z = true;

// Simple boolean check

if(y){
    console.log("this true")
}else{
    console.log("this is false")
}

// The ANd && operator
if(x && y){
    console.log("x and y are true")
}else{
    console.log("x and y together are not true")
}

// The OR || operator

if(x || y){
    console.log("x or y is true")
}else{
    console.log("Neither x nor y are true")
}

// The NOT ! operator
if(!x){
    console.log("x is not true")
}else{
    console.log("x is true")
}

const temp = 75;
/* // NOT THE BEST WAY TO DO THIS
if(temp > 0){
    console.log("The weather is above 0")
} else if(temp == 32){
    console.log("The temp has just hit freezing.")
} else{
    console.log("The temp is below 0")
}
*/

// Check range of numbers with logical operators

if (temp > 70 && temp < 80){
    console.log("The temp is ideal")
}else{
    console.log("The temp is not ideal.")
}

// Check range with OR operator

if (temp > 90 || temp < 60){
    console.log("The temp is extreme (hot or cold)")
} else{
    console.log("The temp is within an acceptable range.")
}

// if operator number range check

if(!(temp > 100) || temp < 50){ // NOT too hot OR too cold
    console.log("Temp is acceptable")
}else{
    console.log("temp is extreme (too hot or too cold)")
}

// Equality & Strict Equality
/*
    = assignment operator
    == comparison operator (check if values are equal)
    === strict equality operator (compares if values AND the datatype are equal)
    != inequality operator
    !== STRICT inequality operator
*/

const PI = 3.14;
console.log(typeof PI);

if(Pi == "3.14"){
    console.log("That is Pi.")
} else{
    console.log("That is NOT PI.")
}

// The string 3.14 is == the number 3.14 in JavaScript
if(Pi === "3.14"){
    console.log("That is Pi.")
} else{
    console.log("That is NOT PI.")
}


// If the two are no equal this should evaluate to rue and trigger the else statement
if(PI != "3.14"){
    console.log("That is NOT Pi.")
}else{
    console.log("This is Pi.")
}

// Here the two are STRICTLY NOT equal, evaluating the if statement
if(PI !== "3.14"){
    console.log("That is NOT Pi.")
}else{
    console.log("This is Pi.")
}