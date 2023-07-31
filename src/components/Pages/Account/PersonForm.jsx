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
    label: "Country/region fo residence",
    name: "residence",
    type: "text",
    placeholder: "Enter your country of residence"
  },
  {
    label: "Country/region code",
    name: "code",
    type: "text",
    placeholder: "Enter your region code"
  },
  {
    label: "Date of birth",
    name: "birthday",
    type: "date",
    placeholder: "Enter your birthday"
  },
{
    label: "Last name",
    name: "surname",
    type: "text",
    placeholder: "Enter your Last name"
  },
  {
    label: "Last name",
    name: "surname",
    type: "text",
    placeholder: "Enter your Last name"
  },
  {
    label: "Last name",
    name: "surname",
    type: "text",
    placeholder: "Enter your Last name"
  },
  {
    label: "Last name",
    name: "surname",
    type: "text",
    placeholder: "Enter your Last name"
  }
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