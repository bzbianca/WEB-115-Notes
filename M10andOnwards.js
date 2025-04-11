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
