import React, { useState } from 'react';
import './App.css';  // Make sure to include your CSS file

function Calculator() {
  const [input, setInput] = useState('');  // Stores the current input
  const [result, setResult] = useState(null);  // Stores the final result

  // Function to handle button clicks and append values to the input
  const handleInput = (value) => {
    if (/[+\-*/]/.test(value) && /[+\-*/]$/.test(input)) {
      return;  // Prevent consecutive operators
    }
    setInput(input + value);  // Append value to the input string
  };

  // Function to calculate the result of the input expression
  const calculateResult = () => {
    if (input) {
      try {
        // Evaluate the expression using new Function (safer than eval)
        const result = new Function('return ' + input)(); 
        setResult(result);  // Store the result in the result state
      } catch (error) {
        setResult('Error');  // If an error occurs (invalid expression), display 'Error'
      }
    }
  };

  // Function to clear the input and result
  const clearInput = () => {
    setInput('');  // Reset input to empty
    setResult(null);  // Reset result to null
  };

  return (
    <div className="calculator">
      {/* Display block for current input */}
      <div className="display">
        <p>{input || '0'}</p>  {/* Show '0' when input is empty */}
      </div>

      {/* Separate block for the result */}
      <div className="result-block">
        <h2>Result: {result !== null ? result : '0'}</h2>  {/* Show '0' when result is null */}
      </div>

      {/* Button grid */}
      <div className="buttons">
        <button onClick={clearInput} className="span-two">AC</button>
        <button onClick={() => handleInput('/')}>/</button>
        <button onClick={() => handleInput('*')}>*</button>

        <button onClick={() => handleInput('7')}>7</button>
        <button onClick={() => handleInput('8')}>8</button>
        <button onClick={() => handleInput('9')}>9</button>
        <button onClick={() => handleInput('-')}>-</button>

        <button onClick={() => handleInput('4')}>4</button>
        <button onClick={() => handleInput('5')}>5</button>
        <button onClick={() => handleInput('6')}>6</button>
        <button onClick={() => handleInput('+')}>+</button>

        <button onClick={() => handleInput('1')}>1</button>
        <button onClick={() => handleInput('2')}>2</button>
        <button onClick={() => handleInput('3')}>3</button>

        <button onClick={() => handleInput('0')} className="span-two">0</button>
        <button onClick={() => handleInput('.')}>.</button>

        <button onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
