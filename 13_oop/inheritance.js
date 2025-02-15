
// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //one synatx assign Teaching support properties to TAsupport  ✅ Inheriting from TeachingSupport
}

Teacher.__proto__ = User //old approch

// let ta1 = new TASupport();
// let ta1 =  TASupport(); 
// TASupport is an object, not a function or a class.
// The new keyword only works with constructor functions or classes, so calling new TASupport() results in an error

// Checking inheritance
console.log(TASupport.isAvailable) //false

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)
console.log(TeachingSupport.makeVideo);


//we want to calclate truelength

let anotherUsername = "chaiAurCode    "
String.prototype.trueLength = function(){
    console.log(`this : ${this}`);
    console.log(`true lenth is : ${this.trim().length}`);
}

let anotherUsername2 = "chai    "

anotherUsername.trueLength();
anotherUsername2.trueLength();
"shikha   ".trueLength();