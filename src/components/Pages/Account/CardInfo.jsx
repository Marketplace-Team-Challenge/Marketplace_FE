import css from './Account.module.css';
import logo from '../../../assets/svg/icon(4).svg'

 const infos = ["Name", "Surname", "Address", "Phone", "Email", "Personal info"];
export const CardInfo = () => {
    // const storedData = localStorage.getItem('formData');
    // const formData = storedData ? JSON.parse(storedData) : {};
        return (
          <ul className={css.card_icon}>
            {infos.map((info) => {
                    return(      
                        <li className={css.card_list} key={info}>
                            <img className={css.card_logo} src={logo} />
                            {/* <p className={css.card_info}>{info}: {formData[info]}</p>  */}
                              <p className={css.card_info}>{info}</p> 
                        </li>
                    )
                })}
       </ul> 
    )
}