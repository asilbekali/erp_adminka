import { createContext, type FC, type ReactNode, useState } from "react";
import type { ContextType } from "../types/ContextType";

export const Context = createContext<ContextType>({
    token: false,
    setToken: () => null
})



export const GlobalContext: FC<{ children: ReactNode }> = ({ children }) => {
    const isToken = localStorage.getItem("token")
    const [token, setToken] = useState(isToken && JSON.parse(isToken) || false)
    return <Context.Provider value={{ setToken, token }}>{children}</Context.Provider>
}