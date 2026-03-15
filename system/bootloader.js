// RopTop-Os Boot Loader
console.log("Checking for Extreme Demon status...");
console.log("Loading Neon Shaders...");

function launchApp(appName) {
    console.log("Launching: " + appName);
    alert("Opening " + appName + "... Get ready to Dash!");
}

// System Init
console.log("RopTop-Os v0.0.1 is ONLINE.");
// RopTop-Os Physics Engine
let isJumping = false;

function cubeJump() {
    if (isJumping) return; // Don't jump if already in the air
    isJumping = true;
    
    const cube = document.getElementById('icon-display');
    
    // 1. Move Up (The Jump)
    cube.style.transform = "translateY(-50px) rotate(90deg)";
    
    // 2. Fall Down (The Gravity)
    setTimeout(() => {
        cube.style.transform = "translateY(0px) rotate(180deg)";
        isJumping = false;
    }, 400); // 0.4 seconds to complete the jump
}

// Listen for Spacebar
window.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        cubeJump();
    }
});
function openApp(name, content) {
    document.getElementById('app-window').style.display = 'block';
    document.getElementById('app-title').innerText = name;
    document.getElementById('app-content').innerHTML = content;
}

function closeApp() {
    document.getElementById('app-window').style.display = 'function installApp(appName) {
    showNotification("Downloading " + appName + "...", "#ff00ff");
    
    setTimeout(() => {
        showNotification(appName + " Installed Successfully!", "#00ff00");
        // Here we could add logic to make a new button appear!
    }, 2000);
}
