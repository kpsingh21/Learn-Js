// for in loops
// The for...in loop iterates over all enumerable properties of an object
// Enumerable properties are the keys (property names) of an object that are marked as enumerable. 

// for...in:
// Iterates over the enumerable properties of an object.
// Used for plain objects, not iterables like Map or Set.

// for...of:
// Iterates over the values of an iterable object.
// Works for Map, Set, arrays, strings, etc., as they implement the iterable protocol.

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//     }
// }

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);

    //The reason myObject.key cannot dynamically access the value of the variable key is that dot notation (myObject.key) is always treated as a literal lookup for a property named "key". It does not evaluate key as a variable.
    // console.log(`${key} shortcut let is for ${myObject.key}`); //not possible through error
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
    //here it provide index as key but in for of we get direct value 
}


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


//it is not possible
// for (const key in map) {
//     console.log(key);
// }