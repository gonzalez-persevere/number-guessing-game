let randomNumber;
let gameActive = true;

export function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
    displayMessage("I'm thinking of a number between 1 and 100. Can you guess it?");
    gameActive = true; // Reset game state
}

export function checkGuess(guess) {
    if (guess < randomNumber) {
        return 'Too low! Try again.';
    } else if (guess > randomNumber) {
        return 'Too high! Try again.';
    } else {
        gameActive = false; // Mark game as inactive
        return 'Congratulations! You guessed the number!';
    }
}

export function displayMessage(message) {
    document.getElementById('message').textContent = message;
}

export function resetGame() {
    // Reset game logic
    document.getElementById('guessInput').value = '';
    displayMessage("I'm thinking of a number between 1 and 100. Can you guess it?");
    startGame();
}


// Handle form submission
export function handleGuess(event) {
    event.preventDefault(); // Prevent form submission

    const guessInput = document.querySelector('#guessInput').value;

    try {
        // Validate guess
        if (!guessInput) {
            displayMessage('Please enter a number.');
            return;
        }

        // Check for non-numeric input
        const guessNumber = parseFloat(guessInput);

        if (isNaN(guessNumber) || !Number.isInteger(guessNumber)) {
            displayMessage('Please enter a valid integer number.');
            return;
        }

        // Check if guess is out of range
        if (guessNumber < 1 || guessNumber > 100) {
            displayMessage('Please enter a number between 1 and 100.');
            return;
        }

        // Check the guess and display message
        const feedback = checkGuess(guessNumber);
        displayMessage(feedback);

        // Clear input field for next guess
        document.querySelector('#guessInput').value = '';

        // If the game is over, provide option to restart
        if (!gameActive) {
            displayMessage('Press the button to start a new game.');
        }
    } catch (error) {
        displayMessage('An error occurred. Please try again.');
    }
}

// Set up event listener when the window loads
window.onload = () => {
    document.getElementById('guessForm').addEventListener('submit', handleGuess);
    startGame(); // Start the game on page load
};
