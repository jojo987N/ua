import { Menu } from "antd";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
//import { useRestaurantContext } from "../../contexts/RestaurantContext";

const SideMenu = () => {
  const navigate = useNavigate();
 // const { restaurant } = useRestaurantContext();

  const onClick = async (menuItem) => {
    if (menuItem.key === "signOut") {
     // await Auth.signOut();
      signOut(auth)
      //window.location.reload();
    } else {
      navigate(menuItem.key);
    }
  };

  const mainMenuItems = [
    {
      key: "/",
      label: "Orders",
    },
    {
     // key: "menu",
     key: "/products",
      label: "Menu",
    },
    {
      key: "order-history",
      label: "Order History",
    },
  ];

  const menuItems = [
    //...(restaurant ? mainMenuItems : []),
    ...mainMenuItems,
    {
      key: "settings",
      label: "Settings",
    },
    {
      key: "signOut",
      label: "Sign out",
      danger: "true",
    },
  ];

  return (
    <>
      {/* {restaurant && <h4>{restaurant.name}</h4>} */}
      <Menu items={menuItems} onClick={onClick} />
    </>
  );
};

export default SideMenu;
