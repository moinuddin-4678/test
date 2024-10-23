const character = document.getElementById('character');
const box = document.getElementById('box');
const moveAmount = 10; // Number of pixels to move
let boxOpen = false; // Track if the box is open

document.addEventListener('keydown', (event) => {
    const charRect = character.getBoundingClientRect();
    
    switch(event.key) {
        case 'w': // Move up
            if (charRect.top > 0) {
                character.style.top = `${charRect.top - moveAmount}px`;
            }
            break;
        case 's': // Move down
            if (charRect.bottom < window.innerHeight) {
                character.style.top = `${charRect.bottom + moveAmount}px`;
            }
            break;
        case 'a': // Move left
            if (charRect.left > 0) {
                character.style.left = `${charRect.left - moveAmount}px`;
            }
            break;
        case 'd': // Move right
            if (charRect.right < window.innerWidth) {
                character.style.left = `${charRect.right + moveAmount}px`;
            }
            break;
        case ' ': // Wack action
            wackCharacter();
            break;
        case 'e': // Open/close the box
            toggleBox();
            break;
    }
});

function wackCharacter() {
    character.style.transform += 'scale(1.2)'; // Scale up for wack
    setTimeout(() => {
        character.style.transform = 'translate(-50%, -50%)'; // Reset to original
    }, 100); // Duration of the wack animation
}

function toggleBox() {
    boxOpen = !boxOpen; // Toggle box state
    box.style.transform = boxOpen ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)'; // Show/hide the box
}