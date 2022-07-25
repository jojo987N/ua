import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
//import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import AccountMenu from "../accountMenu/AccountMenu";
//import { DarkModeContext } from "../../context/darkModeContext";
//import { useContext } from "react";
import { Button, Modal, Space } from 'antd';
import { useEffect } from "react";


const Navbar = () => {
  //const { dispatch } = useContext(DarkModeContext);

  const countDown = () => {
    let secondsToGo = 30;
  
    const modal = Modal.success({
      title: 'This is a notification message',
      content: `This modal will be destroyed after ${secondsToGo} second.`,
    });
  
    // const timer = setInterval(() => {
    //   secondsToGo -= 1;
    //   modal.update({
    //     content: `This modal will be destroyed after ${secondsToGo} second.`,
    //   });
    // }, 1000);
  
    setTimeout(() => {
      // clearInterval(timer);
      modal.destroy();
    }, secondsToGo * 1000);
  };

  useEffect(()=>{
    countDown()
  }, [])

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          {/* <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div> */}
          <div className="item">
            {/* <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            /> */}
          </div>
          <div className="item">
            {/* <FullscreenExitOutlinedIcon className="icon" /> */}
            <AccountMenu />
          </div>
           <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
            {/* <Button onClick={countDown}>Open modal to close in 5s</Button> */}
          </div>
        {/*  <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div> */}
          {/* <div className="item">
            <ListOutlinedIcon className="icon" />
          </div> */}
          <div className="item">
            {/* <img
              src="https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png"
              alt=""
              className="avatar"
            /> */}
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;