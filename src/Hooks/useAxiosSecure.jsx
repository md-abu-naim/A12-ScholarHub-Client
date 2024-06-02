import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const useAxiosSecure = () => {
    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000'
    })

    const { logOutUser } = useAuth()
    const navigate = useNavigate()

    // request interceptor to add authorzation header for every secure call to the api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config
    },
        function (error) {
            return Promise.reject(error)
        })

    // interceptor 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        const status = error.response.status
        console.log('status error in the interceptor', status);
        // for 401 or 403 logout the user and move the user to the login page
        if (status === 401 || status === 403) {
            logOutUser()
                .then(result => {
                    console.log(result);
                    navigate('/login')
                })
        }
        return Promise.reject(error)
    })

    return axiosSecure;
};

export default useAxiosSecure;