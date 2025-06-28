import { type Dispatch, type SetStateAction } from "react";
import { toast } from "react-hot-toast";
import { inctanse } from "../hooks/inctanse";
import type { ValueType } from "../components/SigninForm";

export const Login = (data: ValueType, setIsLoading: Dispatch<SetStateAction<boolean>>, setToken: Dispatch<SetStateAction<string | null>>, setCookie: any) => {
    inctanse.post("/user/login", data).then(data => {
        setIsLoading(false)
        toast.success("Xush kelibsiz")
        setCookie('token', data.data.accessToken)
        setTimeout(() => {
            setToken(data.data.accessToken)
            location.pathname = "/"
        }, 800)
    }).catch((err) => {
        setIsLoading(false)
        if (err?.response?.status == 400) {
            toast.error("Foydalanuvchi topilmadi!")
        }
        else {
            toast.error("Xatolik bor")
        }
    })
    return ""
}