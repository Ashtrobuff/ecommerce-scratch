import React from 'react'
import { Route,Navigate, Outlet } from 'react-router-dom'
const PrivateRoute = ({ children }) => {
    
    function hasJWT() {
        
            let flag=false;
        localStorage.getItem("token") ? flag=true : flag=false
       console.log(flag);
        return flag
    }

   return hasJWT ? <Outlet/> :<Navigate to="/login"/>
}

export default PrivateRoute