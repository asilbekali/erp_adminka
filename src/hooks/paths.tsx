import { TeamOutlined, UngroupOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons"
import { Groups, HomeDash, Major, Students, Teachers } from "../pages/Dashboard"

export const paths = {
    home: "/",
    sigin: "/sign-in",
    teachers: "/teachers",
    students: "/students",
    groups: "/groups",
    major: "/major"

}


export const DashboardRouteList = [
    {
        id: 1,
        paths: paths.home,
        element: <HomeDash />
    },
    {
        id: 2,
        paths: paths.major,
        element: <Major />
    },
    {
        id: 3,
        paths: paths.teachers,
        element: <Teachers />
    },
    {
        id: 4,
        paths: paths.students,
        element: <Students />
    },
    {
        id: 5,
        paths: paths.groups,
        element: <Groups />
    },
]


export const DashboardNavList = [
    {
        id: 1,
        titile: "Yo'nalishlar",
        icon: <UnorderedListOutlined />
    },
    {
        id: 2,
        titile: "Guruhlar",
        icon: <UngroupOutlined />
    },
    {
        id: 3,
        titile: "O'qivchilar",
        icon: <TeamOutlined />
    },
    {
        id: 4,
        titile: "Ustozlar",
        icon: <UserOutlined />
    },


]