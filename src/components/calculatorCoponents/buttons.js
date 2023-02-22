// import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ val = 'button' }) => (
  <button className="button" type={val === '=' ? 'button' : 'submit'}>{val}</button>
);

Buttons.propTypes = {
  val: PropTypes.string.isRequired,
};

export default Buttons;
