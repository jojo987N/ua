import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
import TimePicker from 'react-time-picker';
//import TimePicker from 'react-time-picker/dist/entry.nostyle';

import { Button, Modal, Space } from 'antd';

import Select from 'react-select'
import { useParams } from "react-router-dom";
import { decryptData } from "../../utils";


const New = ({ inputs, title, type}) => {

 // console.log(useParams())

  //const {userId} = useParams()
  //const {productId} = useParams()
  const paramName = Object.keys(useParams())[0]
  const itemId = useParams()[paramName]
  let data;

   
   console.log(type === 'user'?process.env.REACT_APP_USERS_KEY:type)
   //console.log(`${type}s`)
  //console.log(paramName)
  //console.log(`${(type === 'drivers' && "user") || type}s`, paramName)
  if(itemId && itemId !== "profile")
  // data = decryptData(localStorage.getItem(`${((type === 'drivers' || type === 'users') && process.env.REACT_APP_USERS_KEY) || type}s`)).find(item => item[paramName] === itemId)  
  data = decryptData(localStorage.getItem((type === 'user' || type === 'drivers')?process.env.REACT_APP_USERS_KEY:type === 'product'?process.env.REACT_APP_PRODUCTS_KEY:type === 'restaurant'?process.env.REACT_APP_RESTAURANTS_KEY:type === 'categorie'?process.env.REACT_APP_CATEGORIES_KEY:type)).find(item => item[paramName] === itemId)  

   
 //console.log(data)
 // const user = JSON.parse(localStorage.getItem('users')).find(user => user.userId === userId)

  const [file, setFile] = useState("");

  const [value1, onChange1] = useState('');
  const [value2, onChange2] = useState('');

  const roles = [
    {
      value: "customer",
      label: "Customer"
    
    },
    {
      value: "driver",
      label: "Driver"
    
    },
    {
      value: "manager",
      label: "Manager"
    
    }
  ]


  const customStyles = {
     
    control: (base) => ({
      // none of react-select's styles are passed to <Control />
      ...base,
       border: 0,
      width: "100%",
      borderBottom: '1px solid gray',
       
        
    }),
     
  }
  
  const handleSubmit = (e)=>{
    
    e.preventDefault();
  }

  const warning = () => {
    Modal.warning({
      title: 'This is a demo version',
      content: 'Modification is not allowed',
    });
  };

  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ]

   
  //console.log(options)

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : itemId && itemId !== "profile"? (data.image || data.image_url)?(data.image || data.image_url):
                  "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg":
                  "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="file">
                  {type === "drivers"?"Car Image":"Image"}: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} 
                  placeholder={input.placeholder}
                  value={
                   // (userId && user[input.alias]) || 
                    // (itemId && itemId !== "profile" && (data[input.alias]))} 
                  //  itemId !== "profile"?data[input.alias]:input.placeholder} 
                  itemId !== "profile"?data?data[input.alias]:"":input.placeholder} 
                  />
                </div>
              ))}
              {(type === "products" || type === "categorie") && <div className="formInput" >
              <label>Restaurant</label>
                <Select 
                 styles={customStyles}
                options={decryptData(localStorage.getItem(process.env.REACT_APP_RESTAURANTS_KEY)).map(option =>
                  ({
                    value: option.name,
                    label: option.name
                  
                  }))} 
                placeholder={"Select Restaurant"}/>
              </div>}
              {(type === "products") && <div className="formInput" >
              <label>Category</label>
                <Select 
                 styles={customStyles}
                options={decryptData(localStorage.getItem(process.env.REACT_APP_CATEGORIES_KEY)).map(option =>
                  ({
                    value: option.name,
                    label: option.name
                  
                  }))} 
                placeholder="Select Category"/>
              </div>}

              {(type === "user") && <div className="formInput" >
              <label>Role</label>
                <Select 
                 styles={customStyles}
                options={roles} 
                 
                placeholder={
                (itemId && itemId !== "profile" && data.Role) || 
                "Select Role"
                }/>
              </div>}

              {(type === "restaurant" || type === "drivers") && <div className="formInput" >
              <label>{type === "drivers"?"Driver":"Manager"}</label>
                <Select 
                 styles={customStyles}
                options={decryptData(localStorage.getItem(process.env.REACT_APP_USERS_KEY)).map(option =>
                  ({
                    value: option.name,
                    label: option.name
                  
                  }))} 
                placeholder={type === "drivers"?"Select driver":"Select manager"}/>
              </div>}




               
              {type === "restaurant" && <><div className="tmpContainer">
                <label>Opening Time</label> 
                  <TimePicker onChange={onChange1} value={value1}
                  className="tmp"/>
              </div>

              <div className="tmpContainer">
                <label>Closing Time</label>
                   <TimePicker onChange={onChange2} value={value2}
                  className="tmp"/>
              </div>
              </>  }
              
              <button className="button" onClick={warning} >Send</button>
               
            </form>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
