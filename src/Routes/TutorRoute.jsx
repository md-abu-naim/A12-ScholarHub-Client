import { PropagateLoader } from "react-spinners";
import useAuth from "../Hooks/useAuth";
import useTutor from "../Hooks/useTutor";
import { Navigate } from "react-router-dom";

const TutorRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [isTutor, isLoading] = useTutor()
    
    if(loading || isLoading){
        return <PropagateLoader color="#36d7b7" />
    }

    if(user && isTutor){
        return children
    }

    return <Navigate to='/' state={location.pathname} replace={true}></Navigate>
};

export default TutorRoute;