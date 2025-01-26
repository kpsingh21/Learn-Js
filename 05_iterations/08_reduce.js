//Reduce in js
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(sumWithInitial);
// Expected output: 10


const myNums = [1, 2, 3]
const initialVal = 0;
const res = myNums.reduce((acc, currentValue) => acc + currentValue, initialVal)
console.log(res); //6

// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval ${currval}`)
//     return acc + currval
// },1)
// console.log(myTotal) //7

//write above fun in form of arrow fun

const myTotal = myNums.reduce((acc, currval) => acc + currval, 2)
console.log(myTotal) //8


const shoppingCart = [
  {
    itemName: "js course",
    price: 2999
  },
  {
    itemName: "py course",
    price: 999
  },
  {
    itemName: "DSA course",
    price: 9999
  },
  {
    itemName: "Drupal course",
    price: 999
  }
]

const total = shoppingCart.reduce((acc,item)=> acc + item.price ,0)
console.log(total)
