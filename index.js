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
// let : normal variable that you can change
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
document.getElementById("myH1").innerHTML = "I love JavaScript";
document.getElementById("myParagraph").textContent = "Hello, this is a paragraph."

// Styling page elements
document.body.style.color = "white"
document.body.style.backgroundColor = "black"
document.body.style.fontSize = "2em"

