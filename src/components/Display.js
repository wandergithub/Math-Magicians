import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { output } = this.props;
    let toDisplay = '0';
    if (output !== null && output !== undefined) {
      toDisplay = output;
    }
    return (
      <div className="outputContainer">
        <p>{ toDisplay }</p>
      </div>
    );
  }
}

Display.propTypes = {
  output: PropTypes.string,
};
Display.defaultProps = {
  output: '0',
};
export default Display;
