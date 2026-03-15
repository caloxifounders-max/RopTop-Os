// RopTop-Os Icon Kit Logic
const icons = ["Cube", "Ship", "Ball", "UFO", "Wave"];
let currentSkin = "Classic Cube";

function changeSkin(newSkin) {
    currentSkin = newSkin;
    console.log("Skin changed to: " + currentSkin);
    alert("New Skin Equipped: " + currentSkin);
}

console.log("Icon Kit Module Loaded successfully.");
