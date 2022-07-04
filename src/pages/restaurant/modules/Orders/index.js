import { Card, Table, Tag } from "antd";
//import orders from "../../assets/data/orders.json"
import { useNavigate } from "react-router-dom";
import {getOrdersFromFirebase} from '../../config/firebase'
import {useContext, useEffect, useState} from 'react'
import {Timestamp} from 'firebase/firestore'
import { OrdersContext } from "../../../../context/OrdersContext";

const OrderStatus = {
  ACCEPTED: "ACCEPTED",
  PENDING: "pending",
  INPROGRESS: "InProgress",
  READY: "ready",
  NEW: "new"
  
}

const Orders = () => {
   
   
  //const [orders, setOrders] = useState([])
  const {ordersData} = useContext(OrdersContext)

  const navigate = useNavigate()

  const renderOrderStatus = (orderStatus) => {
    const statusToColor = {
      [OrderStatus.ACCEPTED]: "green",
      [OrderStatus.PENDING]: "orange",
      [OrderStatus.INPROGRESS]: "purple",
     [OrderStatus.READY]: "red",
     [OrderStatus.NEW]: "green",
    };

    return <Tag color={statusToColor[orderStatus]}>{orderStatus}</Tag>;
  };

  const tableColumns = [
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "id",
      render: orderId => orderId.toUpperCase()
      
    },
    // {
    //   title: "Created at",
    //   dataIndex: "createdAt",
    //   key: "createdAt",
    //   render: (createdAt)=> renderDate(createdAt)
    // },

    {
      title: "delivery Address",
      dataIndex: "User",
      key: "User",
      render: (User)=> User.address
    },
    {
      title: "Price",
      dataIndex: "User",
      key: "items",
      render: (User) => User.items.reduce((a,v)=> a + v.price, 0).toLocaleString("en", {
        style: "currency",
        currency: "USD"
    }),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: renderOrderStatus,
    },
  ];

  useEffect(()=>{

  //   getOrdersFromFirebase().then(orders =>{ 
  //     console.log(orders)
  //     setOrders(orders)
    
  // })
     

  }, [])

  return (
    // <Card title={"Orders"} style={{ margin: 20 }}>
    //   <div>
    //     <h3>Order Id</h3>
    //   </div>
    //   <div>
    //     <h3>Created At</h3>
    //   </div>
    //   <div>
    //     <h3>Status</h3>
    //   </div>
    //   {orders.map((order, index)=>{
    //     return (
    //       <div>{order.Restaurant.name}</div>
    //     )
    //   })}
    //   </Card>
    <Card title={"Orders"} style={{ margin: 20 }}>
      {/* <div>{orders[0].Restaurant.name}</div> */}

      {/* {orders.map((order, index)=>{
        return (
          <div>{order.Restaurant.name}</div>
        )
      })} */}
      <Table
        dataSource={ordersData}
        columns={tableColumns}
        rowKey="id"
        onRow={(orderItem) => ({
          onClick: () => navigate("/restaurant/orders/"+orderItem.id),
        
        })}
      />
    </Card>
  );
};


const renderDate = (createdAt) => {
   
  return (
     <div className="dateTime" >
       <div>{new Timestamp(createdAt.seconds, createdAt.nanoseconds).toDate().toLocaleDateString("es-CL")}</div>
       <div  >{new Timestamp(createdAt.seconds, createdAt.nanoseconds).toDate().toLocaleTimeString()}</div>
     </div>
  )
  // return '<div>'+new Timestamp(createdAt.seconds, row.createdAt.nanoseconds).toDate().getFullYear()+'-'+ new Timestamp(row.createdAt.seconds, row.createdAt.nanoseconds).toDate().getMonth()+'-'+new Timestamp(row.createdAt.seconds, row.createdAt.nanoseconds).toDate().getDay()
  // +'</div>'+ new Timestamp(row.createdAt.seconds, row.createdAt.nanoseconds).toDate().getHours()+'-'+ new Timestamp(row.createdAt.seconds, row.createdAt.nanoseconds).toDate().getMinutes()+'-'+new Timestamp(row.createdAt.seconds, row.createdAt.nanoseconds).toDate().getSeconds()
 
}

export default Orders;
