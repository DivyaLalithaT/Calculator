import React, { useState } from 'react';
import Keypad from './components/Keypad';
import './App.css';

export default function App() {
  const [input, setInput] = useState('');

  function handleClick(value) {
    if (value === '=') {
      
      try {
        setInput(eval(input));
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      
      setInput('');
    } else {
      
      setInput(input + value);
    }
  }

  return (
    <div className="container">
      <h1>Calculator App</h1>
      <div className="Calculator">
        <input type="text" value={input} className="output" />
      </div>
      <Keypad handleClick={handleClick} />
    </div>
  );
}
