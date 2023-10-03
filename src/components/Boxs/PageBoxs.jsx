import * as React from 'react';
import { Typography } from '@mui/material'; 
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import InfoIcon from '@mui/icons-material/Info';
import Grid from '@mui/material/Unstable_Grid2'; 
const pageBoxs = ({boxData})=>{

        let icon = "";
        
        if(boxData.status=='info'){
            icon = <InfoIcon sx={{ color : "#da9817", fontSize : "2rem"}} />;
        }else if(boxData.status=='cancel'){
            icon = <CancelIcon sx={{ color : "red", fontSize : "2rem"}} />;
        }else{
            icon = <CheckCircleIcon sx={{ color : "green", fontSize : "2rem"}} />;
        }
        return(
            <Grid item xs={12} sm={6} md={6}>
                <Card variant="outlined" sx={{ minWidth : '250px', width : 'auto' }}>
                    <CardContent>
                        <Typography  component="div" sx={{ textAlign : 'center'}}>
                            <Typography  component="span">
                                {boxData.name}
                            </Typography>
                            <Typography sx={{ float : 'right'}}  component="span">
                                {icon}
                            </Typography>
                        </Typography> 
                    </CardContent> 
                </Card>
            </Grid>
        )
}

export default pageBoxs;