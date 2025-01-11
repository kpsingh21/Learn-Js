const accountId = 144553
// accountId = 2 // not allowed

let accountEmail = "hitesh@google.com"
accountEmail = "hc@hc.com" //allowed to change
// console.log(accountEmail);


var accountPassword = "12345"
accountPassword = "21212121" // allowed to change

accountCity = "Jaipur"
accountCity = "Bengaluru"


let accountState;//only declare not assigned
/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])