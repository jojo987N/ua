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
import { Link, useNavigate, useParams } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
//import { DarkModeContext } from "../../context/darkModeContext";
//import { useContext } from "react";
import { RestaurantContext } from "../../context/RestaurantContext";
import { useContext, useState } from "react";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import SettingsIcon from '@mui/icons-material/Settings';
import PaymentsIcon from '@mui/icons-material/Payments';

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

const Sidebar = ({type}) => {


  console.log("type : ", '/'+type)
 // const { dispatch } = useContext(DarkModeContext);
const {currentRestaurant} = useContext(RestaurantContext)
const [collapsed, setCollapsed] = useState(false);
const navigate = useNavigate()

 
 

 
  
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
  // getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Dashboard', '/', <DashboardIcon />),
  // getItem('Users', '2', <PersonOutlineIcon className="icon" />),
  getItem('Users', 'sub', <PersonOutlineIcon className="icon" />, [
    getItem('Users List', '/users'),
    getItem('Add User', '/users/new'),
    
  ]),
  getItem('Menus', 'sub0', <StoreIcon className="icon" />, [
    getItem('Menus List', '/products'),
     
    
  ]),
   
  getItem('Orders', 'sub1', <CreditCardIcon className="icon" />, [
    getItem('Orders List', '/orders'),
    // getItem('In progress', '6'),
    // getItem('Completed', '7'),
    // getItem('Pending', '8'),
  ]),
  getItem('Drivers', 'sub2', <LocalShippingIcon className="icon" />, [
    getItem('Drivers List', '/drivers'),
    getItem('Add Driver', '/drivers/new'),
    // getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
  getItem('Restaurants', 'sub3', <RestaurantIcon className="icon" />, [
    getItem('Restaurants List', '/restaurants'),
    getItem('Add Restaurant', '/restaurants/new'),
    // getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
  getItem('Categories', 'sub4',  <CategoryIcon className="icon" />, [
    getItem('Categories List', '/categories'),
    getItem('Add Category', '/categories/new'),
    // getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
  getItem('Profile', 'sub5',  <AccountCircleOutlinedIcon className="icon" />, [
    getItem('Update Profile', '/users/profile'),
    // getItem('Option 10', '10'),
    // getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
 
  getItem('Earnings', '/earnings',  <MonetizationOnOutlinedIcon />),

  getItem('Transactions', '/transactions',  <PaymentsIcon />),

  getItem('Settings', '/settings',  <SettingsIcon />),

  getItem('Logout', '/logout', <ExitToAppIcon className="icon" />),
];
 
const onClick = e => {
 console.log('click ', e);
  if(e.key !== "/logout" )
  navigate(e.key)
  else
  signOutUser()
   
};

  return (
    <div className="sidebar">
      <div className="top">
         <Link to="/" style={{ textDecoration: "none" }}>
           {/* <span className="logo">Good Food</span> */}
           <img className="cellImg" style={{width: 100, height: 100}} src={require("../../assets/images/logo-100-removed.png")} alt="avatar" />

         </Link>
       </div>
    <Menu
        onClick={onClick}
        defaultSelectedKeys={['1']}
         defaultOpenKeys={['sub1']}
        // defaultOpenKeys={['/'+type]}
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