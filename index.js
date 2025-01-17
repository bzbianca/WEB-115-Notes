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

let myAge = window.prompt("How old are you?")
console.log(typeof myAge)
myAge = Number(myAge) // Convert to number
console.log(typeof myAge)

let x = "pizza";
let y = "pizza";
let z = "";

x = Number(x);
console.log(x);
y = String(y);
console.log(typeof y)
z = Boolean(z); // checks if the string has stuff in it, false = empty, true = has string
console.log(z)