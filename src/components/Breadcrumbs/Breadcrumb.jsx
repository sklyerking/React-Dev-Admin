import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useHistory ,useLocation } from 'react-router-dom';
const Breadcrumb = ({data})=>{
    const location = useLocation();
    console.log(" location " , location);
    return (
        <div role="presentation"  >
            <Breadcrumbs aria-label="breadcrumb">
                { data ?(
                    <>
                    {
                        data.breadcrumbs ? (
                            <>
                            {
                                data.breadcrumbs.map((item)=>(
                                    item.link ? (
                                        <Link underline="hover" color="inherit" to={item.link}>
                                            {item.name}
                                        </Link>
                                    ) :item.name 
                                ))
                            }
                            
                            </>
                        ) : data.name
                    }
                    </>
                    ): ""
                } 
            </Breadcrumbs>
        </div>
    )
}

export default Breadcrumb;