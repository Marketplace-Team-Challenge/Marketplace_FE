import css from './SpecialOffers.module.css';

export const SpecialOffers = () => {
    return (
        <div className={css.container}>
           <div className={css.card}>
            <h3 className={css.cardTitle}>BEDSHEET SETS</h3>
            <p className={css.cardPrice}>$50.00<span className={css.cardSubPrice}>$220.00</span></p>
            <p className={css.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <button className={css.btn}>Read more</button>
        </div> 
        </div>
        
    )
}