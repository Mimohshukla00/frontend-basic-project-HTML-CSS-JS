const clock = document.getElementById("clock");

setInterval(() => {
    const date = new Date();
    clock.innerHTML = date.toLocaleString(); // Display date and time
}, 1000);

// Initialize clock immediately
clock.innerHTML = new Date().toLocaleString(); // Show initial time
