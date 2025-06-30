import { Route, Routes } from "react-router-dom"
import { Home, Signin } from "../pages/Auth"
import { path } from "../hooks/paths"

const AuthRoute = () => {
    return (
        <Routes>
            <Route path={path.home} element={<Home />} />
            <Route path={path.singIn} element={<Signin />} />
        </Routes>
    )
}

export default AuthRoute