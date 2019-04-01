// 1. We'll pass a password in the command line

var password = process.argv[2] 

console.log("Is this the password? ", password)

// 2. We'll check many of these rules

// - at least 8 characters

if (password.length >= 8) {
	console.log("Length is sufficient.")
} else {
	console.log("Not long enough.")
}

// - at least one of them should be a special character (!@#$)

for (i = 0; i < password.length; i++) {
	if ("!@#$%^&*()_+".includes(password[i])) {
		console.log("Password has special characters! Awesome")
	}
}

// - at least one number
// - at least one upper case
// - should be unique
// - should be memorable 

// 3. We'll print a report to see how good the password was
