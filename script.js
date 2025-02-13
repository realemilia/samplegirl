let openedLetters = new Set();

function openLetter(type) {
    const music = document.getElementById('bgMusic');
    music.volume = 0.5; // Adjust volume if needed
    music.play();

    const letterContent = {
        miss: "Hey love, I know you're missing me right now. Remember the time we [insert cherished memory]? I'm always with you in spirit. ❤️",
        sad: "My dearest, it's okay to feel sad sometimes. Just know that I'm here for you, always. Here's a little joke to cheer you up: [insert joke]. 😊",
        happy: "Seeing you happy makes my day! Keep shining and spreading your joy. You deserve all the happiness in the world. 🌟",
        final: "You've opened all the letters! This means a lot to me. Just remember, I'll always be here for you, no matter what. ❤️"
    };

    openedLetters.add(type);

    // Unlock final letter if all are opened
    if (openedLetters.size === 3) {
        document.getElementById('final-letter').style.display = 'block';
    }

    let text = letterContent[type];
    let index = 0;
    let speed = 50; // Speed of typing effect

    document.getElementById('letterContent').innerHTML = ""; // Clear previous content
    document.getElementById('letterModal').style.display = 'block';

    if (type === 'final') {
        confetti(); // Trigger fireworks effect
    }

    function typeWriter() {
        if (index < text.length) {
            document.getElementById('letterContent').innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
}

function closeModal() {
    document.getElementById('letterModal').style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('letterModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
