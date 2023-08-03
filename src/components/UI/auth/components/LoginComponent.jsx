import { useNavigate } from 'react-router-dom';
import { inputTypeText, authPlaceholderEmail, authPlaceholderPassword, buttonTypeSubmit, authTitleLogin} from '../../../../../constants/Values';
import { useTogglePassword } from '../../../../../customHooks/customHooks';
import { ButtonMain } from '../../common/ButtonComponent/ButtonMain';
import { InputMain } from '../../common/InputComponent/InputMain';
import css from './LoginComponent.module.css';
import { authButtonStyle, authInputStyle, iconStyleAuthEmail } from '../../../../../constants/Styles';

export const LoginComponent = () => {
    // const {
    //     isActiveElement,
    //     styleActiveContainer,
    //     stylePassiveContainer,
    //     styleActiveText,
    //     stylePassiveText,
    //     handleActiveContainerClick, 
    //     handlePassiveContainerClick
    //   } = useChooseLoginMethod();

      const {typePassword, iconStyleAuthPassword, togglePassInput} = useTogglePassword();

      const navigate = useNavigate();

      const enterProfile = () => {
        navigate("/profile");
      }
    
    return(
        <>
         <form className={css.form} onSubmit={(e) => {e.preventDefault(); enterProfile();}}>
            {/* <div className={css.choiceLoginMethodContainer}>
                <div className={css.loginMethodEmailBox}>
                    <p className={css.choiceLoginMethodEmail}>
                    Email address
                    </p>
                </div>
            </div> */}
            <div style={{height: "108px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <div className={css.authIconBox}>
                        <InputMain placeholder={authPlaceholderEmail} type={inputTypeText} style={authInputStyle}
                        showLabel={false} />
                        <span style={iconStyleAuthEmail}></span>
                    </div>
                    <div className={css.authIconBox}>
                        <InputMain placeholder={authPlaceholderPassword} type={typePassword} style={authInputStyle}
                        showLabel={false} />
                        <span style={iconStyleAuthPassword} onClick={() => togglePassInput()}></span>
                    </div>
            </div>
             <ButtonMain type={buttonTypeSubmit} buttonName={authTitleLogin} style={authButtonStyle} 
             />
                </form>
        </>
    );
}