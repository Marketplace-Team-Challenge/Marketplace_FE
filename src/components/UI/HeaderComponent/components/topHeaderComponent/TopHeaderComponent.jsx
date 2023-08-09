import React, { useState } from "react";
import { LogoComponent } from "../../../common/LogoComponent/LogoComponent";
import { Link } from "react-router-dom";
import css from "./TopHeaderComponent.module.css";
import { topHeaderTitle, topHeaderlinkTitle } from "../../../../../constants/Values";

// import { makeStyles } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { OutlinedInput } from "@mui/material";

export const TopHeaderComponent = () => {
    const [selectedValue, setSelectedValue] = useState('English');
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
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

    
    <div>
      <FormControl sx={{
        width: 78, height: 24, 
      '& .MuiInputBase-root': {width: 78, height: 24},
    '& .MuiSelect-select': {padding: 0}, 
    '& .MuiSvgIcon-root': {right: 0}, 
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {border: 'none'},
    '& .MuiSelect-nativeInput': {p: 0, border: 'none'}, 
    '& .MuiOutlinedInput-notchedOutline': {p: 0},
    '& .MuiOutlinedInput-input': {paddingRight: 0}, 
    '& #demo-simple-select-standard': {p:0, width: 49, height: 21,
        display: 'flex', alignItems: 'center'
    },
 }}  
     >
       <Select
								labelId='demo-simple-select-standard-label'
								id='demo-simple-select-standard'
								value={selectedValue}
								onChange={handleChange}
								label='Role'
                                input={<OutlinedInput sx={{fontSize: '12px', paddingRight: 0}}/>}
                                sx={{ fontSize:'12px' }}
                                inputProps={{MenuProps: {disableScrollLock: true}}}
							>
								<MenuItem 
									className='MenuItem'
									value=''
								></MenuItem>
								<MenuItem
									className='MenuItem'
									value={'English'}	
								>
									{'English'}
								</MenuItem>
								<MenuItem
									className='MenuItem'
									value={'Ukrainian'}
								>
									{'Ukrainian'}
								</MenuItem>
							</Select>
      </FormControl>
    </div>
        </div>
        </div>
        </div>
        </div>
        </React.Fragment>
    );
}