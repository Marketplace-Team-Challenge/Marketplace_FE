import { ButtonMain } from "../../UI/Button/ButtonMain"
import css from "./PersonForm.module.css"

const formData = [
  {
    label: "First name",
    name: "name",
    type: "text",
    placeholder: "Enter your First name"
  },
  {
    label: "Last name",
    name: "surname",
    type: "text",
    placeholder: "Enter your Last name"
  },
  {
    label: "Country/region fo residence",
    name: "residence",
    type: "text",
    placeholder: "Enter your country of residence"
  },
    {
    label: "Title",
    name: "title",
    type: "text",
    placeholder: "Enter your title"
  },
  {
    label: "Country/region code",
    name: "code",
    type: "number",
    placeholder: "Enter your region code"
  },
   {
    label: "Phone number",
    name: "phone",
    type: "tel",
     placeholder: "Ukraine (+380)",
     
  },
  {
    label: "Date of birth",
    name: "birthday",
    type: "date",
    placeholder: "Enter your birthday"
  },

 
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter your email"
  },

]
export const Form = () => {
    return (
      <form className={css.form}>
        <div className={css.form_wrapper}>
          {formData.map((data) => {
                    return(      
                        <div className={css.form_group} key={data.index}>
                        <label htmlFor={data.name}>{ data.label}</label>
                        <input required="" placeholder={data.placeholder} name={data.name} id={data.name} type={ data.type} />
        </div>
                    )
                })}
        </div>
        <ButtonMain/>
      </form>
    )
}