import css from './Account.module.css';
import logo from '/svg/icon(4).svg'
import iconAds from '/svg/calendaredit.svg'
import iconShop from '/svg/shoppingbag.svg'
import iconHeart from '/svg/heart.svg'
import { Link } from 'react-router-dom';

const infos = [
    { 'info': "Personal info", 'route': 'personal', 'icon':logo },
    { 'info': "My ads", 'route': 'ads', 'icon':iconAds },
    { 'info': "My purchases", 'route': 'purchase', 'icon':iconShop },
    { 'info': "My favorites", 'route': 'favorite', 'icon':iconHeart }
];
export const CardInfo = () => {
    // const storedData = localStorage.getItem('formData');
    // const formData = storedData ? JSON.parse(storedData) : {};
        return (
          <ul className={css.card_icon}>
            {infos.map((info) => {
                    return(      
                        <li className={css.card_list} key={info.info}>
                            <img className={css.card_logo} src={info.icon} />
                            <Link className={css.card_info} to={info.route}>{info.info}</Link>
                        </li>
                    )
                })}
       </ul> 
    )
}