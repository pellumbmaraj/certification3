// script.js

// Update the display when a drum pad is triggered
function updateDisplay(message) {
    const display = document.getElementById('display');
    display.textContent = message;
}

// Play the sound associated with a drum pad
function playSound(key) {
    const audio = document.getElementById(key); // Get the audio element by ID
    if (audio) {
        audio.currentTime = 0; // Reset audio to the start
        audio.play(); // Play the sound
        const drumPad = document.querySelector(`.drum-pad[data-key="${key}"]`);
        if (drumPad) updateDisplay(drumPad.id);
    }
}

// Add event listeners for clicks
const drumPads = document.querySelectorAll('.drum-pad');
drumPads.forEach(pad => {
    pad.addEventListener('click', () => {
        const key = pad.getAttribute('data-key');
        playSound(key);
    });
});

// Add event listeners for key presses
document.addEventListener('keydown', (event) => {
    playSound(event.key.toUpperCase());
});