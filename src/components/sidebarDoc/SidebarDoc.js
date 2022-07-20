import "./sidebarDoc.scss";
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
import { useContext } from "react";

const SidebarDoc = () => {
 // const { dispatch } = useContext(DarkModeContext);
const {currentRestaurant} = useContext(RestaurantContext)
 
 const signOutUser = () => {
  
  signOut(auth)
  .then(()=>{
       
      //navigation.replace('SignScreen') // Efface tout
      //navigation.navigate('SignIn')
     // window.location.reload();

  })

  .catch((err)=>console.log(err.code))
   
}
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
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
             
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
         {!currentRestaurant && <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
               <span>Users</span>
            </li>
          </Link>}
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
               <span>Menus</span>
            </li>
          </Link>
          <Link to="/orders" style={{ textDecoration: "none" }}>
          <li>
             <span>Orders</span>
          </li>
          </Link>
          {!currentRestaurant && <Link to="/drivers" style={{ textDecoration: "none" }}>
          <li>
             <span>Drivers</span>
          </li>
          </Link>}
          {!currentRestaurant && <Link to="/restaurants" style={{ textDecoration: "none" }}>
            <li>
             <span>Restaurants</span>
          </li>
          </Link>}
          <Link to="/categories" style={{ textDecoration: "none" }}>
            <li>
             <span>Categories</span>
          </li>
          </Link>
          <p className="title">USEFUL</p>
          <li>
             <span>Stats</span>
          </li>
          <li>
             <span>Notifications</span>
          </li>
          <p className="title">STATUS</p>
          <li>
             <span>Confirmed</span>
          </li>
          <li>
             <span>Cooking</span>
          </li>
          <li>
             <span>Ready For Pickup</span>
          </li>
          <li>
             <span>Picked Up</span>
          </li>
          <p className="title">USER</p>
          <Link to="/users/profile" style={{ textDecoration: "none" }}>
          <li>
             <span>Profile</span>
          </li>
          </Link>
          <li onClick={signOutUser}>
             <span>Logout</span>
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

export default SidebarDoc;