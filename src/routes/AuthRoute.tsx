import { Route, Routes } from "react-router-dom"
import { paths } from "../hooks/paths"
import { Home, Signin } from "../pages/Auth"

const AuthRoute = () => {
    return (
        <Routes>
            <Route path={paths.sigin} element={<Signin />} />
            <Route path={paths.home} element={<Home />} />
        </Routes>
    )
}

export default AuthRoute