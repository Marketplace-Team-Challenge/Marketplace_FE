import { Link, useNavigate } from 'react-router-dom';
import { inputTypeText, authPlaceholderEmail, authPlaceholderPassword, buttonTypeSubmit, authTitleLogin, inputStyles, 
  // errorEmailRequired, 
  // errorEmailInvalid, 
  // errorPasswordRequired,
  // errorPasswordLength
} from '../../../../constants/Values';
import { useInput, useTogglePassword } from '../../../../customHooks/customHooks';
import { ButtonMain } from '../../common/ButtonComponent/ButtonMain';
import { InputMain } from '../../common/InputComponent/InputMain';
import css from './LoginComponent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../../store/auth/operations';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { getIsAuth } from '../../../../store/auth/selectors';

export const LoginComponent = () => {

      const {typePassword, iconClass, togglePassInput} = useTogglePassword();
      const {inputAuth, iconEmailAuth, containerAuth} = inputStyles;
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const email = useInput('olena@gmail.com', { isEmpty: true, isEmail: true });
      const password = useInput('123456', { isEmpty: true, minLength: 6 });
      const isAuth = useSelector(getIsAuth);
      let userToken = localStorage.getItem('token');
    
      const enterProfile = (email, password) => {
        const userCredentials = {
          username: 'olena',
          email: email.value,
          password: password.value,
        };
        dispatch(login(userCredentials));
      }

      useEffect(() => {
        if (isAuth === true) {
          navigate('/profile');
        }
      }, [isAuth, navigate]);

      const isUserHasToken = useCallback(() => {
        try {
          if (userToken) {
            navigate('/profile');
          } 
        } catch (e) {
          console.log(e);
        }
      }, [userToken, navigate]);
    
      useEffect(() => {
        isUserHasToken();
      }, [isUserHasToken]);
    

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
                      onChange={(e) => email.onChange(e)}
                      onBlur={(e) => email.onBlur(e)}
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
                        onBlur={(e) => password.onBlur(e)}
                        />
                    </div>
            <Link className={css.authLinkForgotPassword}>Forgot password?</Link>
             <ButtonMain type={buttonTypeSubmit} buttonName={authTitleLogin}
             />
                </form>
        </>
    );
}