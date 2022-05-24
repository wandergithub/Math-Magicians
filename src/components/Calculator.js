import React from 'react';
import Display from './Display';
import Button from './Button';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculatorContainer">
        <Display />
        <div className="buttons-container">
          <div className="row">
            <Button value="AC" />
            <Button value="+/-" />
            <Button value="%" />
            <Button value="÷" />
          </div>
          <div className="row">
            <Button value="7" />
            <Button value="8" />
            <Button value="9" />
            <Button value="x" />
          </div>
          <div className="row">
            <Button value="4" />
            <Button value="5" />
            <Button value="6" />
            <Button value="-" />
          </div>
          <div className="row">
            <Button value="1" />
            <Button value="2" />
            <Button value="3" />
            <Button value="+" />
          </div>
          <div className="row row-5">
            <Button value="0" />
            <Button value="." />
            <Button value="=" />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
