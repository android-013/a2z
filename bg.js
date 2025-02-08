document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    let angle = 0;

    function rotateGradient() {
        angle = angle + 1;  // Increase the angle to create rotation effect
        body.style.background = `linear-gradient(${angle}deg, #485460, #1e272e)`; // Apply the rotating gradient
    }

    setInterval(rotateGradient, 20); // Update the gradient every 20ms for a smooth transition
});
