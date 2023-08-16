import { ButtonMain } from '../../../components/UI/common/ButtonComponent/ButtonMain'
import css from './Add.module.css'
import { NoAds } from './NoAds'
export const Ads = () => {
    return (
        <div className={css.personal_container}>
        <NoAds /> 
        <ButtonMain className={css.ads_btn} type="submit" buttonName="Create an ad"/>
        </div>
        
    )
}