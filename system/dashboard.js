// RopTop-Os Dashboard Module
function changeWallpaper(color) {
    document.body.style.backgroundColor = color;
    console.log("Wallpaper updated to: " + color);
}

function updateProgress(percent) {
    const bar = document.getElementById('progress-fill');
    if (bar) {
        bar.style.width = percent + "%";
        document.getElementById('progress-text').innerText = percent + "% Unlocked";
    }
}
