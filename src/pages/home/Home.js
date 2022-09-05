 import Sidebar from "../../components/sidebar/Sidebar";
 import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
//  import Widget from "../../components/widget/Widget";
//  import Featured from "../../components/featured/Featured";
//  import Chart from "../../components/chart/Chart";
//  import Table from "../../components/table/Table";
// import List from "../../components/table/Table";
import { APP_CONSTANT } from "../../globals";
import Transactions from "../../components/transactions/Transactions";
import Sidenav from "../../components/sidenav/Sidenav";

const Home = () => {
  return (
    
    <div className="home">
      <Sidebar />
      
      <div className="homeContainer">
        <Navbar />
        {/* <div className="widgets">
           <Widget type={APP_CONSTANT.TYPE.USERS} />
           <Widget type={APP_CONSTANT.TYPE.ORDERS} />
          <Widget type={APP_CONSTANT.TYPE.EARNINGS} />
          <Widget type={APP_CONSTANT.TYPE.DRIVERS} />
        </div> */}
        {/* <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div> */}
        <div className="listContainer">
          <div className="listTitle">{APP_CONSTANT.TEXT.TRANSACTIONS}</div>
          {/* <Table1 /> */}
          {/* <List /> */}
          <Transactions />
        </div>
      </div>
    </div>
  );
};

export default Home;