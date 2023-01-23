import React from 'react'
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({children}) => {

   const auth  = localStorage.getItem("isLogin")
   if (!auth){
      return <Navigate to="/auth"/>
   } 
  return children;

}

export default PrivateRoute