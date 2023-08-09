import { useDispatch } from 'react-redux';
import { inputTypeText, authPlaceholderEmail, authPlaceholderPassword, buttonTypeSubmit, authTitleRegister, authPlaceholderPasswordRepeat, inputStyles } from '../../../../constants/Values';
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
  const password = useInput('', {isEmpty: true, minLength: 6});
  const passwordRepeat = useInput('', {isEmpty: true, minLength: 6})
  const dispatch = useDispatch();

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
                         onChange={(e) => email.onChange(e)}
                         />
                        <InputMain 
                        placeholder={authPlaceholderPassword} 
                        type={typePassword} 
                        value={password.value}
                        onChange={(e) => password.onChange(e)}
                        customClassNameInput={inputAuth}
                        customClassNameIconPassword={iconClass}
                        customClassNameContainer={containerAuth}
                        onClickPasswordIcon={togglePassInput}
                         />
                        <InputMain 
                        placeholder={authPlaceholderPasswordRepeat} 
                        type={typePasswordRepeat} 
                        value={passwordRepeat.value}
                        onChange={(e) => passwordRepeat.onChange(e)}
                        customClassNameInput={inputAuth}
                        customClassNameIconPassword={iconClassRepeat}
                        customClassNameContainer={containerAuth}
                        onClickPasswordIcon={togglePassInputRepeat}
                         />
                    </div>
                <ButtonMain type={buttonTypeSubmit} buttonName={authTitleRegister}
                    />
                </form>
        </>
    );
}