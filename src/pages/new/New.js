import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
import TimePicker from 'react-time-picker';
//import TimePicker from 'react-time-picker/dist/entry.nostyle';

import { Button, Modal, Space } from 'antd';

import Select from 'react-select'
import { useParams } from "react-router-dom";
import { decryptData, getData } from "../../utils";
import FormInput from "./FormInput"
import { useNavigate } from "react-router-dom";


const New = ({ inputs, title, type}) => {

 // console.log(useParams())

  //const {userId} = useParams()
  //const {productId} = useParams()
  const navigate = useNavigate();

  const paramName = Object.keys(useParams())[0]
  const itemId = useParams()[paramName]
  // let data;
  const [data, setData] = useState()

  //  console.log(type === 'user'?process.env.REACT_APP_USERS_KEY:type)
   //console.log(`${type}s`)
  //console.log(paramName)
  //console.log(`${(type === 'drivers' && "user") || type}s`, paramName)

  // if(itemId && itemId !== "profile") iciii
  // data = decryptData(localStorage.getItem(`${((type === 'drivers' || type === 'users') && process.env.REACT_APP_USERS_KEY) || type}s`)).find(item => item[paramName] === itemId)  
  // data = decryptData(localStorage.getItem((type === 'user' || type === 'drivers')?process.env.REACT_APP_USERS_KEY:type === 'product'?process.env.REACT_APP_PRODUCTS_KEY:type === 'restaurant'?process.env.REACT_APP_RESTAURANTS_KEY:type === 'categorie'?process.env.REACT_APP_CATEGORIES_KEY:type)).find(item => item[paramName] === itemId)  
  // data = decryptData(localStorage.getItem((type === 'user' || type === 'drivers')?process.env.REACT_APP_USERS_KEY:type === 'product'?process.env.REACT_APP_PRODUCTS_KEY:type === 'restaurant'?process.env.REACT_APP_RESTAURANTS_KEY:type === 'categorie'?process.env.REACT_APP_CATEGORIES_KEY:type)).find(item => item[paramName] === itemId)  
 
   
   
 //console.log(data)
 // const user = JSON.parse(localStorage.getItem('users')).find(user => user.userId === userId)

  const [file, setFile] = useState("");

  const [value1, onChange1] = useState('');
  const [value2, onChange2] = useState('');
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({});

   
  
  const handleSubmit = (e)=>{
    
    e.preventDefault();
    console.log({
      ...formData,
      file: URL.createObjectURL(file)
    })
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

  useEffect(() => {
     if(itemId)
      getData(type).then(values => {
        setData(values.find(value => value.id === itemId))
      })
  }, [])

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
            <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" />
            {/* <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : itemId && itemId !== "profile"? (data.image || data.image_url)?(data.image || data.image_url):
                  "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg":
                  "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            /> */}
          </div>
          <div className="right">
            
            <FormInput inputs={inputs} type={type} data={data} itemId={itemId} navigate={navigate} />
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
