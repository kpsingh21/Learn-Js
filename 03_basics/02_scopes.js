let a = 10
const b = 20
var c = 30
// console.log(a, b, c)

// global scope value is available in block scope
{ } //block scope value is not available in 

if (true) {
    let a = 100
    const b = 200
    var c = 300
}
// console.log(a) let have block scope i.e right also we can not access variable define by let outside scope //Reference Error : a is not defined
// console.log(b)  const have block scope i.e right also we can not access variable define by const outside scope //Reference Error : b is not defined
// console.log(c)  varaiable define by var dont have block scope and can be access outside the block also i.e  not correct 
// varaible define by same value is changed by var due to its non block scope


function checkscope() {
    console.log(a)
    // let a = 100  // redeclare again
    a = 100   // assigned value to the previous a 
    console.log("na", a)

    // console.log(b)
    const b = 200
    console.log("nb", b)

    console.log(c)
    var c = 300
    console.log("nc", c)

}
// checkscope();
// console.log("preva",a) //100



let aa = 300
if (true) {
    let aa = 10
    const b = 20
    // console.log("INNER: ", aa); //10

}//aa outside the scope dont have any relation with aa inside if it is redeclare again
// console.log(aa); //300


//nested scope

function one() {
    const username = "kp"
    function two() {
        const website = "yt"
        console.log(username)//kp
    }
    // console.log(website)//we can not access here as it is out of scope  //Reference Error website is not defined
    two();
}
// one();


if (true){
    const username = "krishna"
    if(username==="krishna"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website) Ref error
}
// console.log(username) ref error : username is not defined

// ++++++++++++++++++ interesting ++++++++++++++++++



// console.log(addone(5)); we can access this here also due to hoisting
function addone(num){
    return num + 1
}
// console.log(addone(5));


// console.log(addTwo(4));  // we can access  addTwo before initialization
//we call it expression basically fun
const addTwo = function(num){
    return num +2 
}
console.log(addTwo(4));