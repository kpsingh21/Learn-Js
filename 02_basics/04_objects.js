// two ways to define object only diif of sigleton
// const tinderuser = new Object()   //singleton
const tinderuser = {}   //literal

//we can define empty obj that assign values to it
tinderuser.id = "123abc"
tinderuser.name = "example"
tinderuser.isLoggedIn=false
// console.log(tinderuser);

const regularUser = {
    email : "example@gamil.com",
    fullname: {
        userfullname :{
            firstname: "example",
            lastname: "sharma"
        }
    }
}
// console.log(regularUser);
//only add dot it get next 
// console.log(regularUser.fullname.userfullname.firstname);

// one syntax to  move further if that exist ?
//so basically this syntax will not through error instead give undefined if the key not exist
// console.log(regularUser.fullname?.userfullname?.firstname);

const obj1 = { 1: "a" , 2: "b"}
const obj2 = { 3: "a" , 4 : "b"}
// const obj3 = { obj1 , obj2 } 
// console.log(obj3) // { obj1: {} ,obj2: {} }

//Object.assign()
const obj3 = Object.assign(obj1,obj2) // { 1: "a" , 2: "b" ,3: "a" , 4 : "b" }
//there is one more syntax 
const obj4 = Object.assign({},obj1,obj2) // { 1: "a" , 2: "b" ,3: "a" , 4 : "b" }

//mostly used syntax is spread operator
const obj5 = { ...obj1 , ...obj2}
console.log(obj5); // { 1: "a" , 2: "b" ,3: "a" , 4 : "b" }


//array of object
const users = [
    {
        id: 1,
        email: "h1@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },
    {
        id: 3,
        email: "h3@gmail.com"
    },
]

console.log(users[1].email); // h2@gmail.com

//other useful methods
console.log(Object.keys(tinderuser)); // output you will get in array ['id','name','isLoggedIn']
console.log(Object.values(tinderuser)); // output you will get in array ['123abc','example',false]
console.log(Object.entries(tinderuser));  // [ ['id' ,''123abc],['name' , 'example'],[]]

//to check if the specific key exist in obj
console.log(tinderuser.hasOwnProperty('isLoggedIn')); //true


//Destructuring in objects
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// course.courseInstructor  //like to make core more clean readable we use destructuring

const { courseInstructor, coursename} = course
//so now no need to write like this course.courseInstructor
//we can directly use
console.log(courseInstructor); //hitesh
console.log(coursename) //js in hindi

//we can give name also
const { courseInstructor: Instructor} = course
console.log(Instructor) //hitesh

//this kind of syntax we will see more in react while using props

//JSON 

// {
//     "name": "hitesh",
//     "coursename": "js course",
//     "price" : "free"
// }
