// Filters : also take callback fun and call fun for each element return array

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//two syntax of filter using arrow 
//if you are using {} then need to define return -explicit return
const res1 = myNums.filter((num) => {
  return num > 6
})
// console.log(res1)

const res = myNums.filter((num) => num > 4)
// console.log(res)

//what if we want to achieve filter result from forEach use this:
const newNums = []
myNums.forEach((num) => {
  if (num > 8) {
    newNums.push(num)
  }
})

console.log(newNums)

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

// console.log(userBooks);

userBooks = books.filter( (bk) => { 
  return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);