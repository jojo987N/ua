import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows, productColumns, restaurantColumns, categoryColumns, driverColumns, orderColumns, restaurantsEarningsColumns} from "../../datatablesource";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getCategories, getEarnings, getFoods, getRestaurantsFromFirebase, getUsersFromFirebase} from "../../firebase";
import { decryptData, encryptData } from "../../utils";
import { RestaurantContext } from "../../context/RestaurantContext";
import { DotLoader } from "react-spinners";

const Datatable = ({type}) => {

  //getFoods().then(foods => console.log(foods))

  //const [data, setData] = useState([]);

 // let tab;

 const {currentRestaurant} = useContext(RestaurantContext) 

// console.log(currentRestaurant)

 const [tab, setTab] = useState({})
 const [title, setTitle] = useState()

   
 // console.log(type)
  //const [data, setData] = useState(tab.rows);

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
      headerName: "Action",
      width: 200,
      renderCell: (params) => {

        
        return (
          <div className="cellAction">
            <Link to={`/${type}/${(((type==="users" || type === "drivers") && params.row.userId ) || (type === "restaurants" && params.row.restaurantId) ) || params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  useEffect(()=>{

    //console.log(process.env.REACT_APP_RESTAURANTS_KEY);

    (async ()=>{

    if(!localStorage.getItem(process.env.REACT_APP_RESTAURANTS_KEY))
    await getRestaurantsFromFirebase().then(restaurants => localStorage.setItem(process.env.REACT_APP_RESTAURANTS_KEY, encryptData(restaurants)))

    if(!localStorage.getItem(process.env.REACT_APP_CATEGORIES_KEY))
    await getCategories().then(categories => localStorage.setItem(process.env.REACT_APP_CATEGORIES_KEY, encryptData(categories)))
     
    if(!localStorage.getItem(process.env.REACT_APP_USERS_KEY))
    await getUsersFromFirebase().then(users => localStorage.setItem(process.env.REACT_APP_USERS_KEY, encryptData(users)))
    
    if(!localStorage.getItem(process.env.REACT_APP_EARNINGS_KEY))
    // Convert restaurantsEarnings object to  array before pass to localstorage
    await getEarnings().then(restaurantsEarnings => localStorage.setItem(process.env.REACT_APP_EARNINGS_KEY, encryptData(Object.keys(restaurantsEarnings).map((restaurant, index) => ({id: index, restaurant:restaurant, earning:restaurantsEarnings[restaurant]}) ))))
    
    // await getEarnings().then(restaurantsEarnings =>console.log(Object.keys(restaurantsEarnings).map(restaurant => ({restaurant:restaurant, earnings:restaurantsEarnings[restaurant]}) )))

      
    // if(!localStorage.getItem('restaurants'))
    // await getRestaurantsFromFirebase().then(restaurants => localStorage.setItem('restaurants', JSON.stringify(restaurants)))

    // if(!localStorage.getItem('categories'))
    // await getCategories().then(categories => localStorage.setItem('categories', JSON.stringify(categories)))
     
    // if(!localStorage.getItem('users'))
    // await getUsersFromFirebase().then(users => localStorage.setItem('users', JSON.stringify(users)))
 
     
    switch (type) {
      case "products":
        setTitle("Menu")
      if(!localStorage.getItem(process.env.REACT_APP_PRODUCTS_KEY))
       getFoods().then(foods => localStorage.setItem(process.env.REACT_APP_PRODUCTS_KEY, encryptData(foods)))
       .then(foods => setTab({
        rows: foods.filter(product => product.restaurantID === currentRestaurant.restaurantId),
        columns: productColumns
      }))
      else{
        setTab({
          rows: decryptData(localStorage.getItem(process.env.REACT_APP_PRODUCTS_KEY)).filter(product => product.restaurantID === currentRestaurant.restaurantId),
          columns: productColumns
        })
      }
    
      break
      case "orders":
        setTitle("Order")
        setTab({
          rows: decryptData(localStorage.getItem(process.env.REACT_APP_ORDERS_KEY)).filter(order => order.Restaurant.name === currentRestaurant.name),
          columns: orderColumns
        })
        break
      case "drivers":
        setTitle("Driver")
        setTab({
          rows: decryptData(localStorage.getItem(process.env.REACT_APP_USERS_KEY)).filter(user => user.Role === "driver"),
          columns: driverColumns
        })
        break
      case "restaurants":
        setTitle("Restaurant")
        setTab({
          //rows: JSON.parse(localStorage.getItem('restaurants')),
          rows: decryptData(localStorage.getItem(process.env.REACT_APP_RESTAURANTS_KEY)),
          columns: restaurantColumns
        })
      break
      case "categories":
        setTitle("Category")
        setTab({
          rows: decryptData(localStorage.getItem(process.env.REACT_APP_CATEGORIES_KEY)),
          columns: categoryColumns
        })
      break
      case "earnings":
        setTitle("Earnings")
        console.log( decryptData(localStorage.getItem(process.env.REACT_APP_EARNINGS_KEY)))
        setTab({
          rows: decryptData(localStorage.getItem(process.env.REACT_APP_EARNINGS_KEY)),
          columns: restaurantsEarningsColumns
        })
      break
      default:
        setTitle("User")
        setTab({
         // rows: userRows,
          rows: decryptData(localStorage.getItem(process.env.REACT_APP_USERS_KEY)),
          columns: userColumns
        })
    } 
  })();

  
  }, [])

   if (!tab.columns)
   return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      
      <DotLoader color={"#36D7B7"} loading={true}  size={150} />
    </div>


  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New {title}
        <Link to={`/${type}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={tab.rows}
        columns={tab.columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

 
export default Datatable;
