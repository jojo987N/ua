import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./users.scss";
import {useEffect, useState } from "react";
import { APP_CONSTANT } from "../../globals";

const Users = () => {
  const [users, setUsers] = useState()
    useEffect(()=>{
     getUsersFromFirebase().then(users => setUsers(users))

    }, [])

 return (
   
   <div className="users">
     <Sidebar />
     <div className="usersContainer">
       <Navbar />

<div className="title">
        {APP_CONSTANT.TEXT.ADD_NEW_USER}
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

export default Users;