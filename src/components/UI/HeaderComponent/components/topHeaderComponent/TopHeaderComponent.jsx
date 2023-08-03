import React from "react";
import { LogoComponent } from "../../../common/LogoComponent/LogoComponent";
import { Link } from "react-router-dom";
import css from "./TopHeaderComponent.module.css";
import { topHeaderTitle, topHeaderlinkTitle } from "../../../../../../constants/Values";

export const TopHeaderComponent = () => {
    return (
        <React.Fragment>
            <div className={css.topHeaderCommonWrapper}>
                <div className={css.topHeaderWrapperBox}>
            <div className={css.topHeaderTitleBox}>
        <LogoComponent />
        
        <div className={css.topHeaderTitleContainer}>
            <h4 className={css.topHeaderTitle}>{topHeaderTitle}</h4>
            <div className={css.topHeaderLinkContainer}>
            <Link className={css.topHeaderLink} to="/">
            {topHeaderlinkTitle}
            </Link>
            </div>
        </div>
        <div className={css.languageSection}>
        </div>
        </div>
        </div>
        </div>
        
        </React.Fragment>
    );
}