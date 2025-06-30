import { GroupCreate, GroupMore, Groups, Home, Major, MajorCreate, MajorMore, Students, Teachers } from "../pages/Dashboard"
import { TeamOutlined, UngroupOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import NotFound from "../pages/Dashboard/NotFound";
import { NavLink } from "react-router-dom";

export const path = {
    home: "/",
    singIn: "/sign-in",
    major: "/major",
    majorCrud: "/major/create",
    majorMore: "/major/:id",
    majorMoreCreateGroup: "/major/:id/create-group",
    majorEdit: "/major/:id/edit",
    groups: "/groups",
    groupsCreate: "/groups/create",
    groupsMore: "/groups/:groupId",
    groupsEdit: "/groups/:groupId/edit",
    students: "/students",
    teachers: "/teachers",
    notFound: "*"
}

export const DashboardRouteList = [
    {
        id: 1,
        path: path.home,
        element: <Home />
    },
    {
        id: 2,
        path: path.major,
        element: <Major />
    },
    {
        id: 3,
        path: path.groups,
        element: <Groups />
    },
    {
        id: 4,
        path: path.students,
        element: <Students />
    },
    {
        id: 5,
        path: path.teachers,
        element: <Teachers />
    },
    {
        id: 6,
        path: path.notFound,
        element: <NotFound />
    },
    {
        id: 7,
        path: path.majorCrud,
        element: <MajorCreate />
    },
    {
        id: 8,
        path: path.majorMore,
        element: <MajorMore />
    },
    {
        id: 9,
        path: path.majorEdit,
        element: <MajorCreate />
    },
    {
        id: 10,
        path: path.majorMoreCreateGroup,
        element: <GroupCreate />
    },
    {
        id: 11,
        path: path.groupsCreate,
        element: <GroupCreate />
    },
    {
        id: 12,
        path: path.groupsMore,
        element: <GroupMore />
    },
    {
        id: 13,
        path: path.groupsEdit,
        element: <GroupCreate />
    },
]
export const DashboardNavList = [
    {
        key: 1,
        label: <NavLink to={path.major}>Yo'nalishlar</NavLink>,
        icon: <UnorderedListOutlined />,
    },
    {
        key: 2,
        label: <NavLink to={path.groups}>Guruxlar</NavLink>,
        icon: <UngroupOutlined />
    },
    {
        key: 3,
        label: <NavLink to={path.students}>O'quvchilar</NavLink>,
        icon: <TeamOutlined />
    },
    {
        key: 4,
        label: <NavLink to={path.teachers}>Ustozlar</NavLink>,
        icon: <UserOutlined />
    },
]