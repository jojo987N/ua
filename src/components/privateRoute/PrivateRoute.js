import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useContext } from "react";
import { AuthContext } from "../../context/Auth";
import Home from '../../pages/home/Home';
import Login from '../../pages/login/Login';
import { RestaurantContext } from '../../context/RestaurantContext';
import Restaurant from '../../pages/restaurant/Restaurant';
import ClipLoader from "react-spinners/ClipLoader";
import { DotLoader } from 'react-spinners';
import { LoadingContext } from '../../context/LoadingContext';

export default function PrivateRoute() {

  const { currentUser } = useContext(AuthContext)

  const { currentRestaurant } = useContext(RestaurantContext)

  const {loading, setLoading} = useContext(LoadingContext)
  //  console.log(currentUser)

   

  useLayoutEffect(() => {
     
    setLoading(true)
}, [])


  if (loading)
   return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      
      <DotLoader color={"#36D7B7"} loading={true}  size={150} />
    </div>


  return (
    <>
      {currentUser?currentRestaurant?<Restaurant  path={"/"}/>:<Home />:<Login />}

    </>

  )
}
