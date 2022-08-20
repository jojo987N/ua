import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { carInputs, categoryInputs, productInputs, restaurantInputs, userInputs } from "./formSource";
import { getOrdersFromFirebase } from './firebase'
import { useContext, useEffect, useState } from "react";
import { OrdersContext } from "./context/OrdersContext"
import Restaurant from "./pages/restaurant/Restaurant";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import { AuthContext } from "./context/Auth";
import Settings from "./components/settings/Settings";
import ProtectedRoute from "./ProtectedRoute";

 

function App() {
  const { currentUser } = useContext(AuthContext)
 
  
  return (
    <div className="app">
       
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={
                <PrivateRoute />
              } />

              <Route path="login" element={<Login />} />
              <Route element={<ProtectedRoute currentUser={currentUser} />}>
              {/* <Route element={<ProtectedRoute />}> */}
                <Route path="users">
                  <Route index element={<List key="users" type="users" /> } />
                  {/* <Route path=":userId" element={<Single />} /> */}
                  <Route path=":userId" element={<New inputs={userInputs} type="user" title="Update User" />} />
                  <Route
                    path="new"
                    element={<New inputs={userInputs} type="user" title="Add New User" />}
                  />
                  {/* <Route
                path="profile"
                element={<New inputs={userInputs} type="user" title="Update Profile" />}
              /> */}
                </Route>
                <Route path="products">
                  <Route index element={<List key="products" type="products" />} />
                  {/* <Route path=":productId" element={<Single />} /> */}
                  <Route path=":id" element={<New inputs={productInputs} type="product" title="Update Menu" />} />
                  <Route


                    path="new"
                    element={<New inputs={productInputs} type="products" title="Add New Menu" />}
                  />
                </Route>
                <Route path="orders">
                  <Route index element={<List key="orders" type="orders" />} />
                  <Route path=":orderId" element={<Single type="orders" />} />
                  <Route
                    path="new"
                    element={<New inputs={productInputs} type="orders" title="Add New Order" />}
                  />
                </Route>
                <Route path="restaurants">
                  <Route index element={<List key="restaurants" type="restaurants" />} />
                  {/* <Route path=":restaurantId" element={<Single />} /> */}
                  <Route path=":restaurantId" element={<New inputs={restaurantInputs} type="restaurant" title="Update Restaurant" />} />
                  <Route
                    path="new"
                    element={<New inputs={restaurantInputs} type="restaurant" title="Add New Restaurant" />}
                  />
                </Route>
                <Route path="drivers">
                  <Route index element={<List key="drivers" type="drivers" />} />
                  {/* <Route path=":driverId" element={<Single />} /> */}
                  <Route path=":userId" element={<New inputs={[...userInputs, ...carInputs]} type="drivers" title="Update Driver" />} />
                  <Route
                    path="new"
                    element={<New inputs={[...userInputs, ...carInputs]} type="drivers" title="Add New Driver" />}
                  />
                </Route>
                <Route path="categories">
                  <Route index element={<List key="categories" type="categories" />} />
                  {/* <Route path=":id" element={<Single />} /> */}
                  <Route path=":id" element={<New inputs={categoryInputs} type="categorie" title="Update Category" />} />
                  <Route
                    path="new"
                    element={<New inputs={categoryInputs} type="categorie" title="Add New Category" />}
                  />
                </Route>

                <Route path="earnings">
                  <Route index element={<List key="earnings" type="earnings" />} />
                </Route>

                <Route path="settings">
                  <Route index element={<Settings key="earnings" type="earnings" />} />
                </Route>

                <Route path="restaurant">
                  <Route index element={<Restaurant path={"/"} />} />
                  <Route path="orders/:id" element={<Restaurant path={"orders/:id"} />} />
                  <Route path="menu" element={<Restaurant path={"menu"} />} />
                </Route>
              </Route>
            </Route>
          </Routes>

        </BrowserRouter>
       
    </div>

    // </AuthProvider>
    // </LoadingProvider>
    // </RestaurantProvider>

  );
}

export default App;