import { TeamOutlined, UngroupOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons"
import { Groups, Major, Students, Teachers } from "../pages/Dashboard"
import Home from "../pages/Dashboard/Home"

export const paths = {
    home: "/",
    sigin: "/sigin-in",
    teachers: "/teachers",
    students: "/students",
    groups: "/groups",
    major: "/major"

}


export const DashboardRouteList = [
    {
        id: 1,
        paths: paths.home,
        element: <Home />
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
        key: "1",
        label: "Yo'nalishlar",
        icon: <UnorderedListOutlined />,
    },
    {
        key: "2",
        label: "Guruhlar",
        icon: <UngroupOutlined />,
    },
    {
        key: "3",
        label: "O'quvchilar",
        icon: <TeamOutlined />,
    },
    {
        key: "4",
        label: "Ustozlar",
        icon: <UserOutlined />,
    },
];