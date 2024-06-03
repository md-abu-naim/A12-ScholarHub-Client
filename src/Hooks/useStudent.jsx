import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useStudent = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isStudent, isPending: isStudentLoading } = useQuery({
        queryKey: [user?.email, 'isStudent'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/student/${user.email}`);
            return res.data?.student;
        }
    })
    return [isStudent, isStudentLoading]
};

export default useStudent;