// script.js

// Welcome message when page loads
window.onload = function() {
    alert("Welcome to My Website Project!");
};

// Show message function
function showMessage() {
    document.getElementById("message").innerHTML =
    "Hello! Thank you for visiting my project website.";
}

// Change background color
function changeBackground() {
    document.body.style.backgroundColor = "#d4f1f9";
}

// Show current date and time
function showDateTime() {
    let date = new Date();
    document.getElementById("datetime").innerHTML = date;
}
