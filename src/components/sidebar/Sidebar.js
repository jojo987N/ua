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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../utils";
//import { DarkModeContext } from "../../context/darkModeContext";
//import { useContext } from "react";
// import { RestaurantContext } from "../../context/RestaurantContext";
import { useState } from "react";

const Sidebar = () => {
 // const { dispatch } = useContext(DarkModeContext);
// const {currentRestaurant} = useContext(RestaurantContext)
const [clicked, setClicked] = useState(false)
 
 const signOutUser = () => {
  
  signOut(auth)
  .then(()=>{
       
      //navigation.replace('SignScreen') // Efface tout
      //navigation.navigate('SignIn')
     // window.location.reload();

  })

  .catch((err)=>console.log(err.code))
   
}
const arrow = () => setClicked(v => !v)
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Good Food</span>
        </Link>
      </div>
      <hr />
      <div className="center"> 
        <ul>
          
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
          <div className="icon-label">
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
            </div>
          </li>
          </Link>
          
         {/* <Link to="/users" style={{ textDecoration: "none" }}> */}
            <li onClick={arrow}>
              <div className="icon-label">
                <PersonOutlineIcon className="icon" />
                <span>Users</span>
              </div>
              <ArrowDropDownIcon className={clicked?"arrow180":"arrow0"}/>
              
            </li>
            <ul>
              <li>Users List</li>
            </ul>
          {/* </Link> */}
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
            <div className="icon-label">
              <StoreIcon className="icon" />
              <span>Menus</span>
              </div>
              <ArrowDropDownIcon />
            </li>
          </Link>
          <Link to="/orders" style={{ textDecoration: "none" }}>
          <li>
          <div className="icon-label">
            <CreditCardIcon className="icon" />
            <span>Orders</span>
            </div>
            <ArrowDropDownIcon />
          </li>
          </Link>
         <Link to="/drivers" style={{ textDecoration: "none" }}>
          <li>
          <div className="icon-label">
            <LocalShippingIcon className="icon" />
            <span>Drivers</span>
            </div>
            <ArrowDropDownIcon />
          </li>
          </Link>
          <Link to="/restaurants" style={{ textDecoration: "none" }}>
            <li>
            <div className="icon-label">
            <RestaurantIcon className="icon" />
            <span>Restaurants</span>
            </div>
            <ArrowDropDownIcon />
          </li>
          </Link>
          <Link to="/categories" style={{ textDecoration: "none" }}>
            <li>
            <div className="icon-label">
            <CategoryIcon className="icon" />
            <span>Categories</span>
            </div>
            <ArrowDropDownIcon />
          </li>
          </Link>
         
          
         
         
          <Link to="/users/profile" style={{ textDecoration: "none" }}>
          <li>
          <div className="icon-label">
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
            </div>
          </li>
          </Link>
          <li onClick={signOutUser}>
          <div className="icon-label">
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
        //   onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
        //   onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;