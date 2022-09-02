import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./drivers.scss";
import { useEffect, useState } from "react";
import { APP_CONSTANT } from "../../globals";
import { getUsersFromFirebase } from "../../firebase";

const Drivers = () => {
  const [drivers, setDrivers] = useState()
  useEffect(() => {
    getUsersFromFirebase().filter(user => user.Role === APP_CONSTANT.ROLE.DRIVER).then(users => setDrivers(users))

  }, [])

  return (

    <div className="drivers">
      <Sidebar />
      <div className="driversContainer">
        <Navbar />

        <div className="title">
          {APP_CONSTANT.TEXT.ADD_NEW_DRIVER}
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

export default Drivers;