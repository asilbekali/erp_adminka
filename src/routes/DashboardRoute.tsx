import { Route, Routes } from "react-router-dom"
import { paths } from "../hooks/paths"
import { HomeDash } from "../pages/Dashboard"

const DashboardRoute = () => {
  return (
    <Routes>
        <Route path={paths.home} element={<HomeDash/>} />
    </Routes>
  )
}

export default DashboardRoute