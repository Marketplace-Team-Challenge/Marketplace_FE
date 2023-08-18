import { Link } from 'react-router-dom'
import { ButtonMain } from '../../../components/UI/common/ButtonComponent/ButtonMain'
import css from './Purchase.module.css'


const purchaseData = [
  {
    img: "/img/purchase1.png",
    title: "White vase",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu facilisis lectus. Sed dapibus lorem turpis, a bibendum sem pharetra ac.",
    price: "52"
  },
  {
    img: "/img/purchase2.png",
    title: "Samsung tablet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu facilisis lectus. Sed dapibus lorem turpis, a bibendum sem pharetra ac.",
    price: "152"
  },
]


export const Purchase = () => {
    return (
        <div className={css.personal_container}>
          <ul className={css.card_container}>
            {purchaseData.map((purchase) => {
                    return(      
                        <li className={css.card_list} key={purchase.title}>
                            <img className={css.card_img} src={purchase.img} />
                            <div className={css.card_section}>
                                <h3 className={css.card_title}>{ purchase.title}</h3>
                    <p className={css.card_text}>{purchase.text}
                                <Link className={css.card_info} to={purchase.text}>More info</Link>
                    </p>
                            </div>
                    
                    <div className={css.card_section}>
                    <p className={css.card_subtext}>Price per product</p>
                                <p className={css.card_currency}>$ <span className={css.card_price}>{ purchase.price}</span></p>
                    <ButtonMain className={css.purchase_btn} type="submit" buttonName="Cross"/>
                    </div>
                    </li>
                    )
                })}
    </ul> 

        </div>
        
    )
}