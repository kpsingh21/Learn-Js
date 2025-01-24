// Immediately Invoked Function Expressions (IIFE)
// IIFE used in calling db connection files,and to restrict global scopes pollution

// function chai(){
//     console.log(`DB Connected`); 
// }
// chai(); //this is ok

//IIFE Syntax
(function chai(){
    //this is named IIFE
    console.log(`DB Connected`); 
})();  //if we not add ; the next fun will through error

//  ";" is require to close the the context of iife
(function aurcode(){
    console.log(`DB Connected 2`); 
})(); 

// (( ) => {
//     console.log(`DB Connected through arrow fun`); 
// })() //let we have not added ; here so the below fun will through TypeError :  ( intermediate value) (...) is not a function


( (name ) => {
    console.log(`DB Connected by ${name}`); 
})('krish')