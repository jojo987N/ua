import "./transactions.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useContext, useEffect } from "react";
import { OrdersContext } from "../../context/OrdersContext";
import { Timestamp } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { getOrdersFromFirebase } from "../../utils";

const Transactions = () => {
  const { orderId } = useParams();

  const [orders, setOrders] = useState();

  useEffect(() => {
    getOrdersFromFirebase().then((orders) => setOrders(orders));
  }, []);

  return (
    <TableContainer component={Paper} className="transactions">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">

        <TableHead>
         
          <TableRow>
            {!type && <TableCell className="tableCell">Orders ID</TableCell>}

            

            {!type && (
              <>
                <TableCell className="tableCell">Customer</TableCell>
                <TableCell className="tableCell">Date</TableCell>
                <TableCell className="tableCell">Payment Method</TableCell>
                <TableCell className="tableCell">Driver</TableCell>
              </>
            )}
            <TableCell className="tableCell">Amount</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          
          {!type &&
            orders
              .filter((item, index) => item.status === "Completed")
              .map((row) => (
                <TableRow key={row.id}>
                  {!type && (
                    <TableCell className="tableCell">
                      {row.orderId.toUpperCase()}
                    </TableCell>
                  )}
                  {!type && (
                    <TableCell className="tableCell">{row.User.name}</TableCell>
                  )}
                  {!type && (
                    <TableCell className="tableCell">
                      {renderDate(row)}
                    </TableCell>
                  )}
                  <TableCell className="tableCell">
                    {row.paymentMethod}
                  </TableCell>
                  <TableCell className="tableCell">{row.driverName}</TableCell>
                  {!type && (
                    <TableCell className="tableCell">
                      <span className={`status ${row.status}`}>
                        {row.User.items
                          .reduce((a, v) => a + v.price, 0)
                          .toLocaleString("en", {
                            style: "currency",
                            currency: "USD",
                          })}
                      </span>
                    </TableCell>
                  )}
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const renderDate = (row) => {
  return (
    <div className="dateTime">
      <div>
        {new Timestamp(row.createdAt.seconds, row.createdAt.nanoseconds)
          .toDate()
          .toLocaleDateString("es-CL")}
      </div>
      <div>
        {new Timestamp(row.createdAt.seconds, row.createdAt.nanoseconds)
          .toDate()
          .toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Transactions;
