
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import {Link} from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";


const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
     <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
        <span className="logo">lamadmin</span>
        </Link>
     </div>
     <hr/>
     <div className="center">
        <ul>
            <p className="title">MAIN</p>
            <li>
                <DashboardIcon className="icon"/>
                <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
                <PersonOutlineOutlinedIcon className="icon"/>
                <span>Users</span>
               
            </li>
            </Link>
            <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
                <StoreMallDirectoryIcon className="icon"/>
                <span>Products</span>
            </li>
            </Link>
            <li>
                <CreditCardIcon className="icon"/>
                <span>Orders</span>
            </li>
            <li>
                <LocalShippingIcon className="icon"/>
                <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
                <AssessmentIcon className="icon"/>
                <span>Stats</span>
            </li>
            <li>
                <NotificationsNoneIcon className="icon"/>
                <span>Notification</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
            <SettingsSystemDaydreamIcon className="icon"/>
                <span>System Health</span>
            </li>
            <li>
                <PsychologyIcon className="icon"/>
                <span>Logs</span>
            </li>
            <li>
                <SettingsApplicationsIcon className="icon"/>
                <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
                <AccountCircleIcon className="icon"/>
                <span>Profile</span>
            </li>
            <li>
                <ExitToAppIcon className="icon"/>
                <span>Logout</span>
            </li>
        </ul>
     </div>
     <div className="bottom">
        <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>

     </div>
    </div>
  );
};

export default Sidebar;