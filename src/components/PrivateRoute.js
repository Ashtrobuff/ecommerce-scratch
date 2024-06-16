import React, { Children } from 'react'
import { Route,Navigate, Outlet } from 'react-router-dom'
import Home from '../pages/Home';
const PrivateRoute = ({ children }) => {
    
    function hasJWT() {
        
            let flag=false;
        localStorage.getItem("token") ? flag=true : flag=false
       console.log(flag);
        return flag
    }

   return hasJWT() ? children :<Navigate to="/login"/>
}

export default PrivateRoute