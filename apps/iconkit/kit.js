// RopTop-Os Icon Kit Logic
const icons = ["Cube", "Ship", "Ball", "UFO", "Wave"];
let currentSkin = "Classic Cube";

function changeSkin(newSkin, newColor) {
    // 1. Update the Text
    document.getElementById('skin-name').innerText = newSkin;
    
    // 2. Update the Cube Color
    const cube = document.getElementById('icon-display');
    cube.style.backgroundColor = newColor;
    cube.style.boxShadow = "0 0 20px " + newColor;
    
    // 3. Make it "Jump" like RobTop!
    cube.style.transform = "scale(1.2)";
    setTimeout(() => { cube.style.transform = "scale(1)"; }, 100);

    console.log("Skin Equipped: " + newSkin);
}
