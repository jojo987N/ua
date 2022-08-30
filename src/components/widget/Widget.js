import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { decryptData } from "../../utils";
import { APP_CONSTANT, currency, language } from "../../globals";

const Widget = ({ type, totalUsers, totalOrders, totalDrivers, earnings }) => {
  let data;

  switch (type) {
    case APP_CONSTANT.TYPE.USERS:
      data = {
        title: APP_CONSTANT.TEXT.USERS,

        number: totalUsers,
        link: APP_CONSTANT.TEXT.SEE_ALL_USERS,
        icon: <PersonOutlinedIcon className="icon" style={styles.userIcon} />,
      };
      break;
    case APP_CONSTANT.TYPE.ORDERS:
      data = {
        title: APP_CONSTANT.TEXT.ORDERS,

        number: totalOrders,
        link: APP_CONSTANT.TEXT.VIEW_ALL_ORDERS,
        icon: (
          <ShoppingCartOutlinedIcon className="icon" style={styles.orderIcon} />
        ),
      };
      break;
    case APP_CONSTANT.TYPE.EARNING:
      data = {
        title: APP_CONSTANT.TEXT.EARNINGS,

        number: earnings.toLocaleString(language, {
          style: APP_CONSTANT.STYLE.CURRENCY,
          currency: currency,
        }),
        link: APP_CONSTANT.TEXT.VIEW_NET_EARNINGS,
        icon: (
          <MonetizationOnOutlinedIcon className="icon" style={styles.earning} />
        ),
      };
      break;
    case APP_CONSTANT.TYPE.DRIVER:
      data = {
        title: APP_CONSTANT.TEXT.DRIVERS,

        number: totalDrivers,
        link: APP_CONSTANT.TEXT.SEE_ALL_DRIVERS,
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={styles.driverIcon}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.number}</span>

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
    color: "green",
  },
  driverIcon: {
    backgroundColor: "rgba(128, 0, 128, 0.2)",
    color: "purple",
  },
};
export default Widget;
