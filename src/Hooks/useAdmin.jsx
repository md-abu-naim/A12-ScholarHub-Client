import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading ,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            return res.data?.admin;
        }
    })
    return [isAdmin, isLoading]
};

export default useAdmin;

// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";


// const useAdmin = () => {
//     const { user } = useAuth();
//     const axiosSecure = useAxiosSecure();
//     const { data: isAdmin, isPending: isAdminLoading } = useQuery({
//         queryKey: [user?.email, 'isAdmin'],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/admin/${user?.email}`);
//             // console.log(res.data);
//             return res.data?.admin;
//         }
//     })
//     return [isAdmin, isAdminLoading]
// };

// export default useAdmin;