import PropTypes from 'prop-types';
import css from './ButtonMain.module.css';

export const ButtonMain = ({type, buttonName, onClick, disabled, buttonStyle}) => {
    let buttonClass;
    if (buttonStyle === 'disabled') {
        buttonClass = css.disabled;
    }  else if (buttonStyle === 'active') {
        buttonClass = css.active;
    } else {
        buttonClass = css.simpleButton;
    }

    return (
        <button
            className={buttonClass}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {buttonName}
        </button>
    );
}

ButtonMain.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string.isRequired,
    buttonName: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    buttonStyle: PropTypes.string,
    
  };
