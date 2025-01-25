//forEach :
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function nameoffun (arg) {} ) //but here fun is callback
//callback fun dont have their name 
//the callback fun  require in forEach can take three argument : current value , index , array
// (arguments)  in which the first one is the name you have given to each value of your array any name, or we can say it as a current value  
// ex: (val) (item)

// coding.forEach( function (val)
//     console.log(val);
// } )

//using Arrow fun :
// coding.forEach( greet = () => {} ) but name of fun is not required so we can remove name

// coding.forEach( (item) => {
//     console.log(item);
// } )


//forEach required call back fun,so we can pass predefined fun as a argument also

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

//forEach fun can take three argument : current value  (item), index , array
coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} )


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )