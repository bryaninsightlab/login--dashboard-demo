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

    // If email doesn't exist
    if(!user){
        document.getElementById("error-msg").innerText = "Invalid email or no dashboard assigned.";
        return;
    }

    // If user is object → password is required
    if(typeof user === "object"){
        if(!password){
            document.getElementById("error-msg").innerText = "Password required.";
            return;
        }
        if(password !== user.password){
            document.getElementById("error-msg").innerText = "Incorrect password.";
            return;
        }
        window.location.href = user.dashboard;
    }

    // If user is a string → email-only login
    else if(typeof user === "string"){
        window.location.href = user;
    }
});
