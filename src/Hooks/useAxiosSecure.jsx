// import axios from "axios";
// import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";

// const useAxiosSecure = () => {
//     const axiosSecure = axios.create({
//         baseURL: 'http://localhost:5000'
//     })

//     const { logOutUser } = useAuth()
//     const navigate = useNavigate()

//     // request interceptor to add authorzation header for every secure call to the api
//     axiosSecure.interceptors.request.use(function (config) {
//         const token = localStorage.getItem('token')
//         config.headers.authorization = `Bearer ${token}`
//         return config
//     },
//         function (error) {
//             return Promise.reject(error)
//         })

//     // interceptor 401 and 403 status
//     axiosSecure.interceptors.response.use(function (response) {
//         console.log('inside', response);
//         return response;
//     }, function (error) {
//         const status = error.response.status
//         console.log('status error in the interceptor', status);
//         // for 401 or 403 logout the user and move the user to the login page
//         if (status === 401 || status === 403) {
//             logOutUser()
//                 .then(result => {
//                     console.log(result);
//                     navigate('/signIn')
//                 })
//         }
//         return Promise.reject(error)
//     })

//     return axiosSecure;
// };

// export default useAxiosSecure;

import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    // request interceptor to add authorization header for every secure call to teh api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('token')
        // console.log('request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });


    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        // console.log('status error in the interceptor', status);
        // for 401 or 403 logout the user and move the user to the login
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/signIn');
        }
        return Promise.reject(error);
    })


    return axiosSecure;
};

export default useAxiosSecure;