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
import {useNavigate, useParams } from "react-router-dom";
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
import { HashLink as Link } from 'react-router-hash-link';

// import { SelectedKeyContext } from "../../context/SelectedKey";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const Sidebar = ({ type }) => {


  console.log("type : ", '/' + type)
  // const { dispatch } = useContext(DarkModeContext);
  const { currentRestaurant } = useContext(RestaurantContext)
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate()
  // const {selectedKey, setSelectedKey} = useContext(SelectedKeyContext)






  const signOutUser = () => {

    signOut(auth)
      .then(() => {

        //navigation.replace('SignScreen') // Efface tout
        //navigation.navigate('SignIn')
        // window.location.reload();

      })

      .catch((err) => console.log(err.code))

  }

  const items = [
    // getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Dashboard', '/', <DashboardIcon />),
    getItem('Setting up Environment', 'sub1', <StoreIcon className="icon" />),
    getItem('Install Node.js', 'sub2', <StoreIcon className="icon" />),
    getItem('Install the Expo CLI', 'sub3', <StoreIcon className="icon" />),
    getItem('Create a Firebase Project', 'sub4', <StoreIcon className="icon" />),
    getItem('Create a Firebase config file', 'sub5', <StoreIcon className="icon" />),
    getItem('Get Google Places API key', 'sub6', <StoreIcon className="icon" />),
    getItem('Change app name', 'sub7', <StoreIcon className="icon" />),
    getItem('Change app logo', 'sub7', <StoreIcon className="icon" />),
    getItem('Change app currency', 'sub7', <StoreIcon className="icon" />),
    getItem('Translation', 'sub7', <StoreIcon className="icon" />),
    getItem('Screen', 'sub', <PersonOutlineIcon className="icon" />, [
      getItem('Home Screen', 'sub7', <StoreIcon className="icon" />, [
        getItem('Search Component', 'sub7', <StoreIcon className="icon" />),
        getItem('Category Component', 'sub7', <StoreIcon className="icon" />),
        getItem('Restaurant Items component ', 'sub7', <StoreIcon className="icon" />),
      ]),
      getItem('Restaurant Details Screen', 'sub7', <StoreIcon className="icon" />, [
        getItem('Menu Items Component', 'sub7', <StoreIcon className="icon" />),
      ]),
      
    ]),
    getItem('Driver App Translation', 'sub7', <StoreIcon className="icon" />),




  ];

  const onClick = e => {
    console.log('click ', e);
    if (e.key !== "/logout")
      navigate(e.key)
    else
      signOutUser()

  };

  return (
    // <div className="sidebar">
    //   <div className="top">
    //     <Link to="/" style={{ textDecoration: "none" }}>

    //     </Link>
    //   </div>
    //   <Menu
    //     onClick={onClick}
    //     defaultSelectedKeys={['1']}
    //     defaultOpenKeys={['sub1']}
    //     mode="inline"
    //     inlineCollapsed={collapsed}
    //     items={items}
    //   />
    // </div>

    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Good Food</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/#nass" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
         <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
            <DashboardIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
            <DashboardIcon className="icon" />
              <span>Menus</span>
            </li>
          </Link>
          <Link to="/orders" style={{ textDecoration: "none" }}>
          <li>
          <DashboardIcon className="icon" />
            <span>Orders</span>
          </li>
          </Link>
          <Link to="/drivers" style={{ textDecoration: "none" }}>
          <li>
          <DashboardIcon className="icon" />
            <span>Drivers</span>
          </li>
          </Link>
          <Link to="/restaurants" style={{ textDecoration: "none" }}>
            <li>
            <DashboardIcon className="icon" />
            <span>Restaurants</span>
          </li>
          </Link>
          <Link smooth to="/#Driver-App-Translation" style={{ textDecoration: "none" }}>
            <li>
            <DashboardIcon className="icon" />
            <span>Driver App Translation</span>
          </li>
          </Link>

          <p className="title">USER</p>
          <Link to="/users/profile" style={{ textDecoration: "none" }}>
          <li>
          <DashboardIcon className="icon" />
            <span>Profile</span>
          </li>
          </Link>
          <li onClick={signOutUser}>
          <DashboardIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"

        ></div>
        <div
          className="colorOption"

        ></div>
      </div>
    </div>
  );
};

export default Sidebar;