let userDashboards = {};

fetch("dashboards.json")
    .then(response => response.json())
    .then(data => userDashboards = data)
    .catch(err => console.error("Failed to load dashboards.json", err));

document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    
    const email = document.getElementById("email").value.toLowerCase();
    const password = document.getElementById("password").value; // optional
    
    // Check if the user exists
    if(userDashboards[email]){
        const user = userDashboards[email];

        // If you later add passwords, you can do:
        // if(user.password && user.password !== password){
        //     document.getElementById("error-msg").innerText = "Incorrect password.";
        //     return;
        // }

        // Redirect to user's dashboard
        window.location.href = user.dashboard ? user.dashboard : user;
    } else {
        document.getElementById("error-msg").innerText = "Invalid email or no dashboard assigned.";
    }
});
