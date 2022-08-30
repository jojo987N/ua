 import Sidebar from "../../components/sidebar/Sidebar";
 import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
 import Widget from "../../components/widget/Widget";
 import Featured from "../../components/featured/Featured";
 import Chart from "../../components/chart/Chart";
 import Table from "../../components/table/Table";
import List from "../../components/table/Table";
// import { useContext } from "react";
//import { AuthContext } from "../../context/Auth";
import { RestaurantContext } from "../../context/RestaurantContext";
import { useContext } from "react";
import Barchart from "../../components/barChart/Barchart";
import PieChartt from "../../components/pieChart/PieChart";

const Home = () => {

  const {currentRestaurant} = useContext(RestaurantContext)

 // console.log(currentRestaurant)

  return (
    
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
           {currentRestaurant?<Widget type="confirmed-order" />:<Widget type="user" />}
           {currentRestaurant?<Widget type="cooking-order" />:<Widget type="order" />}
          <Widget type="earning" />
          {currentRestaurant?<Widget type="ready-for-pickup-order" />:<Widget type="driver" />}
        </div>
        <div className="charts">
          
          {/* <Featured /> */}
          <PieChartt />
          {/* <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} /> */}
          <Barchart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Orders</div>
          {/* <Table1 /> */}
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;