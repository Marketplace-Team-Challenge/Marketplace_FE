import PropTypes from 'prop-types';

import css from './ButtonMain.module.css'
const ButtonMain = ({ type, children }) => {
    return (
        <button className={css.button} type={type}>
            {children}
        </button>
    )
}

ButtonMain.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonMain;
