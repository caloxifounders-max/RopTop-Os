// RopTop-Os Online ID System
let userName = localStorage.getItem("dashUser") || "Guest";

function login() {
    let input = prompt("Enter your RobTop ID Name:", userName);
    if (input) {
        userName = input;
        localStorage.setItem("dashUser", userName); // Saves to the device!
        updateUI();
    }
}

function updateUI() {
    const userDisplay = document.getElementById('user-id');
    if(userDisplay) userDisplay.innerText = "Logged in as: " + userName;
}

// Run update on startup
window.onload = updateUI;
