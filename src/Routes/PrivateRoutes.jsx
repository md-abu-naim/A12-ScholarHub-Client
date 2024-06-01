import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { PropagateLoader} from 'react-spinners'

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <PropagateLoader color="#36d7b7" /> 

    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={location.pathname} replace={true}></Navigate>
};

export default PrivateRoutes;