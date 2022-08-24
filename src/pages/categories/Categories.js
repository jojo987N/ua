import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./categories.scss";
import {useEffect, useState } from "react";
import { APP_CONSTANT, ROUTE } from "../../globals";
import { getCategories } from "../../firebase";

const Categories = () => {
  const [categories, setCategories] = useState()
    useEffect(()=>{
        await getCategories().then(categories => setCategories(categories))

    }, [])

 return (
   
   <div className="categories">
     <Sidebar />
     <div className="categoriesContainer">
       <Navbar />

<div className="title">
        {APP_CONSTANT.TEXT.ADD_NEW_CATEGORY}
        <Link to={`/${ROUTE.CATEGORIES}/new`} className="link">
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

export default Categories;