import css from './Account.module.css';
import avatar from '../../../assets/img/photo.png';
import { CardInfo } from './CardInfo';

export const AccountCard = () => {
    const name = 'Anna Shevchenko';
    return (
        <div className={css.card_container}>
            <img className={css.card_img} src={avatar}/>
            <span className={css.card_title}>{name}</span> 
           <CardInfo/>
    </div>
    )
}