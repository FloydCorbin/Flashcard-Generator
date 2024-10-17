// script.js

// Array of flashcards
const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the largest planet?", answer: "Jupiter" }
];

let currentCardIndex = 0;
let showingAnswer = false;

const flashcardElement = document.getElementById('flashcard');
const questionElement = document.getElementById('question');
const nextButton = document.getElementById('next-button');

// Function to display the current flashcard
function displayFlashcard() {
    if (showingAnswer) {
        questionElement.textContent = flashcards[currentCardIndex].answer;
    } else {
        questionElement.textContent = flashcards[currentCardIndex].question;
    }
}

// Event listeners for keyboard input
document.addEventListener('keydown', (event) => {
    if (event.key === ' ') { // Space bar to flip card
        showingAnswer = !showingAnswer;
        displayFlashcard();
    } else if (event.key === 'ArrowRight') { // Right arrow to move to the next card
        nextFlashcard();
    }
});

// Event listener for touch input
flashcardElement.addEventListener('click', () => {
    showingAnswer = !showingAnswer;
    displayFlashcard();
});

nextButton.addEventListener('click', nextFlashcard);

// Function to move to the next flashcard
function nextFlashcard() {
    showingAnswer = false;
    currentCardIndex = (currentCardIndex + 1) % flashcards.length; // Loop back to the beginning
    displayFlashcard();
}

// Display the first flashcard on page load
displayFlashcard();