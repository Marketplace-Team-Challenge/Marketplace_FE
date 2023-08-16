import { useState } from "react";
import css from "./PersonForm.module.css"
// import { ButtonMain } from "../../components/UI/common/ButtonComponent/ButtonMain";
import { InputMain } from "../../../components/UI/common/InputComponent/InputMain";
import { ButtonMain } from "../../../components/UI/common/ButtonComponent/ButtonMain";
// import { InputMain } from "../../components/UI/common/InputComponent/InputMain";


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
    label: "City",
    name: "city",
    type: "text",
    placeholder: "Enter your city"
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

const handleFieldChange = (fieldName, value) => {
  setFormValues((prevFormValues) => ({
    ...prevFormValues,
    [fieldName]: value,
  }));
};

  const handleFieldBlur = (fieldName, value) => {
  setFormValues((prevFormValues) => ({
    ...prevFormValues,
    [fieldName]: value,
  }));
};

  console.log(formValues);
    return (
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.form_wrapper}>
          {formData.map((data, index) => {
                    return(      
                        <div className={css.form_group} key={index}>
                        <label htmlFor={data.name}>{data.label}<span className={css.form_sign}>*</span></label>
                        <InputMain
                          required
                          placeholder={data.placeholder}
                          name={data.name} 
                          id={data.name}
                          type={data.type} 
                          value={formValues[data.name] || ''}
                          onChange={(e) => handleFieldChange(data.name, e.target.value)}
                          onBlur={() => handleFieldBlur(data.name, formValues[data.name])}
                          />
        </div>
                    )
                })}
        </div>
        <ButtonMain className={css.btn} type="submit" buttonName="Save"/>
      </form>
    )
}