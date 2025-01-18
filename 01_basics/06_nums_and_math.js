const score = 100 
// console.log(score); //100
//better way to define no
const balance = new Number(100)
//console.log(balance); //[Number: 100]
// console.log(balance.toFixed(2));//100.00

const no1 = 123.89
// console.log(no1.toPrecision(4));//4
const no2 = 123.89
// console.log(no2.toPrecision(3)); //124
const no3 = 123.44
// console.log(no3.toPrecision(3)); //123

//this is one useful method this type is hard to read 1000000 so not readable so it will make it in this form 1,000,000  //based on us
const thousands = 100000000
// console.log(thousands.toLocaleString());// 100,000,000 //based on US standard
// console.log(thousands.toLocaleString('en-IN'));// 10,00,00,000 //based on Indian standard 

//+++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Math is by default lib present in js and it is object

// console.log(Math.PI);//3.1415
// console.log(Math.abs(-4))// 4 gives +ve values
// console.log(Math.round(4.2))//4
// console.log(Math.ceil(4.2))//5
// console.log(Math.floor(4.6))//4
// console.log(Math.max(4,6,8,9)) //9


// console.log(Math.random());
// console.log(Math.random()*10 + 1 );//to avoid this case of 0.05456 like something //not recommonded due to BODMAS
// console.log((Math.random()*10) + 1); //better way
// console.log(Math.floor((Math.random()*10) + 1));


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max -min + 1)) + min )
