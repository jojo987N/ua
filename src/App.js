 import Home from "./pages/home/Home";
 import Login from "./pages/login/Login";
 import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import {getOrdersFromFirebase} from './firebase'
import { useEffect, useState } from "react";
import {OrdersContext} from "./context/OrdersContext"
// import "./style/dark.scss";
// import { useContext } from "react";
// import { DarkModeContext } from "./context/darkModeContext";

function App() {
  // const { darkMode } = useContext(DarkModeContext);

  //console.log(localStorage.getItem('orders'), "aaaaaaaaaaaaaaaaaaaaaaaaaa")
   
  const [ordersData, setOrdersData] = useState([])
  const storeData = localStorage.getItem('orders')
    // getOrdersFromFirebase().then(orders => localStorage.setItem('orders', JSON.stringify(orders)))
       

    
  useEffect(()=>{
    
    if(!localStorage.getItem('orders')){
     
      getOrdersFromFirebase().then(orders => localStorage.setItem('orders', JSON.stringify(orders)))
      .then(orders => setOrdersData(orders))
    }else
    setOrdersData(JSON.parse(localStorage.getItem('orders')))

   // getOrdersFromFirebase().then(orders => setOrdersData(orders))

  }, [])

  // if(!storeData)
  // return (
  //   <div>
  //     <h1>Attend</h1>
  //   </div>
  // )
  return (
    <div className="app">
       <OrdersContext.Provider value={{ordersData, setOrdersData}}>
      <BrowserRouter>
      
        <Routes>
          <Route path="/">
           
            <Route index element={
             
              <Home />
              } />
             
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
               <Route index element={<List />} />
             <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
       
      </BrowserRouter>
        </OrdersContext.Provider>
    </div>
  );
}

export default App;