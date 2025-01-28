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
let x = "pizza";
let y = "pizza";
let z = "";

x = Number(x);
console.log(x);
y = String(y);
console.log(typeof y)
z = Boolean(z); // checks if the string has stuff in it, false = empty, true = has string
console.log(z)


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