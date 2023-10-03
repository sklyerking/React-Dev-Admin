import React from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import {  Button, Paper, Box , styled, Typography } from '@mui/material'; 
import RefreshIcon from '@mui/icons-material/Refresh';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import InfoIcon from '@mui/icons-material/Info';
import Grid from '@mui/material/Unstable_Grid2';
import { Col, Row } from 'antd';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const Home = ()=>{
    return(
        <div style={{with : '100%'}}>
            <Typography align='center'>Home Page</Typography>
        </div>        
    )
}

export default Home;