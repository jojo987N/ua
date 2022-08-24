import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./restaurants.scss";
import {useEffect, useState } from "react";
import { APP_CONSTANT } from "../../globals";
import { getRestaurantsFromFirebase } from "../../firebase";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState()
    useEffect(()=>{
        getRestaurantsFromFirebase().then(restaurants => setRestaurants(restaurants))

    }, [])

 return (
   
   <div className="restaurants">
     <Sidebar />
     <div className="restaurantsContainer">
       <Navbar />

<div className="title">
        {APP_CONSTANT.TEXT.ADD_NEW_RESTAURANT}
        <Link to={`/${type}/new`} className="link">
        {APP_CONSTANT.TEXT.ADD_NEW}
        </Link>
      </div>
       <div className="content">
      
      <DataGrid
        className="datagrid"
        rows={tab.rows}
        columns={tab.columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
        
     </div>
   </div>
 );
};

export default Restaurants;