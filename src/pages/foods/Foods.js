import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./foods.scss";
import {useEffect, useState } from "react";
import { APP_CONSTANT } from "../../globals";
import { getFoods } from "../../firebase";

const Foods = () => {
  const [foods, setFoods] = useState()
    useEffect(()=>{
        getFoods().then(foods => setFoods(foods))

    }, [])

 return (
   
   <div className="foods">
     <Sidebar />
     <div className="foodsContainer">
       <Navbar />

<div className="title">
        {APP_CONSTANT.TEXT.FOODS}
        
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

export default Foods;