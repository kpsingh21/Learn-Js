//array

const myArr = [0,1,2 , 3, 4, 5]
const array2 = new Array(1,2,3,4);

//JavaScript array-copy operations create shallow copies.
//A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.

//Array Methods

// myArr.push(6) //enter at last index
// myArr.pop() //delete the last element of array

// myArr.unshift(9) //add the element at 0 index //this method is not recommnded as it change the index of all the array 
//myArr.shift() //delete the first element

// console.log(myArr.includes(9)); //return boolean after check that elemet exist or not in array
// console.log(myArr.indexOf(9)); //return the index of element  //and suppose if that element not extst it will give use the value -1.


// const newArr = myArr.join()
// console.log(myArr); // [0,1,2 ...]
// console.log( newArr); // 0,1,2,....
// console.log(typeof(newArr)) //string
// console.log(newArr.indexOf(1)) //may it calulate , this also as it value

// slice, splice
// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// console.log("A ", myArr);
// const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B ", myArr); //it not change the original array


// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//it include both argument
// console.log("before splice", myArr);
// const myn2 = myArr.splice(1, 3)
// console.log("after splice ", myArr);
// console.log(myn2); //return the replce array or element that is removed


const myn3 =myArr.splice(1,3,["jan", "feb"]);
console.log("C ", myArr);
console.log(myn3);
