import React, { PureComponent } from 'react';
import Typography from '@mui/material/Typography';
const Footer = ()=>{
    return(
        <footer>
            <Typography align="center">
               Copyright © { (new Date()).getFullYear() } 

            </Typography>
        </footer>
    )
}
export default Footer;