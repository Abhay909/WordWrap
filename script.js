const sentences = ["aa"];
let startTime;
let timerInterval;
let currentMapping = generateRandomMapping();

// Function to get a random sentence
function getRandomSentence() {
    const index = Math.floor(Math.random() * sentences.length);
    return sentences[index];
}

// Function to check if the challenge is completed
function checkCompletion() {
    const typingArea = document.getElementById("typingArea");
    const challengeSentence = document.getElementById("sentenceText").textContent.trim();

    if (typingArea.value.trim() === challengeSentence) {
        clearInterval(timerInterval); // Stop the timer
        showCompletionMessage();
    } else {
        showError(); // Show error message if the input is incorrect
    }
}

// Display the success message and time taken
function showCompletionMessage() {
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = 'block';  // Show the success message
    document.getElementById("completionTime").textContent = `You completed it in ${getElapsedTime()} seconds!`;
}

// Display the error message when the input is incorrect
function showError() {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.style.display = 'block';  // Make the error message visible
    errorMessage.textContent = "That's wrong! Try again!"; // Change error message text

    // Optionally, hide it after a few seconds (e.g., 3 seconds)
    setTimeout(() => {
        errorMessage.style.display = 'none'; // Hide error message after 3 seconds
    }, 3000);
}
// Reset the challenge and clear the text areas
function resetChallenge() {
    document.getElementById("typingArea").value = '';
    document.getElementById("notesArea").value = generateAlphabetSequence();
    document.getElementById("sentenceText").textContent = getRandomSentence();
    document.getElementById("successMessage").style.display = 'none';  // Hide success message on reset
    document.getElementById("timerDisplay").textContent = "Time: 0s";
    clearInterval(timerInterval);
    startTime = undefined;
    document.getElementById("errorMessage").style.display = 'none'; // Hide error message on reset
}

// Generate the alphabet sequence with arrows
function generateAlphabetSequence() {
    let alphabetText = '';
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < alphabet.length; i++) {
        alphabetText += alphabet[i] + ' ->\n';
    }
    return alphabetText;
}

// Get elapsed time in seconds
function getElapsedTime() {
    const endTime = new Date();
    return Math.round((endTime - startTime) / 1000);
}

// Reset Button functionality
document.getElementById("resetButton").addEventListener("click", resetChallenge);

// Submit Button functionality
document.getElementById("submitButton").addEventListener("click", checkCompletion);

// Play Again functionality
document.getElementById("playAgainButton").addEventListener("click", resetChallenge);

// Randomly map letters for typing area
function generateRandomMapping() {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const randomized = [...letters].sort(() => Math.random() - 0.5);
    const mapping = {};
    letters.forEach((letter, index) => {
        mapping[letter] = randomized[index];
    });
    return mapping;
}

const typingArea = document.getElementById("typingArea");

typingArea.addEventListener("keydown", (event) => {
    const char = event.key.toLowerCase();
    if (currentMapping[char]) {
        event.preventDefault();
        typingArea.value += currentMapping[char];
    }
    // Start the timer on the first keystroke
    if (!startTime) {
        startTime = new Date();
        timerInterval = setInterval(updateTimer, 1000);
    }
});

// Timer update function
function updateTimer() {
    document.getElementById("timerDisplay").textContent = `Time: ${getElapsedTime()}s`;
}

// Reset mapping every 24 hours
setInterval(() => {
    currentMapping = generateRandomMapping();
}, 86400000);

// Display a random challenge sentence on load and reset notes area
document.getElementById("sentenceText").textContent = getRandomSentence();
document.getElementById("notesArea").value = generateAlphabetSequence();

// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
    document.getElementById("typingArea").classList.toggle("dark-mode");
    document.getElementById("notesArea").classList.toggle("dark-mode");
    darkModeToggle.classList.toggle("dark-mode");
    darkModeToggle.classList.toggle("light-mode");
    darkModeToggle.textContent = body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
});

// Initial Theme Set
body.classList.add("light-mode");
document.getElementById("typingArea").classList.add("light-mode");
document.getElementById("notesArea").classList.add("light-mode");
darkModeToggle.classList.add("light-mode");
