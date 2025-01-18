//Date is object in js

let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toString());

let mycreatedDate = new Date(2023,0,23)
// console.log(mycreatedDate.toDateString()); //Mon Jan 23 2023 so basically is javascript months will start from 0


// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // other input related to time
// let myCreatedDate = new Date("2023-01-14") //In this syntax month will start with 1
let myCreatedDate = new Date("01-14-2023") 
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()  

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());  // we can compare both result to and it is in timestamp
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
// console.log(newDate.getMonth() + 1);  //why 1 ? basically the getmonth will provide month starting with 0 so it get in standard form we added 1 
// console.log(newDate.getDay());


// `${newDate.getDay()} and the time `

//by pressing control + space you can see the properties  present

//kind of customization
console.log(newDate.toLocaleString('default', {
    weekday: "long",
    
}))