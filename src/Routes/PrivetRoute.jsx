import React, { Children } from "react";
import { useContext } from "react";
import { AuthContex } from "../Probiders/AuthProviders";
import { Navigate } from "react-router-dom";
const PrivateRoute=({children})=>{

  const {user,loading}=useContext(AuthContex)  

  if(loading){
    return <progress className="progress w-56"></progress>
  }


  if(user){
    return children
}

    return (
       
<Navigate to="/login" replace={true}></Navigate>
       
    )

}

export default PrivateRoute;