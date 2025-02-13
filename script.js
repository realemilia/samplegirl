let openedLetters = new Set();

function openLetter(type) {
    const music = document.getElementById('bgMusic');
    music.volume = 0.5; // Adjust volume if needed
    music.play();

    const letterContent = {
        miss:   "Missing cheyuna kuttu!? Potte.. I wish I could teleport to you right now!"
                "But since I haven’t figured out how to bend space and time yet (working on it 😂),"
                "here’s what you can do: Close your eyes and imagine my arms around you, squeezing you tight."
                "Can you feel it? That’s because my love is always with you, no matter the distance. ❤️"
                "And hey, don’t be too sad! Missing me means one thing—next time we meet, you owe me double the hugs, double the kisses, and double the cuddles! 😏 
                "So, keep this letter safe, because you’ll need it when we reunite! Love you ❤ , my koche ! 💋 "

                    
        sad: "Ayoo ! Ente koch sad ahnoo..? 😟" 
             "First of all, take a deep breath… Inhale… Exhale… Feeling a little better?"
             "No? Okay, then imagine me doing my weirdest, goofiest dance moves just to make you smile. (Yes, I’d embarrass myself for you! 😆)"
            "Listen, Kuttu, no matter how tough today feels, I promise it’s just a small chapter in our long, beautiful story."
            "You’re stronger than you think, and you’re NEVER alone. I’m always here, even if it’s just through a letter like this."
            "Now, go grab a snack, watch Reels or shorts, and remember—your smile is my favorite thing in the world. 💖, So keep smiling always"
            "P.S: If this letter made you cry instead of smile… uhmm sorryy..my bad? 🥺"
            "But hey, crying is just your heart’s way of clearing out sadness to make space for happiness!"
            "So, let those tears out if needed, then text me i am there for you forever ! Here huggies 🫂🫂🫂 "

    
        happy: "STOP EVERYTHING! 🎉 ALERT! 🚨 Someone’s in a good mood, and I need to know WHY! 👀 Did you win a lottery?
               "Find money in your pocket? Or did you just think about me? (Obviously, that’s the reason, right? 😂)"
               "Whatever it is, I love seeing you happy! Your happiness is like sunlight—it makes everything brighter, including my life. 🌞"
               "So, no matter what happens, hold onto this feeling, because you deserve all the joy in the universe!"
               "And if anyone tries to ruin your mood? Just remember… you have me, your personal entertainer ! 😘"
              "P.S. Since you’re already in a good mood, take a silly selfie or sing a song for me and send it to me. Let’s make this happiness last longer! 😜"

    
        hung: "Vaitinnu arrengilum villikundo?? 😳 Kuttuu, please don’t eat this letter! I know you’re hungry, but paper is not on the menu! 😂🤣"
              "I wish I could cook for you right now (or at least order your favorite food because let’s be honest, we both know I’d probably burn the kitchen down! 😂. Eyy aganne illa parayan pattila chellapo..thee kathi en varum 🤣😁)."
              "But since I can’t, here’s an invisible burger 🍔 (100% love, 0 calories)."
             "Now, go get some real food before your hanger (hungry + anger) mode activates! 😡➡️🍕➡️😊"
             "Po Po Kazhi Kazhik vangi valathum or else messege me if you dont have any money (you know i am rich for my wifey 😎😂)"
            "P.S. After eating, send me a picture of your food so I can pretend we’re having a virtual dinner date! 😚😘"


        final: "so you saw all my letters?!"
              "But seriously, kuttu , every word in these letters comes straight from my heart."
              "No matter how near or far, I’m always with you—in every smile, every laugh, and even in every silly argument we have."
            "You're my wifey, my happiness, and my home. 💖"
            "Now, before you start tearing up (or laughing at how dramatic I sound),"
            "here’s what I need you to do: Send me a text RIGHT NOW saying, ‘I read all your letters, now where’s my prize?’"
            "And guess what? Your prize is…ME! 😘 Can’t wait to hold you tight soon!"
           "I LOVE YOU A LOT my cutiepie and everything" "Missing you from my bottom of my heart"
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
