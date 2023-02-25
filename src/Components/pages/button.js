import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, text }) => (
  <button type="button" style={{ backgroundColor: color }}>{text}</button>
);

Button.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
