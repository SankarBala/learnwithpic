import {
    IoSpeedometerOutline,
    BsFileEarmarkText,
    FaCogs,
    AiOutlinePushpin,
    IoPricetagsOutline,
    BsXDiamond,
    FaUsers
} from 'react-icons/all';


const adminNav = [
    { to: '/admin/', exact: true, name: 'Dashboard', icon: IoSpeedometerOutline },
    { to: '/admin/posts/', exact: true, name: 'Posts', icon: AiOutlinePushpin },
    { to: '/admin/categories/', exact: true, name: 'Categories', icon: BsXDiamond },
    { to: '/admin/tags/', exact: true, name: 'Tags', icon: IoPricetagsOutline },
    { to: '/admin/pages/', exact: true, name: 'Pages', icon: BsFileEarmarkText },
    { to: '/admin/users/', exact: true, name: 'Users', icon: FaUsers },
    { to: '/admin/settings/', exact: true, name: 'Settings', icon: FaCogs },
];


const nav = [
    { to: "/", exact: true, name: "Home" },
    { to: "/services", exact: true, name: "Services" },
    { to: "/portfolios", exact: true, name: "Portfolios" },
    { to: "/qualifications", exact: true, name: "Qulifications" },
    { to: "/photos", exact: true, name: "Photos" },
    { to: "/contact", exact: true, name: "Contact" },
    { to: "/login", exact: true, name: "Login" },
    { to: "/admin", exact: true, name: "Admin" },
];



export { adminNav, nav };