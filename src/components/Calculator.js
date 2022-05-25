import React from 'react';
import calculate from '../logic/calculate';
import Display from './Display';
// import Button from './Button';
// import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      obj: {
        total: '0',
        next: '0',
        operation: '',
      },
    };
  }

  handleInput = (event) => {
    const { obj } = this.state;
    const buttonName = event.target.innerHTML;
    const inputObj = calculate(obj, buttonName);
    console.log(inputObj);
    this.setState({ obj: inputObj });
  }

  render() {
    return (
      <div className="calculatorContainer">
        <Display />
        <div className="buttons-container">
          <div className="row">
            <button onClick={this.handleInput} type="button" className="button">AC</button>
            <button onClick={this.handleInput} type="button" className="button">+/-</button>
            <button onClick={this.handleInput} type="button" className="button">%</button>
            <button onClick={this.handleInput} type="button" className="button">÷</button>
          </div>
          <div className="row">
            <button onClick={this.handleInput} type="button" className="button">7</button>
            <button onClick={this.handleInput} type="button" className="button">8</button>
            <button onClick={this.handleInput} type="button" className="button">9</button>
            <button onClick={this.handleInput} type="button" className="button">x</button>
          </div>
          <div className="row">
            <button onClick={this.handleInput} type="button" className="button">4</button>
            <button onClick={this.handleInput} type="button" className="button">5</button>
            <button onClick={this.handleInput} type="button" className="button">6</button>
            <button onClick={this.handleInput} type="button" className="button">-</button>
          </div>
          <div className="row">
            <button onClick={this.handleInput} type="button" className="button">1</button>
            <button onClick={this.handleInput} type="button" className="button">2</button>
            <button onClick={this.handleInput} type="button" className="button">3</button>
            <button onClick={this.handleInput} type="button" className="button">+</button>
          </div>
          <div className="row row-5">
            <button onClick={this.handleInput} type="button" className="button">0</button>
            <button onClick={this.handleInput} type="button" className="button">.</button>
            <button onClick={this.handleInput} type="button" className="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
