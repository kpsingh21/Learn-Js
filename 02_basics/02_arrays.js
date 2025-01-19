const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
// The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.
//marvel_heros.push(dc_heros) //this will add the whole  array at index 3
//console.log(marvel_heros[3]); //["superman", "flash", "batman"]
//console.log(marvel_heros); //  ["thor", "Ironman", "spiderman" ,["superman", "flash", "batman"] ]
// console.log(marvel_heros[3][1]);  //flash

//concat
const newarray = marvel_heros.concat(dc_heros)
// console.log(newarray) // ["thor", "Ironman", "spiderman" ,"superman", "flash", "batman" ]

//spread opeator
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros) // ["thor", "Ironman", "spiderman" ,"superman", "flash", "batman" ]

//flat
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) // here the infinity is the depth parameter means at what depeth we have to flat it basically no
// console.log(real_another_array); [ 1,2,3,4,5,6,7,6 ]

//isArray
//to check the passed argument is array or not
console.log(Array.isArray("Hp"))//false

//from
//to convert given argumnet into array
console.log(Array.from("Hari")) // [ 'H' ,'a','r','i']
console.log(Array.from({name: "hitesh"})) // gives empty array is not able to convert we need to mention to make arry of keys or value []

//of method
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // [100,200,300]