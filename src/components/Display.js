import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { output } = this.props;
    return (
      <div className="outputContainer">
        <p>{ output }</p>
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
