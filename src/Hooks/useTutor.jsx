import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useTutor = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isTutor, isLoading } = useQuery({
        queryKey: ['isTutor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/tutor/${user.email}`);
            return res.data?.tutor;
        }
    })
    return [isTutor, isLoading]
};

export default useTutor;