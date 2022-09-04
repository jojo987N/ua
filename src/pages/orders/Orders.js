import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./orders.scss";
import { useEffect, useState } from "react";
import { APP_CONSTANT } from "../../globals";
import { getOrdersFromFirebase } from "../../utils";


const Orders = () => {
  const [orders, setOrders] = useState()
  useEffect(() => {
    getOrdersFromFirebase().then(orders => setOrders(orders))
  }, [])
  return (
    <div className="orders">
      <Sidebar />
      <div className="ordersContainer">
        <Navbar />
        <div className="title">
          {APP_CONSTANT.TEXT.ORDERS}
        </div>
        <div className="content">

          <Datatable rows={orders} columns={orderColu} />
        </div>

      </div>
    </div>
  );
};

export default Orders;