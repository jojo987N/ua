import OrderDetails from "./modules/OrderDetails";
import Orders from "./modules/Orders";
//import {Routes, Route} from 'react-router-dom' 
import './index.css';


import { Layout, Image } from "antd";
import SideMenu from "./components/SideMenu";
//import { MapComponent } from "./components/MapComponent";
//import SideMenu from "../src/components/SideMenu";
//import AppRoutes from "./components/AppRoutes";
import "antd/dist/antd.min.css"
 

const { Sider, Content, Footer } = Layout;


function Restaurant({path}) {
  return (
      
      <Layout>
        <Sider style={{ height: "100vh", backgroundColor: "white" }}>
          {/* <Image
            src={require("./assets/images/Uber-Eats.jpg")}
            preview={false}
          /> */}
           <Image
            src={require("./assets/images/good-food.png")}
            preview={false}
          /> 
          <SideMenu />
        </Sider>
        <Layout>
          <Content>
            {path === "/" &&  <Orders />}
            {path === "orders/:id" &&  <OrderDetails />}
             
            {/* <AppRoutes /> */}
          {/* <Routes>
            <Route path="" element={<Orders />} />
            <Route path="orders/:id" element={<OrderDetails />} />
          </Routes> */}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Uber Eats Restaurant Dashboard ©2022
          </Footer>
        </Layout>
      </Layout>
   );
}

export default Restaurant;






 


