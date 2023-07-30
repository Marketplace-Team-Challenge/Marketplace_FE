import { ButtonMain } from '../Button/ButtonMain'
import css from './Search.module.css'
export const SearchComponent = (name) => {
    return (
    <div className={css.search}>
            <input className={css.input} placeholder="  I'm looking for" type="text" />
            <ButtonMain className={css.button}>{ name}</ButtonMain>
    </div>
    )
}