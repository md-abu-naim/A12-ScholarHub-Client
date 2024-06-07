import { PropagateLoader } from "react-spinners";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [isAdmin, isLoading] = useAdmin()
    
    if(loading || isLoading){
        return <PropagateLoader color="#36d7b7" />
    }

    if(user && isAdmin){
        return children
    }

    return <Navigate to='/' state={location.pathname} replace={true}></Navigate>
};

export default AdminRoute;