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


/*
The DOM

DOM Events Listeners
You can add multiple event handlers to one element
YOu can add *many* event handlers of the same type to one element, i.e 2x "click" events
You can add event listeners to any DOM object, not only HTML elements
YOu can call functions when adding event listners in 2 different ways:
1. You can write the function instead the event listener
2. You can call out an external "named" function
When passing parameter values to a function in an Event Listener, wrap it in an "anonymous function" that calls the specificed function with the parameters


Event Bubbling or Event Capturing
What happens if you have a <p> element instead a <div>, both having event listners on them, and the user clicks on the <p>?
Answer: It depends. There is two different ways
There is a third parameter called useCapture, its a boolean
Event Bubbling: innermost element is handled first
Event Capturing: outermost element event is handled first
Default is false
False = useCapture
True = useBubbling


DOM Methods
With the object model, Javascript gets all the power it needs to create dynamic HTML:
HTML elements, attributes, style
getElementById(), etc.


Methods vs. Properties in HTML DOM
Properties:
Values of HTML elements that you can set or change
Hold values that describe the current state or settings of that element.
They store information about the element
What it "is"

Methods
Actions you can perform on HTMl elements
"verbs" that the elemnet can "do."
They can change the element's state, add or remove elements, or respond to events
What it "does"


Finding HTML Elements
by id, tag name, class name, css selectors, html object collections


The BOM

The BOM Window Object
Interact with the broswer window
Ex: alert()
Ex: retrieve the width and height

Window can open new browser, tabs or load new pages and even interact with history

window. <- starting property
don't have to always put window
window.open() - opening a new window where you can customize the size, position and appearance of the browser
alert()
confirm()

Location Object

Navigator - provides information about the browser that is being displayed
Common used property is userAgent - provides a string that describes the user agent of the browser
Another property - plugins - which provides an array of objects representing hte plugins installed

Screen Object - provides information about the user's screen
History Object - contains information about user's browser history
*/