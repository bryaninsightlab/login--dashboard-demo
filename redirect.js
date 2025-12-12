let userDashboards = {};

fetch("dashboards.json")
    .then(response => response.json())
    .then(data => userDashboards = data)
    .catch(err => console.error("Failed to load dashboards.json", err));

document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    
    const email = document.getElementById("email").value.toLowerCase();
    const password = document.getElementById("password").value; // optional
    
    if(userDashboards[email]){
        window.location.href = userDashboards[email];
    } else {
        document.getElementById("error-msg").innerText = "Invalid email or no dashboard assigned.";
    }
});
