import axios from 'axios'

const useAxiosCommon = () => {
    const axiosCommon = axios.create({
        baseURL: 'http://localhost:5000'
    })
    return axiosCommon;
};

export default useAxiosCommon;