class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }


    // Static method: Only accessible via the class, not instances
    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId()) // not able to access createdId()  //  Error: createId is not a function


console.log(User.createId()); // "123"

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.logMe());  //Username : iphone
// console.log(iphone.createId()); //due to static, createId fun is not available