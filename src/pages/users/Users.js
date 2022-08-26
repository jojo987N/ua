import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./users.scss";
import { useEffect, useState } from "react";
import { APP_CONSTANT, PAGE } from "../../globals";
import Datatable from "../../components/datatable/Datatable";
import { userColumns } from "../../datatablesource";

const Users = () => {
  const [users, setUsers] = useState()
  useEffect(() => {
    getUsersFromFirebase().then(users => setUsers(users))

  }, [])

  return (

    <div className="users">
      <Sidebar />
      <div className="usersContainer">
        <Navbar />

        <div className="title">
          {APP_CONSTANT.TEXT.ADD_NEW_USER}
          <Link to={`/${PAGE.ADD_USER}`} className="link">
            {APP_CONSTANT.TEXT.ADD_NEW}
          </Link>
        </div>
        <div className="content">

         <Datatable rows={users} columns={userColumns}/>
        </div>

      </div>
    </div>
  );
};

export default Users;