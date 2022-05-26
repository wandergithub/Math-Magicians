import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Display from './Display';

const Calculator = () => {
  const [state, setState] = useState({
    obj: {
      total: '0',
      next: '0',
      operation: '',
    },
  });

  const handleInput = (event) => {
    const { obj } = state;
    const buttonName = event.target.innerHTML;
    const inputObj = calculate(obj, buttonName);
    setState({ obj: inputObj });
  };

  const { obj } = state;
  const result = obj.total;
  return (
    <div className="calculatorContainer">
      <Display output={result} />
      <div className="buttons-container">
        <div className="row">
          <button onClick={handleInput} type="button" className="button">AC</button>
          <button onClick={handleInput} type="button" className="button">+/-</button>
          <button onClick={handleInput} type="button" className="button">%</button>
          <button onClick={handleInput} type="button" className="button">÷</button>
        </div>
        <div className="row">
          <button onClick={handleInput} type="button" className="button">7</button>
          <button onClick={handleInput} type="button" className="button">8</button>
          <button onClick={handleInput} type="button" className="button">9</button>
          <button onClick={handleInput} type="button" className="button">x</button>
        </div>
        <div className="row">
          <button onClick={handleInput} type="button" className="button">4</button>
          <button onClick={handleInput} type="button" className="button">5</button>
          <button onClick={handleInput} type="button" className="button">6</button>
          <button onClick={handleInput} type="button" className="button">-</button>
        </div>
        <div className="row">
          <button onClick={handleInput} type="button" className="button">1</button>
          <button onClick={handleInput} type="button" className="button">2</button>
          <button onClick={handleInput} type="button" className="button">3</button>
          <button onClick={handleInput} type="button" className="button">+</button>
        </div>
        <div className="row row-5">
          <button onClick={handleInput} type="button" className="button">0</button>
          <button onClick={handleInput} type="button" className="button">.</button>
          <button onClick={handleInput} type="button" className="button">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
