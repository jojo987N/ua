import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows, productColumns, restaurantColumns, categoryColumns, driverColumns, orderColumns, restaurantsEarningsColumns} from "../../datatablesource";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getCategories, getEarnings, getFoods, getRestaurantsFromFirebase, getUsersFromFirebase} from "../../firebase";
import { decryptData, encryptData } from "../../utils";
import { DotLoader } from "react-spinners";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal, Space } from 'antd';
import { COLORS } from "../../globals";



const Datatable = ({rows, columns}) => {

  //getFoods().then(foods => console.log(foods))

  //const [data, setData] = useState([]);

 // let tab;
 const { confirm } = Modal;


// console.log(currentRestaurant)

 const [tab, setTab] = useState({})
 const [title, setTitle] = useState()

   
 // console.log(type)
  //const [data, setData] = useState(tab.rows);


  const showDeleteConfirm = (id) => {
    confirm({
      title: 'Are you sure delete this task?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
        handleDelete(id)
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const handleDelete = (id) => {
   // setData(data.filter((item) => item.id !== id));
    setTab({
      rows: tab.rows.filter(item => item.id !== id),
      columns: tab.columns
    })


  };

  const actionColumn = [
    {
      field: "action",
      headerName:  <b>Action</b>,
      width: 200,
      renderCell: (params) => {

        
        return (
          <div className="cellAction">
           {type !== "earnings"?<Link to={`/${type}/${(((type==="users" || type === "drivers") && params.row.userId ) || (type === "restaurants" && params.row.restaurantId) ) || params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>:<></>}
            <div
              className="deleteButton"
              onClick={() => showDeleteConfirm(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  useEffect(()=>{
  
  }, [])

   if (!tab.columns)
   return <div className="loading">
      <DotLoader color={COLORS.LOADING} loading={true}  size={150} />
    </div>


  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

 
export default Datatable;
