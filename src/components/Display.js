import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: 0,
    };
  }

  render() {
    const { output } = this.state;
    return (
      <div className="outputContainer">
        <p>{ output }</p>
      </div>
    );
  }
}

export default Display;
