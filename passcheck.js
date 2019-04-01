// 1. We'll pass a password in the command line

var password = process.argv 

console.log("Is this the password? ", password[2])

// 2. We'll check many of these rules

// - at least 8 characters
// - at least one of them should be a special character (!@#$)
// - at least one number
// - at least one upper case
// - should be unique
// - should be memorable 

// 3. We'll print a report to see how good the password was