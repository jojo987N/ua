import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountMenu from "../accountMenu/AccountMenu";
import {Modal, notification } from "antd";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const openNotification = () => {
  notification.open({
    message: "Notification",
    description:
      "This is the content of notification.",
    className: "custom-class",
    style: {
      width: 600,
    },
  });
};

export const countDown = () => {
  let secondsToGo = 30;
 setTimeout(() => {
    const modal = Modal.success({
      title: "This is a notification message",
      content: `This modal will be destroyed after ${secondsToGo} second.`,
    });
  }, secondsToGo * 1000);
};

const Navbar = () => {
  let location = useLocation();
 useEffect(() => {}, []);
 return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item"></div>
          <div className="item">
            <AccountMenu />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon
              className="icon"
              onClick={openNotification}
            />
           <div className="counter">1</div>
          </div>
          <div className="item"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
