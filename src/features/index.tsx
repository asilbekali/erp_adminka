import { useContext } from "react"
import Navbar from "../modules/Navbar"
import { DashboardRoute } from "../routes"
import { Context } from "../context/Context"
import Header from "../modules/Header"

const DashboardLayout = () => {
    const { showNavbar } = useContext(Context)
    return (
        <div className="flex">
            <Navbar />
            <div className={` ${showNavbar ? "w-full" : "w-[82%]"} h-[100vh] overflow-y-auto duration-300`}>
                <Header />
                <DashboardRoute />
            </div>
        </div>
    )
}

export default DashboardLayout