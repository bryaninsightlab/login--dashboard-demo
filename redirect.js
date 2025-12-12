let userDashboards = {};

fetch("dashboards.json")
    .then(response => response.json())
    .then(data => userDashboards = data)
    .catch(err => console.error("Failed to load dashboards.json", err));

document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    
    const email = document.getElementById("email").value.toLowerCase();
    const password = document.getElementById("password").value;

    const user = userDashboards[email];

    if(!user){
        document.getElementById("error-msg").innerText = "Invalid email.";
        return;
    }

    if(password !== user.password){
        document.getElementById("error-msg").innerText = "Incorrect password.";
        return;
    }

    // Correct email & password
    window.location.href = user.dashboard;
});
