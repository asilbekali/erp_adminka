import { Route, Routes } from "react-router-dom"
import { paths } from "../hooks/paths"
import { Home, Signin } from "../pages/Auth"

const AuthRoute = () => {
    return (
        <Routes>
            <Route path={paths.home} element={<Home />} />
            <Route path={paths.sigin} element={<Signin />} />
        </Routes>
    )
}

export default AuthRoute