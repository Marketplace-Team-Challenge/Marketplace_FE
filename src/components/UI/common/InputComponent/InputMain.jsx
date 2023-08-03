import PropTypes from 'prop-types';
import css from './InputMain.module.css';

export const InputMain = ({onChange, placeholder, style, type, labelText, showLabel}) => {
    return (
        <>
        {showLabel && <label htmlFor="text">{labelText}</label>}
         <input className={css.input} placeholder={placeholder} type={type} style={style} onChange={onChange} />
        </>
    );
}

InputMain.propTypes = {
    onChange: PropTypes.func,
    placeholder: PropTypes.string.isRequired,
    style: PropTypes.object,
    type: PropTypes.string.isRequired,
    labelText: PropTypes.string,
    showLabel: PropTypes.bool.isRequired
  };
