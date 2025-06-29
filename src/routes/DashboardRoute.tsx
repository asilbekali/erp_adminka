import { Route, Routes } from "react-router-dom"
import { DashboardRouteList, paths } from "../hooks/paths"
import type { DashboardRouteType } from "../types/DashboardRouteType"

const DashboardRoute = () => {
  return (
    <Routes>
      {DashboardRouteList.map((item: DashboardRouteType) => <Route key={item.id} path={item.paths} element={item.element} />)}
    </Routes>
  )
}

export default DashboardRoute