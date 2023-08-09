import PropTypes from 'prop-types';
import css from './InputMain.module.css';
import { useRef, useState } from 'react';

export const InputMain = ({
    onChange,
    onBlur,
    placeholder, 
    type, 
    value,
    labelText, 
    customClassNameInput,
    customClassNameLabel, 
    customClassNameContainer, 
    customClassNameIconEmail,
    customClassNameIconPassword,
    childComponent,
    onClickPasswordIcon,
}) => {
    const inputFocusRef = useRef();
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
      };
    
      // const handleBlur = () => {
      //   setIsFocused(false);
      // };

    return (
        <>
        <div className={css[customClassNameContainer]}> 
        {labelText && (<label htmlFor="text" className={css[customClassNameLabel]}>{labelText}</label>)}
        <input
        className={`${css[customClassNameInput]} 
        ${
            isFocused ? css.focus : ''
        }`}
        ref={inputFocusRef} 
        placeholder={placeholder} 
        type={type} 
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={onBlur}
        value={value}
        />
        {customClassNameIconEmail && (<span className={css[customClassNameIconEmail]}></span>)}
        {customClassNameIconPassword && (<span className={css[customClassNameIconPassword]} onClick={() => onClickPasswordIcon()}></span>)}
        {childComponent}
        </div>
         {/* <input 
         className={css.input}
         placeholder={placeholder} 
         type={type} onChange={onChange}
         value={value} /> */}
        </>
    );
}

InputMain.propTypes = {
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    onClickPasswordIcon: PropTypes.func,
    labelText: PropTypes.string,
    customClassNameInput: PropTypes.string,
    customClassNameLabel: PropTypes.string,
    customClassNameContainer: PropTypes.string,
    customClassNameIconEmail: PropTypes.string,
    childComponent: PropTypes.element,
    customClassNameError: PropTypes.string,
    customClassNameIconPassword: PropTypes.string,
  };

