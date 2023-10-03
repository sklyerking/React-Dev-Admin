import * as React from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import {  Button, Paper, Box , styled, Typography } from '@mui/material'; 
import RefreshIcon from '@mui/icons-material/Refresh';
import Grid from '@mui/material/Unstable_Grid2';
import PageBoxs from '../components/Boxs/PageBoxs';
import BreadcrumbList from '../data/BreadcrumbData';
const boxList = [
    { name: 'InvOps', status : 'checked' },
    { name: 'Shared Svcs', status : 'info' },
    { name: 'Sale', status : 'checked' },
    { name: 'PMR', status : 'cancel' }
]
const Tsg = ()=>{
    return (
        <div style={{with : '100%'}}>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={6} md={6}>
                    <Breadcrumb data={BreadcrumbList.TSGGlobal} />
                </Grid>
                <Grid item xs={6} md={6}>
                    <Button variant="contained" startIcon={<RefreshIcon />} sx={{ float : 'right', textTransform : 'inherit'}}>
                        Refresh
                    </Button>
                </Grid>
            </Grid> 

            <Grid sx={{ flexGrow: 1, marginTop : '20px' }} container spacing={2}>
                <Grid item xs={12} md={8} mdOffset={2}>
                    <div style={{width : "100%"}}>
                        <Grid sx={{ flexGrow: 1 }} container spacing={6}>
                            { boxList.map((item, index)=>(
                                <PageBoxs boxData={item} />   
                            )) }
                        </Grid>
                    </div>           
                </Grid>
            </Grid> 
        </div>
    )
}

export default Tsg;