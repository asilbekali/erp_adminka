import toast, { Toaster } from "react-hot-toast";
import type { ValuType } from "../components/SigninForm"
import { inctanse } from "../hooks/inctanse";
import { type Dispatch, type SetStateAction } from "react";



export const Login = (data: ValuType, setLoading: Dispatch<SetStateAction<boolean>>, setToken: Dispatch<SetStateAction<boolean>>,) => {
    inctanse.post("/user/login", data).then((res) => {
        const data = res.data;
        if (!data.accessToken) {
            throw new Error(data.message || "An error occurred!");
        }
        toast.success("Login successful!");
        setTimeout(() => {
            setToken(true);
        }, 1000)
    })
        .catch((error) => {
            toast.error(error.response?.data?.message || "User not found!");
        })
        .finally(() => {
            setTimeout(() => {
                setLoading(false);
            }, 750)
        });


    return <Toaster position="top-center" reverseOrder={false} />
}