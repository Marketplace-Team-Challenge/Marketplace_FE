import { ButtonMain } from "../../UI/Button/ButtonMain"
import css from "./PersonForm.module.css"
export const Form = () => {
    return (
         <form className={css.form}>
        <div className={css.form_group}>
          <label htmlFor="name">First name</label>
          <input required="" placeholder="Enter your name" name="name" id="name" type="text"/>
        </div>

        <div className={css.form_group}>
          <label htmlFor="password">Password</label>
          <input required="" name="password" placeholder="Enter your password" id="password" type="password"/>
        </div>

        <ButtonMain/>
      </form>
    )
}