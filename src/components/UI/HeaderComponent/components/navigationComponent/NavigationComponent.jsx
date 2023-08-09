import React from "react";
import { Link, useNavigate } from "react-router-dom";
import css from "./NavigationComponent.module.css"
import { ButtonMain } from "../../../common/ButtonComponent/ButtonMain";
import { authTitleRegister, buttonNameLogin, buttonNameLogout, buttonTypeButton, navData } from "../../../../../constants/Values";
import { useSelector } from "react-redux";
import { getEmail, getIsAuth } from "../../../../../store/auth/selectors";
import { busketIcon, 
    // userColorIcon, 
    wishListIcon } from "../../../../../constants/Icons";
import { Avatar } from "@mui/material";

export const NavigationComponent = () => {
    const navigate = useNavigate();
    const isAuth = useSelector(getIsAuth);
    const email = useSelector(getEmail);

    let firstLetterUsername = email.slice(0, 1).toUpperCase();

    return (
        <React.Fragment>
            <div className={css.navigationCommonContainer}>
            <nav className={css.navigation}>
                {
                    navData.map((nav) => {
                        return (
                            <Link to={nav.to} key={nav.id} className={css.navigationLink}>
                              {nav.linkName}
                            </Link>
                          );
                    })
                }
            </nav>
            {!isAuth && (
            <div className={css.navigationBtnContainer}>
                <div style={{width: "35px", height: "18px"}}>
                <Link to="/login" className={css.navigationBtnLink}>{buttonNameLogin}</Link>
                </div>
                <ButtonMain type={buttonTypeButton} buttonName={authTitleRegister}
                onClick={() => navigate("/registration")} />
            </div>
            )}
            {isAuth && (
                            <div className={css.personalBar}>
                            <div className={css.iconBox}>
                            <img src={wishListIcon} alt="Wish List" />
                            </div>
                            <div className={css.iconBox}>
                            <img src={busketIcon} alt="Busket" />
                            </div>
                            <div className={css.iconBox} onClick={() => navigate("/profile")}>
                                
							<Avatar
								sx={{
									width: 32,
									height: 32,
									bgcolor: 'var(--button_bg)',
								}}
								src={''}
							>
								{firstLetterUsername}
							</Avatar>
                            {/* <img src={userColorIcon} alt="Profile" /> */}
                            </div>
                            <ButtonMain type={buttonTypeButton} buttonName={buttonNameLogout} />
                        </div>

            )}


            </div>
        </React.Fragment>
    );
}