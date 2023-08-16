import { Link, useNavigate } from 'react-router-dom';
import { inputTypeText, authPlaceholderEmail, authPlaceholderPassword, buttonTypeSubmit, authTitleLogin, inputStyles, errorEmailInputMessage, errorPasswordInputMessage, 
} from '../../../../constants/Values';
import { useInput, useTogglePassword } from '../../../../customHooks/customHooks';
import { ButtonMain } from '../../common/ButtonComponent/ButtonMain';
import { InputMain } from '../../common/InputComponent/InputMain';
import css from './LoginComponent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../../store/auth/operations';
import { useEffect } from 'react';
import { getUserInfo } from '../../../../store/auth/selectors';

export const LoginComponent = () => {

      const {typePassword, iconClass, togglePassInput} = useTogglePassword();
      const {inputAuth, iconEmailAuth, containerAuth} = inputStyles;
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const email = useInput('john@gmail.com', { isEmpty: true, isEmail: true });
      const password = useInput('123456jJ', { isEmpty: true, password: true });
      const userInfo = useSelector(getUserInfo);
      const isDisabledButton = !email.isInputValid || !password.isInputValid;
    
      const enterProfile = (email, password) => {
        const userCredentials = {
          username: 'olena',
          email: email.value,
          password: password.value,
        };
        dispatch(login(userCredentials));
      }

      useEffect(() => {
        if (userInfo.isAuth === true) {
          navigate('/profile');
        }
      }, [userInfo.isAuth, navigate]);

    return(
        <>
         <form className={css.form} onSubmit={(e) => {e.preventDefault(); enterProfile(email, password);}}>
            <div className={css.inputLoginWrapper}>
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
                        onChange={(e) => password.onChange(e)}
                        customClassNameInput={inputAuth}
                        customClassNameIconPassword={iconClass}
                        customClassNameContainer={containerAuth}
                        inputIsDirty = {password.isDirty}
                        isValidInput={password.isInputValid}
                        onClickPasswordIcon={togglePassInput}
                        onBlur={(e) => password.onBlur(e)}
                        />
                        {password.isDirty && (password.isEmpty || password.isValidPassword) && (
                          <div className={css.error}>{errorPasswordInputMessage}</div>
                        )}
                    </div>
            <Link className={css.authLinkForgotPassword}>Forgot password?</Link>
             <ButtonMain type={buttonTypeSubmit} buttonName={authTitleLogin}
             disabled={isDisabledButton}  buttonStyle={isDisabledButton ? 'disabled' : 'active'}
             />
                </form>
        </>
    );
}
