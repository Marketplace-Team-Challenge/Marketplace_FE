import React from "react";
import { Link, useNavigate } from "react-router-dom";
import css from "./NavigationComponent.module.css"
import { ButtonMain } from "../../../common/ButtonComponent/ButtonMain";
import { authTitleRegister, buttonNameLogin, buttonNameLogout, buttonTypeButton, navData } from "../../../../../constants/Values";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../../../../store/auth/selectors";
import { busketIcon, 
    // userColorIcon, 
    wishListIcon } from "../../../../../constants/Icons";
import { Avatar } from "@mui/material";
import { logout } from "../../../../../store/auth/operations";

export const NavigationComponent = () => {
    const dispath =useDispatch();
    const navigate = useNavigate();
    // const isAuth = useSelector(getIsAuth);
    const userInfo = useSelector(getUserInfo);
    // const email = useSelector(userInfo.getEmail);

    let firstLetterUsername = userInfo.email.slice(0, 1).toUpperCase();

    // const userLogout = () => {dispath(logout());}

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
            {!userInfo.isAuth && (
            <div className={css.navigationBtnContainer}>
                <div style={{width: "35px", height: "18px"}}>
                <Link to="/login" className={css.navigationBtnLink}>{buttonNameLogin}</Link>
                </div>
                <ButtonMain type={buttonTypeButton} buttonName={authTitleRegister}
                onClick={() => navigate("/registration")} />
            </div>
            )}
            {userInfo.isAuth && (
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
                            <ButtonMain type={buttonTypeButton} buttonName={buttonNameLogout} 
                            onClick={() => {dispath(logout()); navigate('/', { replace: true });}}
                             />
                        </div>

            )}


            </div>
        </React.Fragment>
    );
}