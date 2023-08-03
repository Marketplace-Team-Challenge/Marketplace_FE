import { authInputStyle, iconStyleAuthEmail, iconStyleAuthName } from '../../../../../constants/Styles';
import { authPlaceholderName, inputTypeText, authPlaceholderEmail, authPlaceholderPassword, buttonTypeSubmit, buttonNameAuthRegisr} from '../../../../../constants/Values';
import { useTogglePassword } from '../../../../../customHooks/customHooks';
import { ButtonMain } from '../../common/ButtonComponent/ButtonMain';
import { InputMain } from '../../common/InputComponent/InputMain';
import css from './RegistrationComponent.module.css';

export const RegistrationComponent = () => {
  const {typePassword, iconStyleAuthPassword, togglePassInput} = useTogglePassword();

  const authButtonStyle = {
    width: "324px",
    height: "48px",
    marginTop: "19px",
    padding: "12px 0px",
  }

    return(
        <>
         <form className={css.form}>
                    <div className={css.authIconBox} style={{ marginBottom: '20px'}}>
                        <InputMain placeholder={authPlaceholderName} type={inputTypeText} style={authInputStyle}
                        showLabel={false} />
                        <span style={iconStyleAuthName}></span>
                    </div>
                    <div className={css.authIconBox} style={{ marginBottom: '20px'}}>
                        <InputMain placeholder={authPlaceholderEmail} type={inputTypeText} style={authInputStyle}
                        showLabel={false} />
                        <span style={iconStyleAuthEmail}></span>
                    </div>
                    <div className={css.authIconBox}>
                        <InputMain placeholder={authPlaceholderPassword} type={typePassword} style={authInputStyle}
                        showLabel={false} />
                        <span style={iconStyleAuthPassword} onClick={() => togglePassInput()}></span>
                    </div>
                    <ButtonMain type={buttonTypeSubmit} buttonName={buttonNameAuthRegisr} style={authButtonStyle} />
                </form>
        </>
    );
}