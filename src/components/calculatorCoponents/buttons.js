import PropTypes from 'react';

const Buttons = ({ val }) => (
  <button className="button" type={val === '=' ? 'button' : 'submit'}>{val}</button>
);

Buttons.propTypes = {
  val: PropTypes.string.isRequired,
};

export default Buttons;
