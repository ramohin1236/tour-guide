/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Pages/Auth/AuthProvider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext)
    const location=useLocation();
    
    if(loading){
        return <progress className="progress progress-secondary w-56" value="100" max="100"></progress>
    }


    if(user){
        return children
    }
    return <Navigate to="/signin" state={{from:location}} replace></Navigate>
}

export default PrivateRoute