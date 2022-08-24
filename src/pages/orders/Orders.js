import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./orders.scss";
import {useEffect, useState } from "react";
import { APP_CONSTANT } from "../../globals";

const Orders = () => {
  const [orders, setOrders] = useState()
    useEffect(()=>{
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
      
      <DataGrid
        className="datagrid"
        rows={tab.rows}
        columns={tab.columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
        
     </div>
   </div>
 );
};

export default Orders;