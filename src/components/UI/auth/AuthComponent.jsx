
import { Link, useNavigate } from "react-router-dom";
import css from "./AuthComponent.module.css";
import PropTypes from 'prop-types';
import { facebookColorIcon, googleColorIcon, appleBlackIcon, closeIcon } from "../../../../constants/Icons";

export const AuthComponent = ({authTitle, authText, authLineText, childComponent}) => {
      const logInLinkStyle = {
        textDecoration: 'underline',
        fontWeight: '600',
        lineHeight: '24px',
      }
      
    const navigate = useNavigate();
    return (
        <>
        <main className={css.mainAuthContainer}>
        <div className={css.authWrapper}>
            <div className={css.authIconCloseBox} onClick={() => navigate('/')}>
            <img src={closeIcon} alt="close" className={css.authIconClose}/>
        </div>
            <div className={css.authContainer}>
                <h2 className={css.authTitle}>{authTitle}</h2>
                <div className={css.authText}>{authText}</div>
                {childComponent}
                <div className={css.authLineText}>{authLineText}</div>
                <div className={css.authSocialsWrapper}>
                <div className={css.authSocialsCommonContainer}>
                    <div className={css.authSocialsBox}>
                        <div className={css.authSocialsImg_1}>
                        <img src={facebookColorIcon} alt="facebook" />
                        </div>
                        <div className={css.authSocialsText_1}>Facebook</div>
                    </div>
                    <div className={css.authSocialsBox}>
                        <div className={css.authSocialsImg_2}>
                        <img src={googleColorIcon} alt="google" />
                        </div>
                        <div className={css.authSocialsText_2}>Google</div>
                    </div>
                    <div className={css.authSocialsBox}>
                        <div className={css.authSocialsImg_3}>
                        <img src={appleBlackIcon} alt="apple" />
                        </div>
                        <div className={css.authSocialsText_3}>Apple</div>
                    </div>
                </div>
                </div>
                <div className={css.authPrivacyPolicyContainer}>
                <div className={css.authPrivacyPolicyText}>By creating an account, you accept our{" "} 
                <a className={css.authPrivacyPolicyLink} href="/terms-of-service">Terms of Service</a> and{" "}
                <a className={css.authPrivacyPolicyLink} href="/privacy-policy">Privacy Policy</a>.
                </div>
                <div>
                <hr className={css.authLine} />
                </div>
               <div className={css.haveAccountLogIn}>Already have an account? <Link className={css.authPrivacyPolicyLink} style={logInLinkStyle}>Log in</Link></div>
               </div>
            </div>
        </div>
        </main>
        </>
    );
}

AuthComponent.propTypes = {
    authTitle: PropTypes.string.isRequired,
    authText: PropTypes.string.isRequired,
    authLineText: PropTypes.string.isRequired,
    childComponent: PropTypes.element.isRequired,
  };
