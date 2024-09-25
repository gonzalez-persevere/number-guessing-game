// Variable to store the random number
let randomNumber;

// Function to start the game
function startGame() {
    // Generate a random number between 1 and 100
    randomNumber = Math.floor(Math.random() * 100) + 1;
    displayMessage('I\'m thinking of a number between 1 and 100. Can you guess it?');
}

// Function to check the user's guess
function checkGuess(guess) {
    if (guess < randomNumber) {
        return 'Too low! Try again.';
    } else if (guess > randomNumber) {
        return 'Too high! Try again.';
    } else {
        return 'Congratulations! You guessed the number!';
    }
}

// Function to display messages in the game interface
function displayMessage(message) {
    document.getElementById('message').textContent = message;
}

// Function to handle user's guess submission
function handleGuess(e) {
    e.preventDefault();

    // Get the user's guess from the input field
    const guessInput = document.getElementById('guess');
    const guess = guessInput.value.trim();

    // Check if the input is empty
    if (!guess) {
        displayMessage('Please enter a number.');
        return;
    }

    // Check if the input is a number
    const numberGuess = Number(guess);
    if (isNaN(numberGuess)) {
        displayMessage('Please enter a number.');
        return;
    }

    // Check if the input is a whole number
    if (!Number.isInteger(numberGuess)) {
        displayMessage('Please enter a whole number.');
        return;
    }

    // Check if the input is within the valid range
    if (numberGuess < 1 || numberGuess > 100) {
        displayMessage('Please enter a number between 1 and 100.');
        return;
    }

    // If the guess is valid, display the result
    displayMessage(checkGuess(numberGuess));

    // Clear the input field after the guess
    guessInput.value = '';
}

// Function to reset the game
function resetGame() {
    // Clear the input field and start a new game
    document.getElementById('guess').value = '';
    displayMessage(''); // Clear any messages
    startGame();
}

// Event listener for form submission
if (typeof window !== 'undefined') {
    window.onload = function () {
        const form = document.getElementById('guessForm');
        form.addEventListener('submit', handleGuess);
        startGame();
    };
}

// Attach functions to the window object
window.resetGame = resetGame;  // Makes resetGame available globally

// Export functions for testing
export { startGame, checkGuess, displayMessage, handleGuess, resetGame };
