import { Outlet } from 'react-router-dom'
import css from './Account.module.css'

import { AccountCard } from "./AccountCard"


export const Account = () => {
    return (
        <div className={css.container}>
            <AccountCard />
            <Outlet/>
    </div>
    )
}
