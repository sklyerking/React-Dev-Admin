import React, { PureComponent } from 'react';
import style from "./styles";
import Header from './Header';
import Footer from './Footer';
import { Outlet } from "react-router-dom";
const Layout = ({children}) => {
    return(
        <div style={style.root}>
            <Header />

            <div style={{ minHeight : `calc(100vh - 20px)`, marginTop : '75px' }}>
                <div style={{ width : '90%', margin : 'auto' }}>
                    <Outlet /> 
                </div>
            </div>

            <Footer />
        </div>
    )
};

export default Layout;