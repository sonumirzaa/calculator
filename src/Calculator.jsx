// src/Calculator.js
import React, { useState } from 'react';
import './App.css'; // Optional: for styling



const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1)); // Remove the last character
  };

  const handleCalculate = () => {
    try {
      // Evaluate the expression
      const evalResult = eval(input);
      setResult(evalResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      
      <div className="buttons">

        <button onClick={handleClear}>AC</button>
        <button onClick={handleBackspace}>Back</button> 
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('/')}>/</button>
        
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>X</button>
        
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>        
        <button onClick={() => handleClick('+')}>+</button>
               
        <button onClick={() => handleClick('(')}>(</button>
        <button onClick={() => handleClick(')')}>)</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={handleCalculate}>=</button>
      </div>
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
    </div>
  );
};



export default Calculator;