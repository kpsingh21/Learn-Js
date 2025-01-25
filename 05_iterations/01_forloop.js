// for loop
//one thing after condition check it will  insert inside loop after execute whatever inside loop then it will increase index ;

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5) {
        //console.log("5 is best number");
    }
    // console.log(element);
}


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and outer loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j );
        // console.log(`${i} * ${j} = ${i * j}`);
        // console.log(i*j);
    }
}

let myArray = ["flash", "batman", "superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
}


//break and continue

for (let index = 0; index <= 20; index++) {
    console.log(`value is ${index}`);
    if (index === 5) {
        console.log(`Detected 5`);
        break
    }
}

//no effect of continue as there is no code below continue condition
for (let index = 0; index <= 20; index++) {
    console.log(`value is ${index}`);
    if (index === 5) {
        console.log(`Detected 5`);
        continue
    }
}

//continue will skip everything  for that particular index  
for (let index = 0; index <= 20; index++) {
    if (index === 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`value is ${index}`);
}