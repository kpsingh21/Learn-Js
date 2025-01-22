//basically fun is creating group of few lines of code to reuse
function sayMyName(){
    console.log("K");
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
}

// sayMyName   //ref of fun
// sayMyName()  //execution of fun


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// console.log("Result: ", result);  //we can store console we need to return something to store 


function addTwNo (num1 ,num2){  // here num1, num2 will be call as parameter while defining the fun
    let result = num1 + num2
    return result

    //one more syntax or way 
    // return num1 + num2 
}

const res =  addTwNo(2,3) //here 2,3 will be called arguments
// console.log(res); 

function loginUserMessage(username){
    return `${username} just logged in`
}
// loginUserMessage("kp") //the fun is executed here it will not print or show value till it is used console or store in any var
console.log(loginUserMessage("kp"));//kp just logged in
console.log(loginUserMessage(""));// just logged in
// here if we not pass any value what we will get
console.log(loginUserMessage()); //undefined just logged in

function loginUserMessage2(username){
    if (username===undefined){
        console.log("please enter username")
        //after this if you want to exit from fun so use return ,after return you will exit from fun or no further code will execute
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage2()); // after console msg you see undefined
//undefined ""(empty string) will give false


function loginUserMessage3(username){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

//defaut value 
function loginUserMessage4(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}


//2.fun with objects and array in JS

// function returnCartPrice(num1, num2){
//     return num2,num1 
// }
// console.log(returnCartPrice(100,200)) //it will return num1 only i.e last arg

//Rest Operator ...
function returnCartPrice2(...num){
    return num 
}
console.log(returnCartPrice2(100,200,300)) //[100,200,300]

function returnCartPrice3(val1, val2, ...num1){
    return num1
}
console.log(returnCartPrice3(200, 400, 500, 2000, 6000)) //it will geive output [ 500, 2000, 6000 ] becaue first two is assigned to val1, val2

const user = {
    username: "krishna",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);
handleObject({
    username: "shyam",
    price: 299
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));