import React from 'react';
import Display from './Display';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculatorContainer">
        <Display />
      </div>
    );
  }
}

export default Calculator;
