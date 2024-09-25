import { jest, describe, beforeEach, afterEach, test, expect } from '@jest/globals';
import { startGame, checkGuess, displayMessage, handleGuess } from './script.js';

// Mock DOM elements
document.body.innerHTML = `
  <div id="message"></div>
  <form id="guessForm">
    <input type="number" id="guessInput">
    <button type="submit">Submit Guess</button>
  </form>
`;

describe('Number Guessing Game', () => {
  let randomNumberSpy;

  beforeEach(() => {
    // Reset the DOM and game state before each test
    document.getElementById('message').textContent = '';
    document.getElementById('guessInput').value = '';
    
    // Mock random number generator
    randomNumberSpy = jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
    
    // Mock window.onload and trigger DOM event listener setup
    window.onload = () => {
      document.getElementById('guessForm').addEventListener('submit', handleGuess);
      startGame();
    };
    window.onload();  // Simulate window.onload call
  });

  afterEach(() => {
    randomNumberSpy.mockRestore();
  });

  test('startGame initializes the game correctly', () => {
    startGame();
    expect(document.getElementById('message').textContent).toBe('I\'m thinking of a number between 1 and 100. Can you guess it?');
  });

  test('checkGuess returns correct message for low guess', () => {
    expect(checkGuess(25)).toBe('Too low! Try again.');
  });

  test('checkGuess returns correct message for high guess', () => {
    expect(checkGuess(75)).toBe('Too high! Try again.');
  });

  test('checkGuess returns correct message for correct guess', () => {
    expect(checkGuess(51)).toBe('Congratulations! You guessed the number!');
  });

  test('displayMessage updates the DOM correctly', () => {
    displayMessage('Test message');
    expect(document.getElementById('message').textContent).toBe('Test message');
  });

  test('handleGuess processes valid low input correctly', () => {
    document.getElementById('guessInput').value = '25';
    const event = new Event('submit');
    event.preventDefault = jest.fn();  // Mock preventDefault
    handleGuess(event);
    expect(event.preventDefault).toHaveBeenCalled();  // Ensure preventDefault is called
    expect(document.getElementById('message').textContent).toBe('Too low! Try again.');
  });

  test('handleGuess processes valid high input correctly', () => {
    document.getElementById('guessInput').value = '75';
    const event = new Event('submit');
    event.preventDefault = jest.fn();  // Mock preventDefault
    handleGuess(event);
    expect(document.getElementById('message').textContent).toBe('Too high! Try again.');
  });

  test('handleGuess processes correct guess', () => {
    document.getElementById('guessInput').value = '51';  // Change to 51
    const event = new Event('submit');
    event.preventDefault = jest.fn();  // Mock preventDefault
    handleGuess(event);
    expect(document.getElementById('message').textContent).toBe('Congratulations! You guessed the number!');
  });

  test('handleGuess handles empty input', () => {
    document.getElementById('guessInput').value = '';
    const event = new Event('submit');
    event.preventDefault = jest.fn();  // Mock preventDefault
    handleGuess(event);
    expect(document.getElementById('message').textContent).toBe('Please enter a number.');
  });

  test('handleGuess handles non-numeric input', () => {
    document.getElementById('guessInput').value = 'abc';
    const event = new Event('submit');
    event.preventDefault = jest.fn();  // Mock preventDefault
    handleGuess(event);
    expect(document.getElementById('message').textContent).toBe('Please enter a number.');
  });

  test('handleGuess handles out of range input', () => {
    document.getElementById('guessInput').value = '150';
    const event = new Event('submit');
    event.preventDefault = jest.fn();  // Mock preventDefault
    handleGuess(event);
    expect(document.getElementById('message').textContent).toBe('Please enter a number between 1 and 100.');
  });

  test('handleGuess handles decimal input', () => {
    document.getElementById('guessInput').value = '50.5';
    const event = new Event('submit');
    event.preventDefault = jest.fn();  // Mock preventDefault
    handleGuess(event);
    expect(document.getElementById('message').textContent).toBe('Please enter a whole number.');
  });
});
