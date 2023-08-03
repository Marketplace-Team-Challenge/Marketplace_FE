import PropTypes from 'prop-types';
import css from './ButtonMain.module.css';

export const ButtonMain = ({type, buttonName, onClick, style}) => {
    return (
        <button className={css.button} type={type} onClick={onClick} style={style}>{buttonName}</button>
    );
}

ButtonMain.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string.isRequired,
    buttonName: PropTypes.string.isRequired,
    style: PropTypes.object,
  };
