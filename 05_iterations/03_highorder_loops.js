// for of :
// for (variable of iterable) {
//     // code block to be executed
//   }

// ["", "", ""]
// [{}, {}, {}]
const arr = [1, 2, 3, 4, 5]

for (let element of arr) {
    // console.log(element);
}

const greetings = "Hello world"
for (const greet of greetings) {
    // console.log(greet); H e l l .....
}
for (const greet of greetings) {
    if (greet == " ") {
        // console.log("space detected")// it doesnt print space
        continue
    }
    // console.log(greet);
}


// Map
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // map will not add this as it have unique entries only
// console.log(map); 

for(const key of map){
    // console.log(key) ['IN', 'India']
}

for (const [key,value] of map){
    // console.log(key, ':-', value); 
}



// object is not able to iterable from for of loop
// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for(const key of myObject){
//     console.log(key);
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
