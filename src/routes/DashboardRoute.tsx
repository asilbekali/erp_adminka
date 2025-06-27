import { DashboardRouteList } from "../hooks/paths"

const DashboardRoute = () => {
  console.log(DashboardRouteList);

  return (
    <div>salom</div>
    // <Routes>
    //   {DashboardRouteList.map((item: DashboardRouteType) => <Route key={item.id} path={item.paths} element={item.element} />)}
    // </Routes>
  )
}

export default DashboardRoute