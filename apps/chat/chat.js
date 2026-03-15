// RopTop-Os Global Chat System
let messages = [
    {user: "RobTop", text: "RubRub is here!"},
    {user: "Player123", text: "I just beat my first demon!"}
];

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const user = localStorage.getItem("dashUser") || "Guest";
    
    if (chatInput.value.trim() !== "") {
        // Add your message to the list
        messages.push({user: user, text: chatInput.value});
        chatInput.value = ""; // Clear the box
        renderChat();
    }
}

function renderChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = messages.map(msg => 
        `<div style="margin-bottom: 10px; text-align: left;">
            <strong style="color: #00ffff;">${msg.user}:</strong> 
            <span style="color: white;">${msg.text}</span>
        </div>`
    ).join('');
}
