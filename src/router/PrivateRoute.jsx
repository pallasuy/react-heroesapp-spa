import { useContext, useEffect } from "react"
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate, useLocation } from "react-router";

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext(AuthContext);

    const {pathname,search} = useLocation();

    const effect = useEffect(()=>{
        const lastPath = pathname+search;            
        localStorage.setItem('lastpath',lastPath);
    },[search,pathname]);
    
    
    

    return (logged) ? children : <Navigate to={"/login"} />
}
