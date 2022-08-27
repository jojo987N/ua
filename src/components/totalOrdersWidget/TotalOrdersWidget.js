import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { decryptData} from "../../utils";


const TotalOrdersWidget = () => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        //isMoney: false,
        number: 300,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        //isMoney: false,
        number: 350,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        //isMoney: true,
        number: (81450).toLocaleString('en', {
          style: "currency",
          currency: 'USD'
      }),
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "driver":
      data = {
        title: "DRIVERS",
        //isMoney: true,
        number: 100,
        link: "See all drivers",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
      case "confirmed-order":
        data = {
          title: "CONFIRMED",
          //isMoney: false,
          number: 20,
          link: "See all confirmed orders",
          icon: (
            <PersonOutlinedIcon
              className="icon"
              style={{
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
              }}
            />
          ),
        };
        break;
        case "cooking-order":
          data = {
            title: "COOKING",
            //isMoney: false,
            number: 20,
            link: "See all ready for pickup orders",
            icon: (
              <PersonOutlinedIcon
                className="icon"
                style={{
                  color: "crimson",
                  backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}
              />
            ),
          };
          break;
        case "ready-for-pickup-order":
          data = {
            title: "READY FOR PICKUP",
            //isMoney: false,
            number: 20,
            link: "See all ready for pickup orders",
            icon: (
              <PersonOutlinedIcon
                className="icon"
                style={{
                  color: "crimson",
                  backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}
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

export default TotalOrdersWidget;

