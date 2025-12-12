const userDashboards = {
    "publisher1@example.com": "https://lookerstudio.google.com/reporting/abc123/page/xyz?params=%7B%22ds0.publisher_name%22:%22Publisher1%22%7D",
    "publisher2@example.com": "https://lookerstudio.google.com/reporting/abc123/page/xyz?params=%7B%22ds0.publisher_name%22:%22Publisher2%22%7D"
};

document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    
    const email = document.getElementById("email").value.toLowerCase();
    const password = document.getElementById("password").value; // optional: validate later
    
    if(userDashboards[email]){
        window.location.href = userDashboards[email];
    } else {
        document.getElementById("error-msg").innerText = "Invalid email or no dashboard assigned.";
    }
});
