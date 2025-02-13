function openLetter(type) {
    const letterContent = {
        miss: "Hey love, I know you're missing me right now. Remember the time we [insert cherished memory]? I'm always with you in spirit. ❤️",
        sad: "My dearest, it's okay to feel sad sometimes. Just know that I'm here for you, always. Here's a little joke to cheer you up: [insert joke]. 😊",
        happy: "Seeing you happy makes my day! Keep shining and spreading your joy. You deserve all the happiness in the world. 🌟",
    };

    let text = letterContent[type];
    let index = 0;
    let speed = 50; // Speed of typing effect

    document.getElementById('letterContent').innerHTML = "";
    document.getElementById('letterModal').style.display = 'block';

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

window.onclick = function(event) {
    const modal = document.getElementById('letterModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
