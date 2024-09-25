[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=16161094&assignment_repo_type=AssignmentRepo)
# W1D2 Assignment: Number Guessing Game

## Assignment Overview

In this assignment, you will create a basic JavaScript program that implements a number guessing game. This project will help you practice using control flow, loops, basic error handling, and DOM manipulation in JavaScript.

## Objectives

- Implement conditional statements to provide feedback on guesses
- Use a loop to allow multiple guesses
- Apply basic error handling to manage invalid user inputs
- Practice using Math.random() for generating random numbers
- Use DOM manipulation to update the game interface in the browser

## Project Structure

After cloning the repository, you should see the following file structure:

```
number-guessing-game/
├── .gitignore
├── index.html
├── styles.css
├── script.js
└── test-script.js
```

- `index.html`: Contains the basic HTML structure with a container for game output and an input field
- `styles.css`: Provides basic styling for the game interface. You may modify or extend these styles.
- `script.js`: This is where you'll implement your JavaScript code for the game logic
- `test-script.js`: Contains Jest unit tests for your implementation

## Setup and Installation

1. Make sure you have Node.js installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

2. Clone this repository to your local machine:
   ```
   git clone <repository-url>
   ```

3. Navigate to the project directory:
   ```
   cd number-guessing-game
   ```

4. Install the required dependencies:
   ```
   npm install
   
   npm install --save-dev @babel/core @babel/preset-env babel-jest

   npm install --save-dev jest-environment-jsdom
 ```

## Implementation Guidelines

1. Generate a random number between 1 and 100 using `Math.random()`

2. Implement the following functions in `script.js`:
   - `startGame()`: Initializes the game by generating a random number
   - `checkGuess(guess)`: Compares the user's guess to the random number and provides feedback
   - `displayMessage(message)`: Updates the game interface with new text

3. Use if-else statements to handle different guess scenarios (too high, too low, correct)

4. Implement a loop to allow multiple guesses until the correct number is guessed

5. Use a simple try/catch for error handling (e.g., non-numeric inputs)

6. Update the DOM to reflect the game state and provide feedback to the user

## Testing Your Implementation

1. Ensure your implementation passes the following test cases:
   - Starting the game
     - Expected Output: Initial game text prompting for a guess
   - Making a valid guess (too low)
     - Input: A number lower than the random number
     - Expected Output: Message indicating the guess is too low
   - Making a valid guess (too high)
     - Input: A number higher than the random number
     - Expected Output: Message indicating the guess is too high
   - Making an invalid guess
     - Input: Non-numeric input
     - Expected Output: Error message, prompt to enter a valid number
   - Guessing the correct number
     - Input: The correct number
     - Expected Output: Congratulatory message, game ends

2. Run the tests using the following command:
   ```
   npm test
   ```

3. If any tests fail, review the error messages, make necessary corrections, and run the tests again.

## Submission Instructions

1. Complete the implementation in the provided `script.js` file.

2. Ensure all test cases pass by running `npm test`.

3. Commit and push your changes to your GitHub repository:
   ```
   git add .
   git commit -m "Implement number guessing game"
   git push origin main
   ```

4. Submit the link to your GitHub repository on Canvas.

## Styling Your Game

The `styles.css` file is included in the project structure. You can modify or extend the existing styles to enhance the look of your game. If the file is empty, feel free to add your own CSS to style the game interface. This is a good opportunity to practice your CSS skills alongside JavaScript.

## Note on AI Usage

The use of AI tools (such as ChatGPT or GitHub Copilot) is permitted as a learning aid, but not as a replacement for your own work. If you use AI:

1. Document any AI assistance in a section of your README titled "AI Assistance".
2. Include the specific AI tool used, the prompts you provided, and how you used the AI's response.
3. Ensure you understand and can explain every line of code in your submission.

## Estximated Completion Time

This assignment is designed to be completed in approximately 60 minutes.

## Conclusion

This assignment will give you hands-on experience with fundamental JavaScript concepts and basic DOM manipulation. Remember to follow JavaScript best practices, use appropriate variable declarations (const, let), and maintain clean, readable code.

If you have any questions or encounter any issues during the implementation or testing process, don't hesitate to ask for help.

## MANUAL TEST CASES:
Here’s a set of manual test cases for fellows to use while developing their number guessing game. These test cases will guide them through ensuring their implementation behaves correctly.

### Manual Test Cases

#### 1. Game Initialization
- Action: Load the page.
- Expected Result: The message `"I'm thinking of a number between 1 and 100. Can you guess it?"` should be displayed.

#### 2. Guess Too Low
- Action: Enter `25` into the guess input field and submit the form.
- Expected Result: The message `"Too low! Try again."` should be displayed.

#### 3. Guess Too High
- Action: Enter `75` into the guess input field and submit the form.
- Expected Result: The message `"Too high! Try again."` should be displayed.

#### 4. Correct Guess
- Action: Enter the correct number (which is determined by `Math.random() * 100 + 1`) and submit the form.
- Expected Result: The message `"Congratulations! You guessed the number!"` should be displayed.

#### 5. Empty Input
- Action: Leave the input field empty and submit the form.
- Expected Result: The message `"Please enter a number."` should be displayed.

#### 6. Non-Numeric Input
- Action: Enter a non-numeric value, such as `"abc"`, into the guess input field and submit the form.
- Expected Result: The message `"Please enter a valid number."` should be displayed.

#### 7. Out of Range Input (Below 1)
- Action: Enter `0` or any number below `1` into the guess input field and submit the form.
- Expected Result: The message `"Please enter a number between 1 and 100."` should be displayed.

#### 8. Out of Range Input (Above 100)
- Action: Enter `150` or any number greater than `100` into the guess input field and submit the form.
- Expected Result: The message `"Please enter a number between 1 and 100."` should be displayed.

#### 9. Decimal Input
- Action: Enter a decimal value such as `50.5` into the guess input field and submit the form.
- Expected Result: The message `"Please enter a whole number."` should be displayed.

#### 10. Form Reset
- Action: After submitting a guess, check if the input field is cleared.
- Expected Result: The input field should be cleared after each submission.

---

### Additional Tests for Fellows:
- Repeated Guessing: After receiving a message that your guess was too low or too high, make another guess.
  - Expected Result: The game should continue to respond with the appropriate message for each guess.
  
- Page Reload Behavior: Reload the page and try to make a guess.
  - Expected Result: A new random number should be generated after the page is reloaded, and the game should start fresh.

---

### How to Use These Test Cases:
1. Step-by-step: After implementing each function, manually test your implementation by performing the actions listed in the test cases.
2. Expected results: Ensure your program produces the correct output for each scenario.
3. Iterate: If any test case fails, review your code, debug, and re-test until all cases pass.

By manually testing each case, fellows will ensure their number guessing game works as expected across various input scenarios.