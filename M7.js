// DOM TECHNIQUES

// ADD ELEMENT TO PAGE

// Set Variable to element we want to add to 
const body = document.body;
console.log(body)

// Append = ADD to page
// append() & appendChild()
// append() = You can append string
// appendChild() = Errors when append strings. 
// Only work with appending elements

// body.append("Hello World")
// // body.appendChild("Hello World") does not work

// Create Elements
const div = document.createElement("div")
console.log(div);
body.append(div);

// // 2 ways to add text to this div, pick whatever you prefer
// div.innerText = "Hello again";
// div.textContent = "Hello again";

// Modify HTML
div.innerText = "<strong>Hello World 2</strong>" // modify literally
div.innerHTML = "<strong>This is bolded with .innerHTML</strong>" // looks for html additions

// You can also do this:
const strong = document.createElement("strong")
strong.innerText = "This is SO BOLD";
console.log(strong)
div.append(strong)

// Target by Class or Element, a bit more versatile than ids
const span = document.querySelector("span") // will look for one single item that will match one single class or element
console.log(span)
const spans = document.querySelectorAll('span')
console.log(spans)


const spanHi = document.querySelector("#Hello") // same as getElementById
console.log(spanHi)
const spanBye = document.querySelector("#Goodbye")
console.log(spanBye)

// spanBye.remove() // removeChild also works
// document.body.append(spanBye) // add to end, can append anywhere

// const myList = document.getElementById("myList")
// console.log(myList)
// const cssListItem = myList.children[1]; // Grab the CSS <li>
// console.log(cssListItem);

// const newListElement = document.createElement("li"); // Creat new list item
// newListElement.textContent = "Python";
// console.log(newListElement)
// // .replaceChild() syntax = .replaceChild(newChild, oldChild)
// myList.replaceChild(newListElement, cssListItem)

// Modifying Element Attributes

console.log(spanHi.getAttribute('id')) // OR ..
console.log(spanHi.id) // Prints Hello

// Set their ID
console.log(spanBye.id)
spanBye.setAttribute("id", "newGoodbye")
console.log(spanBye.id)

spanHi.removeAttribute("id")
console.log(spanHi)