import css from './Search.module.css'
export const SearchComponent = () => {
    return (
    <div className={css.search}>
        <input className={css.input} placeholder="  I'm looking for" type="text"/>
        <button type="submit">Search</button>
    </div>
    )
}