const choices = document.querySelectorAll('.choice-btn');
const container = document.getElementById('ripple-container');
const outcome = document.getElementById('outcome');
const DecisionImage = document.getElementById('decision-image');

const outcomesData = {
    study: {
        color: 'rgba(135, 206, 250, 0.6)',
        message: "Studying today increases focus and motivation.",
        background: 'linear-gradient(135deg, #a8dadc, #457b9d)',
        image: 'Decision Image/study.png.jpeg'
    },
    tv: {
        color: 'rgba(255, 182, 193, 0.6)',
        message: "Watching TV is fun but might delay productivity.",
        background: 'linear-gradient(135deg, #ffd6e0, #ffb3c1)',
        image: 'Decision Image/tv.png.jpeg'
    },
    exercise: {
        color: 'rgba(144, 238, 144, 0.6)',
        message: "Exercising boosts energy, health, and mood throughout the day.",
        background: 'linear-gradient(135deg, #d0f4de, #a7f0ba)',
        image: 'Decision Image/exercise.png.jpeg'
    },
    sleep: {
        color: 'rgba(216, 191, 216, 0.6)',
        message: "Taking a nap refreshes your mind and restores focus.",
        background: 'linear-gradient(135deg, #e0bbe4, #d8bfd8)',
        image: 'Decision Image/sleep.png.jpeg'
    },
    friends: {
        color: 'rgba(255, 239, 150, 0.6)',
        message: "Going out with friends lifts your mood and creates great memories.",
        background: 'linear-gradient(135deg, #fff3b0, #ffd166)',
        image: 'Decision Image/friends.png.jpeg'
    }
};

choices.forEach(btn => {
    btn.addEventListener('click', () => {
        const choice = btn.dataset.choice;
        createMultipleRipples(outcomesData[choice].color, 5);
        showOutcome(outcomesData[choice].message);
        changeBackground(outcomesData[choice].background);
        updateImage(outcomesData[choice].image);
        saveChoice(choice); // Placeholder for future database
    });
});

function createMultipleRipples(color, count) {
    for (let i = 0; i < count; i++) createRipple(color);
}

function createRipple(color) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.backgroundColor = color;
    ripple.style.width = ripple.style.height = '20px';
    ripple.style.left = `${Math.random() * (container.clientWidth - 20)}px`;
    ripple.style.top = `${Math.random() * (container.clientHeight - 20)}px`;
    container.appendChild(ripple);

    let size = 20;
    const interval = setInterval(() => {
        size += 6;
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.opacity -= 0.02;
        if (size > 250) {
            ripple.remove();
            clearInterval(interval);
        }
    }, 25);
}

function showOutcome(message) {
    outcome.textContent = message;
}

function changeBackground(gradient) {
    document.body.style.background = gradient;
}

function updateImage(src) {
    DecisionImage.src = src;
}

function saveChoice(choice) {
    console.log(`Choice "${choice}" would be saved to a database later.`);
}