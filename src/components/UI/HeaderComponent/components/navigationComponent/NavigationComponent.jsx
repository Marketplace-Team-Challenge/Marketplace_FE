import React from "react";
import { Link, useNavigate } from "react-router-dom";
import css from "./NavigationComponent.module.css"
import { ButtonMain } from "../../../common/ButtonComponent/ButtonMain";
import { authTitleRegister, buttonNameLogin, buttonTypeSubmit } from "../../../../../../constants/Values";
// import { busketIcon, userColorIcon, wishListIcon } from "../../../../../../../constants/Icons";

export const NavigationComponent = () => {
    const navigate = useNavigate();
    const buttonSignUpStyles = {
        width: "87px",
        height: "32px",
        // padding: "9px 16px",
        fontFamily: "var(--primary_text)",
        fontSize: "14px",
        fontWeight: "600",
        lineHeight: "20px",
        letterSpacing: "2%",
    }
    return (
        <React.Fragment>
            <div className={css.navigationCommonContainer}>
            <nav className={css.navigation}>
                <Link className={css.navigationLink} to="/">
                    Home
                </Link>
                <Link className={css.navigationLink} to="/">
                    Catalog
                </Link>
                <Link className={css.navigationLink} to="/">
                    About us
                </Link>
                <Link className={css.navigationLink} to="/">
                    Help
                </Link>
                <Link className={css.navigationLink} to="/">
                    Delivery
                </Link>
            </nav>
            <div className={css.navigationBtnContainer}>
                <div style={{width: "35px", height: "18px"}}>
                <Link to="/login" className={css.navigationBtnLink}>{buttonNameLogin}</Link>
                </div>
                <ButtonMain type={buttonTypeSubmit} buttonName={authTitleRegister} style={buttonSignUpStyles}
                onClick={() => navigate("/registration")} />
            </div>
            {/* <div className={css.personalBar}>
                <div className={css.iconBox}>
                <img src={wishListIcon} alt="Wish List" />
                </div>
                <div className={css.iconBox}>
                <img src={busketIcon} alt="Busket" />
                </div>
                <div className={css.iconBox}>
                <img src={userColorIcon} alt="Profile" />
                </div>
            </div> */}
            </div>
        </React.Fragment>
    );
}