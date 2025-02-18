class User {

    //when we create object with new keyword this constructor will be called
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
    }

    //fun inside class is method 
    encrytPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com" , "123")
console.log(chai.encrytPassword());
console.log(chai.changeUsername());

//How we implement the above without classes

// behind the scene

function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User2("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());


//Inheritance 

class Teacher extends User{
    constructor(username, email, password){
        super(username) // super keyword refer to the class that we have extended
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacher1 = new Teacher("kp", "kp@teacher.com", "123")

teacher1.addCourse()
const masalaChai = new User("masalaChai")


console.log(chai instanceof User);