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

import {useLocation} from "react-router-dom";


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

  const { hash } = useLocation();

  console.log("hash", hash)

  // console.log("pathname: ", window.location.href)
  // console.log("type : ", '/' + type)
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
          {/* <p className="title">MAIN</p>
          <Link to="/#nass" style={{ textDecoration: "none" }}>
          <li>
            
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p> */}
         <Link smooth to="/#Setting-up-environment" style={{ textDecoration: "none" }}>
            <li>
            
              <span>Setting up environment</span>
            </li>
          </Link>
          <Link to="/#node" style={{ textDecoration: "none"}}>
            <li className="active">
            
              <span>Install Node.js and NPM</span>
            </li>
          </Link>
          <Link to="/#expo" style={{ textDecoration: "none" }}>
          <li>
          
            <span>Install Expo CLI</span>
          </li>
          </Link>
          <Link to="/#firebase-project" style={{ textDecoration: "none" }}>
          <li>
          
            <span>Firebase Project</span>
          </li>
          </Link>
          <Link to="/#firebase-config" style={{ textDecoration: "none" }}>
            <li>
            
            <span>Firebase config file</span>
          </li>
          </Link>
          <Link smooth to="/#Driver-App-Translation" style={{ textDecoration: "none" }}>
            <li>
            
            <span>Driver App Translation</span>
          </li>
          </Link>
          <Link smooth to="/#places" style={{ textDecoration: "none" }}>
            <li>
            
            <span>Places API key</span>
          </li>
          </Link>
          <Link smooth to="/#apiKey" style={{ textDecoration: "none" }}>
            <li>
            
            <span>Generate an API key</span>
          </li>
          </Link>
          <Link smooth to="/#app-name" style={{ textDecoration: "none" }}>
            <li>
            
            <span>Change app name</span>
          </li>
          </Link>
          <Link smooth to="/#app-logo" style={{ textDecoration: "none" }}>
            <li>
            
            <span>Change app logo</span>
          </li>
          </Link>
          <Link smooth to="/#currency" style={{ textDecoration: "none" }}>
            <li>
            
            <span>Change app currency</span>
          </li>
          </Link>
          <Link smooth to="/#translation" style={{ textDecoration: "none" }}>
            <li>
            
            <span>Translation</span>
          </li>
          </Link>
          <Link smooth to="/#screens" style={{ textDecoration: "none" }}>
            <li>
            
            <span><b>SCREEN</b></span>
          </li>
          </Link>
          <Link smooth to="/#home" style={{ textDecoration: "none" }}>
            <li>
            
            <span>Home Screen</span>
          </li>
          </Link>
          <Link smooth to="/#Search" style={{ textDecoration: "none" }}>
            <li>
            
            <span>Search Component</span>
          </li>
          </Link>
          <Link smooth to="/#categories" style={{ textDecoration: "none" }}>
            <li>
            
            <span>Categories Component</span>
          </li>
          </Link>
          <Link smooth to="/#Restaurants-Items" style={{ textDecoration: "none" }}>
            <li>
            
            <span>Restaurants Items </span>
          </li>
          </Link>
          <Link smooth to="/#restaurant-details" style={{ textDecoration: "none" }}>
            <li>
            
            <span>Restaurant Details </span>
          </li>
          </Link>
          <Link smooth to="/#menu-items" style={{ textDecoration: "none" }}>
            <li>
            
            <span>Menu Items Component</span>
          </li>
          </Link>
          <Link smooth to="/#customize-colors" style={{ textDecoration: "none" }}>
            <li>
            
            <span>Customize Colors</span>
          </li>
          </Link>
          <Link smooth to="/#add-driver" style={{ textDecoration: "none" }}>
            <li>
            
            <span>Add New Driver</span>
          </li>
          </Link>


          {/* <p className="title">USER</p>
          <Link to="/users/profile" style={{ textDecoration: "none" }}>
          <li>
          
            <span>Profile</span>
          </li>
          </Link>
          <li onClick={signOutUser}>
          
            <span>Logout</span>
          </li> */}
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;