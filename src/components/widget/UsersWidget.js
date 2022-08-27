import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { decryptData} from "../../utils";
import { APP_CONSTANT, currency, language } from "../../globals";


const Widget = ({ type, totalUsers, totalOrders, totalDrivers, earnings}) => {
  let data;
  data = {
    title: APP_CONSTANT.TEXT.USERS,
    //isMoney: false,
    number: totalUsers,
    link: APP_CONSTANT.TEXT.SEE_ALL_USERS,
    icon: (
      <PersonOutlinedIcon
        className="icon"
        style={styles.userIcon}
      />
    ),
  };

  

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {/* {data.isMoney && "$"} {amount} */}
          {data.number}
          
        </span>
        {/* <Link to="/users" style={{ textDecoration: "none" }}> */}

        <Link to={`/${type}s`} style={{ textDecoration: "none" }}>
          
          <span className="link">{data.link}</span>
        </Link>
        
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

const styles = {
  userIcon: {
    color: "crimson",
    backgroundColor: "rgba(255, 0, 0, 0.2)",
  },
  orderIcon: {
    backgroundColor: "rgba(218, 165, 32, 0.2)",
    color: "goldenrod",
  },
  earning: { 
    backgroundColor: "rgba(0, 128, 0, 0.2)", 
    color: "green" 
  },
  driverIcon: {
    backgroundColor: "rgba(128, 0, 128, 0.2)",
    color: "purple",
  }
}
export default Widget;

