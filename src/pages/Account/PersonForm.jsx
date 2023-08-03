import { useState } from "react";
import css from "./PersonForm.module.css"
import { ButtonMain } from "../../components/UI/common/ButtonComponent/ButtonMain";
import { InputMain } from "../../components/UI/common/InputComponent/InputMain";


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
  const [formValues, setFormValues] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formValues));
    setFormValues({});
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }));
  };

    return (
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.form_wrapper}>
          {formData.map((data, index) => {
                    return(      
                        <div className={css.form_group} key={index}>
                        <label htmlFor={data.name}>{ data.label}</label>
                        <InputMain
                          required
                          placeholder={data.placeholder}
                          name={data.name}
                          id={data.name}
                          type={data.type} 
                          value={formValues[data.name] || ''}
                          onChange={handleChange}
                          />
        </div>
                    )
                })}
        </div>
        <ButtonMain type="submit">Save</ButtonMain>
      </form>
    )
}