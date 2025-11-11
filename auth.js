function authenticateUser(username, password) {
    const validUser = {
        username: "admin",
        password: "12345"
    };

    if (username === validUser.username && password === validUser.password) {
        return "Login successful";
    } else {
        return "Invalid username or password";
    }
}

// Simple test
console.log(authenticateUser("admin", "12345"));
console.log(authenticateUser("user", "wrong"));

