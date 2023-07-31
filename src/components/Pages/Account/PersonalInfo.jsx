
import { Form } from './PersonForm'
import css from './PersonalInfo.module.css'

export const PersonalInfo = () => {
    return (
        <div className={css.personal_container}>
            <div className={css.personal_wrapper}>
                <h3 className={css.personal_title}>Personal Info</h3>
            <p className={css.personal_info}>This information is used to autofill your details. Your details are stored securely and will not be shared publicly.</p>
            </div>
            <Form/>
            
        </div>
    )
}