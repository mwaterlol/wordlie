import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { axios } from "@/_core/api";
// import { useFetchUser } from '@/domains/user/hooks/useFetchUser'

export const ResponseInterceptor = () => {
    const navigate = useNavigate();

    // const { fetchUser, removeUserDate } = useFetchUser()
    const interceptorId = useRef<any>(null);

    useEffect(() => {
        interceptorId.current = axios.interceptors.response.use(
            undefined,
            (error) => {
                switch (error.response?.status) {
                    case 401:
                        Cookies.remove("jwtToken");
                        navigate("/");
                        navigate(0);
                        break;
                    // case 200:
                    //   fetchUser().catch(removeUserDate)
                    //   break

                    default:
                        return Promise.reject(error);
                }
            }
        );
    }, [navigate]);

    return null;
};
