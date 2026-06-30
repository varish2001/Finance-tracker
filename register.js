// ============================================
// REGISTER PAGE - BEGINNER FRIENDLY
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
    let newUsername = usernameInput.value.trim();
    let newPassword = passwordInput.value.trim();

    // Validation: Check if fields are empty
    if (newUsername === "" || newPassword === "") {
        alert("Please fill all fields!");
        return;
    }

    // Get all registered users from storage
    let allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

    // Check if username already exists
    for (let i = 0; i < allUsers.length; i++) {
        let user = allUsers[i];
        if (user.username === newUsername) {
            alert("Username already exists! Please choose another.");
            return;
        }
    }

    // Create new user object
    let newUser = {
        username: newUsername,
        password: newPassword
    };

    // Add new user to all users list
    allUsers.push(newUser);

    // Save updated users list to storage
    localStorage.setItem("allUsers", JSON.stringify(allUsers));

    console.log("Registration successful! Redirecting to login...");
    alert("Registration successful! Please login now.");

    // Redirect to login page
    window.location.href = "index.html";
});
