import React from 'react';
import { Routes, Route,  Redirect } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import TSG from "../pages/TSG";
const Routers = () => {
    return(
        <>
        <Routes> 
            <Route path='/' element={<Layout />} >
                <Route path='/' element={<Home />} />
                <Route path='/views/tsg-global' element={<TSG />} />
                <Route path='/views/tsg-japan' element={<TSG />} />
                <Route path='/views/tsg-global' element={<Home />} />
            </Route> 
        </Routes>
        </>
    )
}
export default Routers;