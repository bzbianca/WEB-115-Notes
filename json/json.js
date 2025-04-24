// JSON = (JavaScript Object Notation) data-interchange format
// Used for exchanged data between a server and a web application
// JSON files {key:value} OR [value1, value2, value3]

// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object.

// Let's use JSON.stringify() on an array.

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"]
console.log(names)

const jsonStringNames = JSON.stringify(names)
console.log(jsonStringNames)

// JSON.stringify on an object
const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
}

console.log(person)

const jsonStringPerson = JSON.stringify(person);
console.log(jsonStringPerson)

// JSON.stringify an arry of Objects

const bikiniBottom = [
    {
        "name": "Spongebob",
        "age": 30,
        "isEmployed": true
    },
    {
        "name": "Patrick",
        "age": 34,
        "isEmployed": false
    },
    {
        "name": "Squidward",
        "age": 50,
        "isEmployed": true
    },
    {
        "name": "Sandy",
        "age": 27,
        "isEmployed": false
    }
]
console.log(bikiniBottom)

const jsonStringifyBikiniBottom = JSON.stringify(bikiniBottom)
console.log(jsonStringifyBikiniBottom)


// JSON.parse()

const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`
const jsonPerson = `{
                    "name": "Spongebob",
                    "age": 30,
                    "isEmployed": true,
                    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
                    }`
const jsonBikiniBottom = `[{ "name": "Spongebob", "age": 30, "isEmployed": true},
                          {"name": "Patrick","age": 34,"isEmployed": false},
                          {"name": "Squidward","age": 50,"isEmployed": true},
                          { "name": "Sandy", "age": 27,"isEmployed": false}]`
console.log(jsonNames)
const parsedData = JSON.parse(jsonBikiniBottom)
console.log(parsedData)

// fetch()
fetch("./person.json") // Fetches the "person.json" file from the local files.
    .then(response => response.json()) // Converts the response to a JSON object.
    .then(value => console.log(value)) // Logs the parsed JSON objefct to the console.

// Iterate through an Array of Objects with fetch using forEach.
fetch("./bikini-bottom.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)))
    .catch(error => console.error(error))