// Object to store user dashboard info
let userDashboards = {};

// Load dashboards from JSON
fetch("dashboards.json")
    .then(response => response.json())
    .then(data => userDashboards = data)
    .catch(err => console.error("Failed to load dashboards.json", err));

// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    
    const email = document.getElementById("email").value.toLowerCase();
    const password = document.getElementById("password").value; // optional

    if(userDashboards[email]){
        const user = userDashboards[email];

        // Check password if defined
        if(user.password && password !== user.password){
            document.getElementById("error-msg").innerText = "Incorrect password.";
            return;
        }

        // Redirect to user dashboard
        window.location.href = user.dashboard;
    } else {
        document.getElementById("error-msg").innerText = "Invalid email or no dashboard assigned.";
    }
});
