import { useDispatch } from 'react-redux';
import { inputTypeText, authPlaceholderEmail, authPlaceholderPassword, buttonTypeSubmit, authTitleRegister, 
    authPlaceholderPasswordRepeat, inputStyles, PasswordMatchError, errorEmailInputMessage, errorPasswordInputMessage } from '../../../../constants/Values';
import { useInput, useTogglePassword } from '../../../../customHooks/customHooks';
import { ButtonMain } from '../../common/ButtonComponent/ButtonMain';
import { InputMain } from '../../common/InputComponent/InputMain';
import css from './RegistrationComponent.module.css';
import { registration } from '../../../../store/auth/operations';

export const RegistrationComponent = () => {
  const {inputAuth, iconEmailAuth, containerAuth} = inputStyles;
  const {typePassword, iconClass, togglePassInput} = useTogglePassword();
  const {typePassword:typePasswordRepeat, iconClass:iconClassRepeat, togglePassInput:togglePassInputRepeat} = useTogglePassword();

  const email = useInput('', {isEmpty: true, isEmail: true});
  const password = useInput('', {isEmpty: true, password: true});
  const passwordRepeat = useInput('', {isEmpty: true, password: true})
  const dispatch = useDispatch();
  const isDisabledButton = !email.isInputValid || !password.isInputValid || !passwordRepeat.isInputValid;
  const isPasswordsMatch = passwordRepeat.isDirty && passwordRepeat.value !== password.value;
  const enterRegistration = (data) => {
    dispatch(registration(data));
  }

    return(
        <>
            <form className={css.form} onSubmit={(e) => { 
            e.preventDefault();
            const credentials = {
                email: email.value,
                password: password.value,
                username: 'kate',
                role: 'DRIVER',
            };
            console.log(credentials);
                enterRegistration(credentials);
            }
                }> 
                    <div className={css.authInputBox}>
                        <InputMain 
                         placeholder={authPlaceholderEmail} 
                         type={inputTypeText}
                         value={email.value}
                         customClassNameInput={inputAuth}
                         customClassNameContainer={containerAuth}
                         customClassNameIconEmail={iconEmailAuth}
                         inputIsDirty = {email.isDirty}
                         isValidInput={email.isInputValid}
                         onChange={(e) => email.onChange(e)}
                         onBlur={(e) => email.onBlur(e)}
                         />
                          {email.isDirty && (email.isEmpty || email.isEmail) && (
                          <div className={css.error}>{errorEmailInputMessage}</div>
                        )}
                        <InputMain 
                        placeholder={authPlaceholderPassword} 
                        type={typePassword} 
                        value={password.value}
                        customClassNameInput={inputAuth}
                        customClassNameIconPassword={iconClass}
                        customClassNameContainer={containerAuth}
                        onClickPasswordIcon={togglePassInput}
                        inputIsDirty = {password.isDirty}
                        isValidInput={password.isInputValid}
                        onChange={(e) => password.onChange(e)}
                        onBlur={(e) => password.onBlur(e)}
                         />
                         {password.isDirty && (password.isEmpty || password.isValidPassword) && (
                          <div className={css.error}>{errorPasswordInputMessage}</div>
                        )}
                        <InputMain 
                        placeholder={authPlaceholderPasswordRepeat} 
                        type={typePasswordRepeat} 
                        value={passwordRepeat.value}
                        customClassNameInput={inputAuth}
                        customClassNameIconPassword={iconClassRepeat}
                        customClassNameContainer={containerAuth}
                        onClickPasswordIcon={togglePassInputRepeat}
                        inputIsDirty = {passwordRepeat.isDirty}
                        isValidInput={passwordRepeat.isInputValid}
                        onChange={(e) => passwordRepeat.onChange(e)}
                        onBlur={(e) => passwordRepeat.onBlur(e)}
                         />
                         {passwordRepeat.isDirty && (passwordRepeat.isEmpty || passwordRepeat.isValidPassword) && (
                          <div className={css.error}>{errorPasswordInputMessage}</div>
                        )}
                        {isPasswordsMatch && (
                           <div className={css.error}>{PasswordMatchError}</div>
						)}
                    </div>
                <ButtonMain type={buttonTypeSubmit} buttonName={authTitleRegister}
                 disabled={isDisabledButton} 
                 buttonStyle={isDisabledButton ? 'disabled' : 'active'}
                    />
                </form>
        </>
    );
}