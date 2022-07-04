import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useContext, useEffect} from "react";
import { OrdersContext } from "../../context/OrdersContext";
import {Timestamp} from 'firebase/firestore'
import { useParams } from "react-router-dom";
  


const List = ({type}) => {

 // console.log(type)

  //const rows = JSON.parse(localStorage.getItem('orders'))

  //console.log(rows[0], "srgrrdthrytukyiluommipùo")

  //const [rows, setRows] = useState([])

  const {ordersData} = useContext(OrdersContext)

  const {orderId} = useParams()

   //console.log(orderId)

  const rows1 = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        {type === "orders" &&  
          <>
           <TableRow>
           <TableCell className="tableCell2" colSpan={2}>Customer </TableCell>
           <TableCell className="tableCell1" colSpan={2}>{ordersData.find(order => order.id === orderId).User.name}</TableCell>
           </TableRow>
           <TableRow>
           <TableCell className="tableCell2" colSpan={2}>Customer Address </TableCell>
           <TableCell className="tableCell1" colSpan={2}>{ordersData.find(order => order.id === orderId).User.address}</TableCell>
           </TableRow>
          </>
        }
          <TableRow>
          {!type && <TableCell className="tableCell">Orders ID</TableCell>}

          {type === "orders" && 
           <>
           <TableCell className="tableCell">Image</TableCell>
           <TableCell className="tableCell">Name</TableCell>
           <TableCell className="tableCell">Quantity</TableCell>
            
           </>}

            {/* <TableCell className="tableCell">Product</TableCell> */}
            {!type && <><TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </>}
             <TableCell className="tableCell">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
        {type === "orders" && Object.entries(ordersData.find(order => order.id === orderId).User.items.map(item => item.name).reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {}))
         .map(([name, quantity], index) => 
         <TableRow key={index}>
           <TableCell className="tableCell">
           <img className="tableCellImg" src={ordersData.find(order => order.id === orderId).User.items.find(item => item.name === name).image} alt="avatar" />

             </TableCell>
           <TableCell className="tableCell">{name}</TableCell>
           <TableCell className="tableCell">×{quantity}</TableCell>
           <TableCell className="tableCell">{ordersData.find(order => order.id === orderId).User.items.reduce((a, v) => v.name === name ? a + v.price : a, 0).toLocaleString('en', {
                                style: "currency",
                                currency: 'USD'
                            })}</TableCell>
                            
         </TableRow>
          )}

          {type === "orders" &&  
          <>
          <TableRow>
          <TableCell className="tableCell1" rowSpan={3} />
            <TableCell className="tableCell1" colSpan={2}><span  >Subtotal</span></TableCell>
            <TableCell className="tableCell1" align="right"><span >{ordersData.find(order => order.id === orderId).User.items.reduce((a,v)=> a + v.price, 0).toLocaleString("en", {
                                style: "currency",
                                currency: "USD"
                            })}</span></TableCell>

          </TableRow>

          <TableRow>
           
            <TableCell className="tableCell1" >Tax</TableCell>
            <TableCell className="tableCell1">0%</TableCell>
            <TableCell className="tableCell1" align="right">0.00</TableCell>

          </TableRow>
          <TableRow>
           
            <TableCell className="tableCell1" colSpan={2} ><span className="text">Total</span></TableCell>
             
            <TableCell className="tableCell1" align="right"><span className="text">{ordersData.find(order => order.id === orderId).User.items.reduce((a,v)=> a + v.price, 0).toLocaleString("en", {
                                style: "currency",
                                currency: "USD"
                            })}</span></TableCell>

          </TableRow>
          </>
          }

          {!type && ordersData.filter((item, index)=> index < 5).map((row) => (
            <TableRow key={row.id}>
               {!type && <TableCell className="tableCell">{row.orderId}</TableCell>}
              {/* <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell> */}
               {!type && <TableCell className="tableCell">{row.User.name}</TableCell>}
               {!type && <TableCell className="tableCell">{renderDate(row)}</TableCell>}
              <TableCell className="tableCell">{row.User.items.reduce((a,v)=> a + v.price, 0).toLocaleString('en', {
                                style: "currency",
                                currency: 'USD'
                            })}</TableCell>
              <TableCell className="tableCell">{'card'}</TableCell>
              {!type && <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const renderDate = (row) => {
   
  return (
     <div className="dateTime" >
       <div>{new Timestamp(row.createdAt.seconds, row.createdAt.nanoseconds).toDate().toLocaleDateString("es-CL")}</div>
       <div  >{new Timestamp(row.createdAt.seconds, row.createdAt.nanoseconds).toDate().toLocaleTimeString()}</div>
     </div>
  )
  // return '<div>'+new Timestamp(row.createdAt.seconds, row.createdAt.nanoseconds).toDate().getFullYear()+'-'+ new Timestamp(row.createdAt.seconds, row.createdAt.nanoseconds).toDate().getMonth()+'-'+new Timestamp(row.createdAt.seconds, row.createdAt.nanoseconds).toDate().getDay()
  // +'</div>'+ new Timestamp(row.createdAt.seconds, row.createdAt.nanoseconds).toDate().getHours()+'-'+ new Timestamp(row.createdAt.seconds, row.createdAt.nanoseconds).toDate().getMinutes()+'-'+new Timestamp(row.createdAt.seconds, row.createdAt.nanoseconds).toDate().getSeconds()
 
}

export default List;