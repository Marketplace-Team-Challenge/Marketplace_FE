import css from './Account.module.css'

import { AccountCard } from "./AccountCard"
import { PersonalInfo } from "./PersonalInfo"

export const Account = () => {
    return (
        <div className={css.container}>
            <AccountCard />
            <PersonalInfo/>
    </div>
    )
}
