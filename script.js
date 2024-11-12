const sentences = [
    "The sun sets.",
    "A blue sky.",
    "Rain falls hard.",
    "Stars at night.",
    "Birds are near.",
    "Wind blows fast.",
    "Snow falls down.",
    "Trees grow tall.",
    "Clouds drift by.",
    "Lights are bright.",
    "Fire burns hot.",
    "Cows eat grass.",
    "Cats sleep now.",
    "Dogs bark loud.",
    "Frogs leap high.",
    "Hills are green.",
    "Cars drive fast.",
    "Bikes are cool.",
    "Trains roll on.",
    "Ships sail far.",
    "Sunsets glow red.",
    "Bees fly near.",
    "Books are read.",
    "Rainbows shine.",
    "Planes fly high.",
    "Clouds form slow.",
    "I like pizza.",
    "You play games.",
    "We play fair.",
    "They run fast.",
    "I eat apples.",
    "You talk loud.",
    "She runs far.",
    "He reads books.",
    "They sit here.",
    "We study hard.",
    "I dance well.",
    "She loves it.",
    "He plays drums.",
    "You paint art.",
    "I climb hills.",
    "The moon glows.",
    "We drink milk.",
    "You laugh loud.",
    "She speaks soft.",
    "We watch stars.",
    "I love dogs.",
    "You like cake.",
    "We ride bikes.",
    "I make calls.",
    "You jump high.",
    "I run fast.",
    "She loves cats.",
    "They play well.",
    "We play chess.",
    "She eats fast.",
    "I build things.",
    "He walks slow.",
    "We sing loud.",
    "They sleep now.",
    "I buy clothes.",
    "You walk here.",
    "He runs fast.",
    "I draw art.",
    "They speak well.",
    "You write books.",
    "I send emails.",
    "We build walls.",
    "They laugh loud.",
    "She paints here.",
    "He plays games.",
    "I read books.",
    "You write now.",
    "She bakes pies.",
    "They fly high.",
    "We talk loud.",
    "I love music.",
    "You watch TV.",
    "I tell jokes.",
    "We play here.",
    "They sing songs.",
    "You play cards.",
    "She makes pies.",
    "We study math.",
    "I catch fish.",
    "They talk loud.",
    "We dance now.",
    "I make jokes.",
    "You catch fish.",
    "I read poems.",
    "He eats fast.",
    "They sing songs.",
    "She loves books.",
    "We go hiking.",
    "I run fast.",
    "You sit here.",
    "He works hard.",
    "I ride bikes.",
    "You talk here.",
    "They laugh now.",
    "We make art.",
    "I study well.",
    "You write here.",
    "She walks slow.",
    "They play well.",
    "We fly planes.",
    "He draws well.",
    "I work hard.",
    "You sing songs.",
    "I play chess.",
    "We talk soft.",
    "They read books.",
    "He makes jokes.",
    "She tells jokes.",
    "I play music.",
    "We laugh loud.",
    "You build walls.",
    "He loves cats.",
    "I tell stories.",
    "They fly here.",
    "She plays well.",
    "We read books.",
    "He runs slow.",
    "You make pies.",
    "We build cars.",
    "I play drums.",
    "She writes here.",
    "He reads here.",
    "We talk soft.",
    "You sing loud.",
    "I walk fast.",
    "She runs fast.",
    "They sing loud.",
    "We play loud.",
    "I jump high.",
    "You jump here.",
    "She walks far.",
    "I play well.",
    "We draw well.",
    "They ride bikes.",
    "She makes art.",
    "I sing songs.",
    "We ride horses.",
    "They jump here.",
    "You talk soft.",
    "I make pies.",
    "We run fast.",
    "She loves dogs.",
    "They play hard.",
    "I read poems.",
    "You make jokes.",
    "We sing songs.",
    "She loves music.",
    "I run slow.",
    "We ride horses.",
    "You play fair.",
    "I read books.",
    "He makes art.",
    "You ride here.",
    "I work hard.",
    "She runs here.",
    "They jump far.",
    "We laugh here.",
    "I make music.",
    "She loves dogs.",
    "He plays hard.",
    "We jump here.",
    "You play fair.",
    "I write books.",
    "They jump high.",
    "We make music.",
    "I read fast.",
    "You walk slow.",
    "She makes pies.",
    "We work hard.",
    "They laugh loud.",
    "I ride bikes.",
    "You ride fast.",
    "We fly planes.",
    "They walk far.",
    "I read poems.",
    "You play games.",
    "I tell stories.",
    "We run here.",
    "You build walls.",
    "I tell stories.",
    "She tells stories.",
    "I walk far.",
    "You walk fast.",
    "They play cards.",
    "I ride bikes.",
    "We study math.",
    "She runs here.",
    "He loves music.",
    "We sing loud.",
    "I work hard.",
    "She walks far.",
    "We talk fast.",
    "They walk here.",
    "I jump far.",
    "You work hard.",
    "We play cards.",
    "He plays games.",
    "I study here.",
    "She tells stories.",
    "We jump high.",
    "I read here.",
    "You make art.",
    "I make art.",
    "You walk fast.",
    "They jump here.",
    "I write here.",
    "She makes jokes.",
    "We talk loud.",
    "He writes here.",
    "They talk fast.",
    "We work fast.",
    "You work slow.",
    "I read poems.",
    "She talks loud.",
    "They play fair.",
    "I jump high.",
    "He loves books.",
    "You run slow.",
    "We walk here.",
    "They make music.",
    "I love books.",
    "You read books.",
    "We jump high."
]

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
