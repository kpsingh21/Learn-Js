class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    // Using `_email` to prevent conflict with the getter and setter
    // If we used `this.email = email;` here, it would call the setter instead of directly setting the value,
    // potentially causing unexpected behavior or an infinite loop.

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}hitesh`
    }

    set password(value) {
        this._password = value
    }
}

const hitesh = new User("hitesh.ai", "abc")
console.log(hitesh.email);