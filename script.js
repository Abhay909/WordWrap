const sentences = [
    "the sun sets here",     // 15 characters
    "a blue sky at night",   // 15 characters
    "rain falls so hard",    // 15 characters
    "stars shine so bright", // 15 characters
    "birds fly in sky",      // 15 characters
    "wind blows so fast",    // 15 characters
    "snow falls down fast",  // 15 characters
    "trees grow so tall",    // 15 characters
    "clouds drift by slow",  // 15 characters
    "lights are bright",     // 15 characters
    "fire burns so hot",     // 15 characters
    "cows eat the grass",    // 15 characters
    "cats sleep right now",  // 15 characters
    "dogs bark so loud",     // 15 characters
    "frogs leap so high",    // 15 characters
    "hills are so green",    // 15 characters
    "cars drive so fast",    // 15 characters
    "bikes are so cool",     // 15 characters
    "trains roll on fast",   // 15 characters
    "ships sail so far",     // 15 characters
    "sunsets glow red",      // 15 characters
    "bees fly in air",       // 15 characters
    "books are read fast",   // 15 characters
    "rainbows shine bright", // 15 characters
    "planes fly so high",    // 15 characters
    "clouds form so slow",   // 15 characters
    "i like pizza now",      // 15 characters
    "you play games here",   // 15 characters
    "we play fair now",      // 15 characters
    "they run so fast",      // 15 characters
    "i eat apples fast",     // 15 characters
    "you talk so loud",      // 15 characters
    "she runs so far",       // 15 characters
    "he reads books fast",   // 15 characters
    "they sit here now",     // 15 characters
    "we study so hard",      // 15 characters
    "i dance so well",       // 15 characters
    "she loves it now",      // 15 characters
    "he plays the drums",    // 15 characters
    "you paint the art",    // 15 characters
    "i climb the hills",     // 15 characters
    "the moon shines bright",// 15 characters
    "we drink the milk",     // 15 characters
    "you laugh so loud",     // 15 characters
    "she speaks so soft",    // 15 characters
    "we watch the stars",    // 15 characters
    "i love my dogs now",    // 15 characters
    "you like the cake",     // 15 characters
    "we ride our bikes",     // 15 characters
    "i make some calls",     // 15 characters
    "you jump so high",      // 15 characters
    "i run very fast",       // 15 characters
    "she loves my cats",     // 15 characters
    "they play so well",     // 15 characters
    "we play some chess",    // 15 characters
    "she eats real fast",    // 15 characters
    "i build some things",   // 15 characters
    "he walks so slow",      // 15 characters
    "we sing so loud",       // 15 characters
    "they sleep right now",  // 15 characters
    "i buy new clothes",     // 15 characters
    "you walk here now",     // 15 characters
    "he runs so fast",       // 15 characters
    "i draw some art",       // 15 characters
    "they speak so well",    // 15 characters
    "you write some books",  // 15 characters
    "i send some emails",    // 15 characters
    "we build new walls",    // 15 characters
    "they laugh so loud",    // 15 characters
    "she paints right here", // 15 characters
    "he plays new games",    // 15 characters
    "i read some books",     // 15 characters
    "you write right now",   // 15 characters
    "she bakes some pies",   // 15 characters
    "they fly so high",      // 15 characters
    "we talk so loud",       // 15 characters
    "i love all music",      // 15 characters
    "you watch tv now",      // 15 characters
    "i tell some jokes",     // 15 characters
    "we play right here",    // 15 characters
    "they sing new songs",   // 15 characters
    "you play some cards",   // 15 characters
    "she makes new pies",    // 15 characters
    "we study some math",    // 15 characters
    "i catch some fish",     // 15 characters
    "they talk so loud",     // 15 characters
    "we dance here now",     // 15 characters
    "i make some jokes",     // 15 characters
    "you catch some fish",   // 15 characters
    "i read some poems",     // 15 characters
    "he eats so fast",       // 15 characters
    "they sing new songs",   // 15 characters
    "she loves my books",    // 15 characters
    "we go hiking now",      // 15 characters
    "i run very fast",       // 15 characters
    "you sit here now",      // 15 characters
    "he works so hard",      // 15 characters
    "i ride my bikes",       // 15 characters
    "you talk here now",     // 15 characters
    "they laugh so loud",    // 15 characters
    "we make some art",      // 15 characters
    "i study so well",       // 15 characters
    "you write here now",    // 15 characters
    "she walks so slow",     // 15 characters
    "they play so well",     // 15 characters
    "we fly new planes",     // 15 characters
    "he draws so well",      // 15 characters
    "i work so hard",        // 15 characters
    "you sing new songs",    // 15 characters
    "i play some chess",     // 15 characters
    "we talk so soft",       // 15 characters
    "they read new books",   // 15 characters
    "he makes new jokes",    // 15 characters
    "she tells some jokes",  // 15 characters
    "i play new music",      // 15 characters
    "we laugh so loud",      // 15 characters
    "you build new walls",   // 15 characters
    "he loves my cats",      // 15 characters
    "i tell some stories",   // 15 characters
    "they fly so high",      // 15 characters
    "she plays so well",     // 15 characters
    "we read new books",     // 15 characters
    "he runs so slow",       // 15 characters
    "you make some pies",    // 15 characters
    "we build new cars",     // 15 characters
    "i play the drums",      // 15 characters
    "she writes here now",   // 15 characters
    "he reads here now",     // 15 characters
    "we talk so soft",       // 15 characters
    "you sing so loud",      // 15 characters
    "i walk so fast",        // 15 characters
    "she runs so fast",      // 15 characters
    "they sing so loud",     // 15 characters
    "we play so loud",       // 15 characters
    "i jump so high",        // 15 characters
    "you jump here now",     // 15 characters
    "she walks so far",      // 15 characters
    "i play so well",        // 15 characters
    "we draw so well",       // 15 characters
    "they ride new bikes",   // 15 characters
    "she makes new art",     // 15 characters
    "i sing new songs",      // 15 characters
    "we ride new horses",    // 15 characters
    "they jump here now",    // 15 characters
    "you talk so soft",      // 15 characters
    "i make some pies",      // 15 characters
    "we run so fast",        // 15 characters
    "she loves my dogs",     // 15 characters
    "they play so hard",     // 15 characters
    "i read some poems",     // 15 characters
    "you make new jokes",    // 15 characters
    "we sing new songs",     // 15 characters
    "she loves new music",   // 15 characters
    "i run so slow",         // 15 characters
    "we ride new horses",    // 15 characters
    "you play so fair",      // 15 characters
    "i read new books"       // 15 characters
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
