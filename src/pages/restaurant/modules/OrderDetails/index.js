import { Card, Descriptions, Divider, List, Button, Tag, Spin } from "antd";
import menus from "../../assets/data/orderDetails.json"
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { OrdersContext } from "../../../../context/OrdersContext";

const OrderDetails = () => {

  const {ordersData} = useContext(OrdersContext)
  const {id} = useParams()

  return (
    <Card title={"Order "+ordersData.find(order => order.id === id).orderId.toUpperCase()} style={{ margin: 20 }}>
      <Descriptions bordered column={{ lg: 1, md: 1, sm: 1 }}>
        <Descriptions.Item label="Customer">Thomas John</Descriptions.Item>
        <Descriptions.Item label="Customer Address">
         Paris - Montparnasse
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <List
       // dataSource={menus}
        dataSource={Object.entries(ordersData.find(order => order.id === id).User.items.map(item => item.name).reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {}))}
       // renderItem={(dishItem) => (
        renderItem={([name, quantity]) => (
          <List.Item>
            <div style={{ fontWeight: "bold" }}>
              {/* {dishItem.name} x{dishItem.quantity} */}
              {name} x{quantity}
            </div>
            <div>{ordersData.find(order => order.id === id).User.items.reduce((a, v) => v.name === name ? a + v.price : a, 0).toLocaleString('en', {
                                style: "currency",
                                currency: 'USD'
                            })}</div>
             
          </List.Item>
        )}
      />
      {/* <Divider /> */}
      <div style={styles.totalSumContainer}>
        <h2>Total:</h2>
        <h2 style={styles.totalPrice}>{ordersData.find(order => order.id === id).User.items.reduce((a,v)=> a + v.price, 0).toLocaleString("en", {
                                style: "currency",
                                currency: "USD"
                            })}</h2>
      </div>
      {/* <Divider /> */}
      
        <div style={styles.buttonsContainer}>
          <Button
            block
            type="danger"
            size="large"
            style={styles.button}
            
          >
            Decline Order
          </Button>
          <Button
            block
            type="primary"
            size="large"
            style={styles.button}
            
          >
            Accept Order
          </Button>
        </div>
    
      
        <Button block type="primary" size="large">
          Food Is Done
        </Button>
      
    </Card>
  );
};

const styles = {
  totalSumContainer: {
    flexDirection: "row",
    display: "flex",
   // border: "1px solid black"
   paddingTop: 20,
   paddingBottom: 10
  },
  totalPrice: {
    marginLeft: "auto",
    fontWeight: "bold",
  },
  buttonsContainer: {
    display: "flex",
    paddingBottom: 30,
  },
  button: {
    marginRight: 20,
    marginLeft: 20,
  },
};

export default OrderDetails;
