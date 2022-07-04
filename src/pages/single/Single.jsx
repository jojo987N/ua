import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { OrdersContext } from "../../context/OrdersContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { flexbox } from "@mui/system";


  const Single = ({type}) => {
  const {ordersData} = useContext(OrdersContext)
  const {orderId} = useParams()
  const orderData = ordersData.find(order => order.id === orderId)
  return (
    <>
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">{type === "orders" && "Restaurant"}</h1>
            <div className="item">
              <img
                //src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                src={type === "orders" && orderData.User.items[0].restaurant.image_url}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h2 className="itemTitle">{type === "orders" && orderData.User.items[0].restaurant.name}</h2>
                {/* <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div> */}
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{type === "orders" && orderData.User.items[0].restaurant.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                  {type === "orders" && orderData.User.items[0].restaurant.location.display_address.reduce((a, v) => a + v , "")}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>


              
               {/* <div className="buttonsContainer" style={styles.buttons}>
                <button className="button" style={styles.button1}>Decline Order</button>
                <button className="button" style={styles.button2}>Accept Order</button>
               </div >
               <div className="buttonsContainer"  >
               <button className="button" style={styles.button3}>Food Is Done</button>
               </div > */}
               
              

            </div>
            
          
          <div className="right">
            {/* <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" /> */}
            {type === "orders" && <List type={type}/>}
          </div>
        </div>
        {/* <div className="bottom">
        <h1 className="title">{type === "orders"?"Order Details":"Last Transactions"}</h1>
          <List type={type}/>
          
        </div> */}

 
        
      </div>
       
    </div>
      
     </>
  );
};

const styles = {

  buttons: {
    //flexDirection: "row"
    // display: "flex", 
   // width: "100%",
   // marginTop: 20,
   // justifyContent: "space-between"
     
  },

  button1 : {
    backgroundColor: "red",
    marginRight: 5
    
  },
  button2: {
    backgroundColor: "green",
    marginLeft: 2
     
  },
  button3: {
    width: '100%',
    backgroundColor: "#4dff4d",
  }

}

export default Single;
