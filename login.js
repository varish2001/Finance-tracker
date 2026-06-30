// ============================================
// LOGIN PAGE - BEGINNER FRIENDLY
// ============================================

// Step 1: Select HTML elements
const form = document.querySelector('form');
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

// Step 2: Handle form submission
form.addEventListener('submit', function(event) {
    // Stop page from reloading
    event.preventDefault();

    // Get values from input fields
    let enteredUsername = usernameInput.value.trim();
    let enteredPassword = passwordInput.value.trim();

    // Validation: Check if fields are empty
    if (enteredUsername === "" || enteredPassword === "") {
        alert("Please fill all fields!");
        return;
    }

    // Get all registered users from storage
    let allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

    // Check if this user exists and password matches
    let userFound = false;
    for (let i = 0; i < allUsers.length; i++) {
        let user = allUsers[i];
        if (user.username === enteredUsername && user.password === enteredPassword) {
            userFound = true;
            break;
        }
    }

    // If user not found, show error
    if (!userFound) {
        alert("Invalid username or password!");
        return;
    }

    // User is valid, save login status and username
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", enteredUsername);

    console.log("Login successful! Redirecting to dashboard...");

    // Redirect to dashboard page
    window.location.href = "dashboard.html";
});
 