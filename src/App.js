import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { decryptData, encryptData } from "./utils";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { carInputs, categoryInputs, productInputs, restaurantInputs, userInputs } from "./formSource";
import { getOrdersFromFirebase } from './firebase'
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { OrdersContext } from "./context/OrdersContext"
import Restaurant from "./pages/restaurant/Restaurant";
import { AuthProvider } from "./context/Auth";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import { RestaurantProvider } from "./context/RestaurantContext";
import { LoadingProvider } from "./context/LoadingContext";
import { AuthContext } from "./context/Auth";
import Driver from "./pages/driver/Driver";
function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={
                  <Home />
              } />
              </Route>
              <Route path="documentation">
                  <Route index element={<List key="documentation" type="documentation" />} />
              </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;