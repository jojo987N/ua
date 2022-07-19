import { decryptData } from "./utils";

 
export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
            <img className="cellImg" src={"https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png"} alt="avatar" />
            {/* <PersonIcon /> */}
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
  
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
    },
    {
      field: "Role",
      headerName: "Role",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.Status}`}>
            {params.row.Status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "1snow@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Jamie Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "2snow@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "3snow@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Stark",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "4snow@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Targaryen",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "5snow@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "6snow@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "7snow@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "8snow@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
    },
  ];


  export const productColumns = [
  //  { field: "id", headerName: "ID", width: 70 },
    {
      field: "menu",
      headerName: "Menu",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.image} alt="avatar" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "restaurant",
      headerName: "Restaurant",
      width: 230,
      renderCell: (params) => {
        
        // console.log(JSON.parse(localStorage.getItem('restaurants')).find(restaurant => restaurant.restaurantId === params.row.restaurantID))
        return (
           <div className="cellWithRestaurant">
             {/* {params.row.id} */}
            {/* {params.row.restaurantID} */}
            {/* {JSON.stringify(JSON.parse(localStorage.getItem('restaurants')).find(restaurant => restaurant.restaurantId === params.row.restaurantID ))} */}
            {decryptData(localStorage.getItem(process.env.REACT_APP_RESTAURANTS_KEY)).find(restaurant => restaurant.restaurantId === params.row.restaurantID).name}
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellWithPrice">
            {params.row.price.toLocaleString('en', {
                                style: "currency",
                                currency: 'USD'
                            })}
          </div>
        );
      },
    },
    {
      field: "category",
      headerName: "Category",
      width: 230,
      renderCell: (params) => {
        
      //console.log(JSON.parse(localStorage.getItem('categories')).find(category => category.id === params.row.categorieId))
        return (
           <div className="cellWithRestaurant">
             {/* {params.row.id} */}
            {/* {params.row.restaurantID} */}
            {/* {JSON.stringify(JSON.parse(localStorage.getItem('restaurants')).find(restaurant => restaurant.restaurantId === params.row.restaurantID ))} */}
            {decryptData(localStorage.getItem(process.env.REACT_APP_CATEGORIES_KEY)).find(category => category.id === params.row.categorieId).name}
          </div>
        );
      },
    },
  ];
  

  export const restaurantColumns = [
    //  { field: "id", headerName: "ID", width: 70 },
      {
        field: "restaurant",
        headerName: "Restaurant",
        width: 250,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">
              <img className="cellImg" src={params.row.image_url} alt="avatar" />
              {params.row.name}
            </div>
          );
        },
      },
      {
        field: "phone",
        headerName: "Phone",
        width: 230,
      },
    
      {
        field: "address",
        headerName: "Address",
        width: 350,
        renderCell: (params) => {
          return (
            <div className="cellWithAddress">
              {params.row.location.display_address.reduce((a, v) => a + v , "")}
            </div>
          );
        },
      },
    ];

    export const categoryColumns = [
      //  { field: "id", headerName: "ID", width: 70 },
        {
          field: "category",
          headerName: "Category",
          width: 250,
          renderCell: (params) => {
            return (
              <div className="cellWithImg">
                <img className="cellImg" src={params.row.image} alt="avatar" />
                {params.row.name}
              </div>
            );
          },
        },
        {
          field: "restaurant",
          headerName: "Restaurant",
          width: 300,
          renderCell: (params) => {
            
            //console.log(JSON.parse(localStorage.getItem('restaurants')).find((restaurant => restaurant.categories.some( category => category.title === params.row.name))))
            return (
               <div className="cellWithRestaurant">
                 {/* {params.row.id} */}
                {/* {params.row.restaurantID} */}
                {/* {JSON.stringify(JSON.parse(localStorage.getItem('restaurants')).find(restaurant => restaurant.restaurantId === params.row.restaurantID ))} */}
                {decryptData(localStorage.getItem(process.env.REACT_APP_RESTAURANTS_KEY)).find((restaurant => restaurant.categories.some( category => category.title === params.row.name))).name}
              </div>
            );
          },
        },
      
        
      ];


      export const driverColumns = [
        { field: "id", headerName: "ID", width: 70 },
        {
          field: "driver",
          headerName: "Driver",
          width: 230,
          renderCell: (params) => {
            return (
              <div className="cellWithImg">
                {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
                <img className="cellImg" src={"https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png"} alt="avatar" />
                {/* <PersonIcon /> */}
                {params.row.name}
              </div>
            );
          },
        },
        {
          field: "email",
          headerName: "Email",
          width: 250,
        },
      
        {
          field: "phone",
          headerName: "Phone",
          width: 150,
        },
        // {
        //   field: "Role",
        //   headerName: "Role",
        //   width: 100,
        // },
        {
          field: "status",
          headerName: "Status",
          width: 100,
          renderCell: (params) => {
            return (
              <div className={`cellWithDriverStatus ${params.row.driverStatus}`}>
                {params.row.driverStatus}
              </div>
            );
          },
        },
      ];

      export const orderColumns = [
        { field: "orderId", headerName: "orders ID", width: 100 },
        {
          field: "customer",
          headerName: "Customer",
          width: 180,
          renderCell: (params) => {
            return (
              <div >
                
                {params.row.User.name}
              </div>
            );
          },
        },
        {
          field: "restaurant",
          headerName: "Restaurant",
          width: 230,
          renderCell: (params) => {
            return (
              <div >
                
                {params.row.Restaurant.name}
              </div>
            );
          },
        },
      
        {
          field: "amount",
          headerName: "Amount",
          width: 150,
          renderCell: (params) => {
            return (
              <div >
                
                {params.row.User.items.reduce((a,v)=> a + v.price, 0).toLocaleString('en', {
                                style: "currency",
                                currency: 'USD'
                            })}
              </div>
            );
          },
        },
        {
          field: "orderType",
          headerName: "Order Type",
          width: 100,
        },
        {
          field: "status",
          headerName: "Status",
          width: 100,
          renderCell: (params) => {
            return (
              <div className={`cellWithOrderStatus ${params.row.status}`}>
                {params.row.status.toLowerCase()}
              </div>
            );
          },
        },
      ];
      
      export const restaurantsEarningsColumns = [
          // {
          //   field: "restaurant",
          //   headerName: "Restaurant",
          //   width: 250,
          //   renderCell: (params) => {
          //     return (
          //       <div className="cellWithImg">
          //         <img className="cellImg" src={params.row.image_url} alt="avatar" />
          //         {params.row.name}
          //       </div>
          //     );
          //   },
          // },
          
          {
            field: "restaurant",
            headerName: "Restaurant",
            width: 350,
          },
          {
            field: "earning",
            headerName: "Earning",
            width: 350,
            renderCell: (params) => {
              return (
                <div className="cellWithEarning">
                  {params.row.earning.toLocaleString('en', {
                                      style: "currency",
                                      currency: 'USD'
                                  })}
                </div>
              );
            },
          },
          // {
          //   field: "earning",
          //   headerName: "Earning",
          //   width: 230,
          // },
        
          
        ];




