import Login from "./pages/login/Login";
// import List from "./pages/list/List";
// import Single from "./pages/single/Single";
// import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {
//   carInputs,
//   categoryInputs,
//   productInputs,
//   restaurantInputs,
//   userInputs,
// } from "./formSource"; 
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import { AuthContext } from "./context/Auth";
import ProtectedRoute from "./ProtectedRoute";
import { useContext } from "react";
import {PAGE } from "./globals";
import Users from "./pages/users/Users";
import AddUser from "./pages/addUser/AddUser";
import Orders from "./pages/orders/Orders";
import Restaurants from "./pages/restaurants/Restaurants"
import Drivers from "./pages/drivers/Drivers"
import Categories from "./pages/categories/Categories"
import Foods from "./pages/foods/Foods";
import AddDriver from "./pages/addDriver/AddDriver"
import AddRestaurant from "./pages/addRestaurant/AddRestaurant"
import "antd/dist/antd.min.css"

function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<PrivateRoute />} />
            <Route path={PAGE.LOGIN} element={<Login />} />
            <Route element={<ProtectedRoute currentUser={currentUser} />}>
              <Route path={PAGE.USERS}>
                <Route index element={<Users />} />
                {/* <Route
                  path=":userId"
                  element={
                    <New
                      inputs={userInputs}
                      type="user"
                      title={APP_CONSTANT.UPDATE_USER}
                    />
                  }
                /> */}
                {/* <Route
                  path="new"
                  element={
                    <New
                      inputs={userInputs}
                      type="user"
                      title={APP_CONSTANT.ADD_NEW_USER}
                    />
                  }
                /> */}
              </Route>
              <Route path={PAGE.ADD_USER}>
                <Route index element={<AddUser />} />
              </Route>
              <Route path={PAGE.PRODUCTS}>
                <Route
                  index
                  element={<Foods/>}
                />
                {/* <Route
                  path=":id"
                  element={
                    <New
                      inputs={productInputs}
                      type="product"
                      title={APP_CONSTANT.UPDATE_MENU}
                    />
                  }
                />
                <Route
                  path="new"
                  element={
                    <New
                      inputs={productInputs}
                      type="products"
                      title={APP_CONSTANT.ADD_NEW_MENU}
                    />
                  }
                /> */}
              </Route>
              <Route path={PAGE.ORDERS}>
                <Route index element={<Orders />} />
                {/* <Route path=":orderId" element={<Single type="orders" />} /> */}
               
              </Route>
              <Route path={PAGE.RESTAURANTS}>
                <Route
                  index
                  element={<Restaurants />}
                />
                {/* <Route
                  path=":restaurantId"
                  element={}
                /> */}
                {/* <Route
                  path="new"
                  element={
                    <New
                      inputs={restaurantInputs}
                      type="restaurant"
                      title={APP_CONSTANT.ADD_NEW_RESTAURANT}
                    />
                  }
                /> */}
              </Route>

              <Route path={PAGE.ADD_DRIVER}>
                <Route index element={<AddDriver />} />
                
              </Route>

              <Route path={PAGE.ADD_RESTAURANT}>
                <Route index element={<AddRestaurant/>} />
                {/* <Route
                  path=":userId"
                  element={
                    <New
                      inputs={[...userInputs, ...carInputs]}
                      type="drivers"
                      title={APP_CONSTANT.UPDATE_DRIVER}
                    />
                  }
                />
                <Route
                  path="new"
                  element={
                    <New
                      inputs={[...userInputs, ...carInputs]}
                      type="drivers"
                      title={APP_CONSTANT.ADD_NEW_DRIVER}
                    />
                  }
                /> */}
              </Route>

              <Route path={PAGE.ADD_DRIVER}>
                <Route index element={<AddDriver />} />
                
              </Route>

              <Route path={PAGE.CATEGORIES}>
                <Route
                  index
                  element={<Categories />}
                />
                {/* <Route
                  path=":id"
                  element={
                    <New
                      inputs={categoryInputs}
                      type="categorie"
                      title={APP_CONSTANT.UPDATE_CATEGORY}
                    />
                  }
                /> */}
                {/* <Route
                  path="new"
                  element={
                    <New
                      inputs={categoryInputs}
                      type="categorie"
                      title={APP_CONSTANT.ADD_NEW_CATEGORY}
                    />
                  }
                /> */}
              </Route>
              {/* <Route path={PAGE.EARNINGS}>
                <Route
                  index
                  element={<List key="earnings" type="earnings" />}
                />
              </Route> */}
             
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
