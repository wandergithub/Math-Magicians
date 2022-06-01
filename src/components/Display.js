import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { output, operation, prev } = this.props;
    return (
      <div className="outputContainer">
        <p>
          { output }
          { operation }
          { prev }
        </p>
      </div>
    );
  }
}

Display.propTypes = {
  output: PropTypes.string,
  operation: PropTypes.string,
  prev: PropTypes.string,
};
Display.defaultProps = {
  output: '0',
  operation: '',
  prev: '',
};
export default Display;
