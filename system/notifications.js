// RopTop-Os Notification Engine
function showNotification(message, color = "#00ffff") {
    const notify = document.createElement('div');
    notify.style = `
        position: fixed; top: -100px; left: 50%; transform: translateX(-50%);
        background: #111; border: 2px solid ${color}; color: ${color};
        padding: 15px 30px; border-radius: 5px; box-shadow: 0 0 15px ${color};
        z-index: 1000; transition: top 0.5s ease-out; font-weight: bold;
    `;
    notify.innerText = message;
    document.body.appendChild(notify);

    // Slide down
    setTimeout(() => { notify.style.top = "20px"; }, 100);
    // Slide up and remove
    setTimeout(() => { 
        notify.style.top = "-100px";
        setTimeout(() => { notify.remove(); }, 500);
    }, 3000);
}
