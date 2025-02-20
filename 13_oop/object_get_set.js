// Old Syntax: Object with Getter & Setter  
const User = {
    _email: 'h@hc.com', // The underscore `_` is used to indicate this property is intended to be private  
    _password: "abc",  

    // Getter: Allows us to access `_email` as a property instead of a method  
    get email() {
        return this._email.toUpperCase(); // Converts email to uppercase when accessed  
    },

    // Setter: Allows us to update `_email` using simple assignment  
    set email(value) {
        this._email = value; // Updates the internal `_email` property  
    }
}

// Factory Function Example  
const tea = Object.create(User); // Creates a new object that inherits from `User`  
console.log(tea.email); // ✅ `email` is accessed like a property (not a function call), thanks to `get`  
// console.log(tea.email()); ❌ This would cause an error because `get email()` behaves like a property, not a method  

// Setting a new email using the setter method  
tea.email = "new@hc.com"; // ✅ Updates `_email` using the setter  
console.log(tea.email); // Output: "NEW@HC.COM"  

// Key Takeaways:
// Getters (get email()) allow us to access a method like a property (tea.email instead of tea.email()).
// Setters (set email(value)) allow us to assign a new value using = notation (tea.email = "new@hc.com").
// Without get and set, we would need to use explicit methods (getEmail(), setEmail()).
