// DOM Traversal

const main = document.getElementById("main");
console.log(main);
main.textContent = "New Text on Main";
main.style.background = "yellow";

function changeColor(element, color) {
    element.style.backgroundColor = color;
}

changeColor(main, "pink");

// function simpleChangeColor(element){
//     element.style.backgroundColor = "pink"
// }

const parents = Array.from(document.getElementsByClassName("parent"));
console.log(parents)

//parents.forEach(changeColor(element, "green"));
parents.forEach(element => changeColor(element, "yellow"));

// Introduce querySlector & grandparent div
const grandparent = document.querySelector(".grandparent");
console.log(grandparent);

changeColor(grandparent, "#e0c297");

// Create new array for parents from the grandparent
const parents2 = Array.from(grandparent.children)
console.log(parents2)
parents2.forEach(element => changeColor(element, "purple"))

// Grab first parent from the parents 2 array:
const parentOne = parents2[0];
console.log(parentOne)
changeColor(parentOne, "yellow")

// Create new array of children of ParentOne:
const childrenOfParentOne = Array.from(parentOne.children)
console.log(childrenOfParentOne)

changeColor(childrenOfParentOne[0], "maroon");

// Introduce querySelectorAll()
const grandchildren = grandparent.querySelectorAll(".child")
console.log(grandchildren)

// Change all children colors
grandchildren.forEach(element => changeColor(element, "white"))

// Change one child color
const childOne = childrenOfParentOne[0];
console.log(childOne)
changeColor(childOne, "red")

// Select a parent from a child
const parent1 = childOne.parentElement;
console.log(parent1)
changeColor(parent1, "orange")

// Select a parent of a parent
const grandpa = parent1.parentElement;
console.log(grandpa)
changeColor(grandpa, "lightblue")

// Skip parent, go from child to grandparent
const grandma = childOne.closest(".grandparent") // the first element that it finds at the top of the hierarchy and matches of the class (which is class grandparent)
console.log(grandma)
changeColor(grandma, "pink")

// Next element sibling
const childTwo = childOne.nextElementSibling;
console.log(childTwo)
changeColor(childTwo, "seagreen")