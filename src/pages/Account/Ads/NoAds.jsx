import { ButtonMain } from '../../../components/UI/common/ButtonComponent/ButtonMain'
import css from './Add.module.css'
import emptyBucket from '/img/clearBucket.png'
export const NoAds = () => {
    return (
        <div className={css.ads_container}>
            <img className={css.ads_img} src={emptyBucket}/>
            <h2 className={css.ads_title}>Nothings been posted yet.</h2> 
            <p className={css.ads_text}>Would you like to create an ad? If yes, then click the button below</p>
        <ButtonMain className={css.ads_btn} type="submit" buttonName="Create an ad"/>
        </div>
        
    )
}