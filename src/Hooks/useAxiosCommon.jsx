import axios from 'axios'

const useAxiosCommon = () => {
    const axiosCommon = axios.create({
        baseURL: '/SassionCard.json'
    })
    return axiosCommon;
};

export default useAxiosCommon;