import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CategoryIcon from '@mui/icons-material/Category';
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
//import { DarkModeContext } from "../../context/darkModeContext";
//import { useContext } from "react";
import { RestaurantContext } from "../../context/RestaurantContext";
import { useContext, useState } from "react";


import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

import { Button, Menu } from 'antd';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const Sidebar = () => {
 // const { dispatch } = useContext(DarkModeContext);
const {currentRestaurant} = useContext(RestaurantContext)
const [collapsed, setCollapsed] = useState(false);
 
 const signOutUser = () => {
  
  signOut(auth)
  .then(()=>{
       
      //navigation.replace('SignScreen') // Efface tout
      //navigation.navigate('SignIn')
     // window.location.reload();

  })

  .catch((err)=>console.log(err.code))
   
}

const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];
  return (
    <div className="sidebar">
      <div className="top">
         <Link to="/" style={{ textDecoration: "none" }}>
           <span className="logo">Good Food</span>
         </Link>
       </div>
    <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        // theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  
    // <div className="sidebar">
    //   <div className="top">
    //     <Link to="/" style={{ textDecoration: "none" }}>
    //       <span className="logo">Good Food</span>
    //     </Link>
    //   </div>
    //   <hr />
    //   <div className="center">
    //     <ul>
    //       <p className="title">MAIN</p>
    //       <Link to="/" style={{ textDecoration: "none" }}>
    //       <li>
    //         <DashboardIcon className="icon" />
    //         <span>Dashboard</span>
    //       </li>
    //       </Link>
    //       <p className="title">LISTS</p>
    //      {!currentRestaurant && <Link to="/users" style={{ textDecoration: "none" }}>
    //         <li>
    //           <PersonOutlineIcon className="icon" />
    //           <span>Users</span>
    //         </li>
    //       </Link>}
    //       <Link to="/products" style={{ textDecoration: "none" }}>
    //         <li>
    //           <StoreIcon className="icon" />
    //           <span>Menus</span>
    //         </li>
    //       </Link>
    //       <Link to="/orders" style={{ textDecoration: "none" }}>
    //       <li>
    //         <CreditCardIcon className="icon" />
    //         <span>Orders</span>
    //       </li>
    //       </Link>
    //       {!currentRestaurant && <Link to="/drivers" style={{ textDecoration: "none" }}>
    //       <li>
    //         <LocalShippingIcon className="icon" />
    //         <span>Drivers</span>
    //       </li>
    //       </Link>}
    //       {!currentRestaurant && <Link to="/restaurants" style={{ textDecoration: "none" }}>
    //         <li>
    //         <RestaurantIcon className="icon" />
    //         <span>Restaurants</span>
    //       </li>
    //       </Link>}
    //       <Link to="/categories" style={{ textDecoration: "none" }}>
    //         <li>
    //         <CategoryIcon className="icon" />
    //         <span>Categories</span>
    //       </li>
    //       </Link>
           
    //       <p className="title">USER</p>
    //       <Link to="/users/profile" style={{ textDecoration: "none" }}>
    //       <li>
    //         <AccountCircleOutlinedIcon className="icon" />
    //         <span>Profile</span>
    //       </li>
    //       </Link>
    //       <li onClick={signOutUser}>
    //         <ExitToAppIcon className="icon" />
    //         <span>Logout</span>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="bottom">
    //     <div
    //       className="colorOption"
        
    //     ></div>
    //     <div
    //       className="colorOption"
         
    //     ></div>
    //   </div>
    // </div>
  );
};

export default Sidebar;