import { useEffect, useState } from "react";

export const useTogglePassword = () => {
    const [isShowPassword, setShowPassword] = useState(false);
    const [typePassword, setTypePassword] = useState('password');

    const togglePassInput = () => {
		if (typePassword === 'password') {
			setTypePassword('text');
			setShowPassword(true);
		} else {
			setTypePassword('password');
			setShowPassword(false);
		}
	};
    return {
        iconClass: isShowPassword ? 'iconPasswordAuthShowStyle' : 'iconPasswordAuthHiddenStyle',
        isShowPassword,
        typePassword,
        togglePassInput,
    };
};

export const useInput = (initialValue, validations) => {
	const [value, setValue] = useState(initialValue);
	const [isDirty, setDirty] = useState(false);
	const valid = useValidation(value, validations);
	const onChange = (e) => {
		setValue(e.target.value);
	};

	const resetInput = () => {
		setValue('');
		setDirty(false);
	};

	const onBlur = () => {
		setDirty(true);
	};

	return {
		value,
		isDirty,
		onChange,
		resetInput,
		onBlur,
		...valid,
	};
};

export const useValidation = (value, validations) => {
	const [isEmpty, setEmpty] = useState(true);
	const [isValidPassword, setErrorPassword] = useState(false);
	const [isEmail, setEmailError] = useState(false);
	const [isInputValid, setIsInputValid] = useState(false);
	
	useEffect(() => {
		setEmpty(!value);
		validations.password ? 
			setErrorPassword(!validations.password || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*\s).{8,15}$/.test(value))
		:
			setEmailError(!validations.isEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));

			setIsInputValid(!isEmpty && !isEmail && !isValidPassword);
		}, [validations, value, isEmpty,
			isValidPassword,
			isEmail]);

	return {
		isEmpty,
		isValidPassword,
		isEmail,
		isInputValid,
	};
};