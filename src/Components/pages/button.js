import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, text, Click }) => (
  <button type="button" style={{ backgroundColor: color }} onClick={Click}>{text}</button>
);

Button.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  // eslint-disable-next-line
  Click: PropTypes.func,
};

export default Button;
