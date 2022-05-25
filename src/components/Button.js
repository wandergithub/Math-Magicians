import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value } = this.props;
    return (
      <button className="button" type="button">{value}</button>
    );
  }
}
Button.defaultProps = {
  value: 'Unknown',
};
Button.propTypes = {
  value: PropTypes.string,
};

export default Button;
