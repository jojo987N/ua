import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
import TimePicker from 'react-time-picker';
//import TimePicker from 'react-time-picker/dist/entry.nostyle';

import { userInputs } from "./formSource";


import { Button, Modal, Space } from 'antd';

import Select from 'react-select'
import { useParams } from "react-router-dom";
import { decryptData } from "../../utils";
import { APP_CONSTANT } from "../../globals";


const AddUser = () => {


  let data;

  const [file, setFile] = useState("");

  const [value1, onChange1] = useState('');
  const [value2, onChange2] = useState('');


  const handleSubmit = (e)=>{
    
    e.preventDefault();
  }
  return (
    <div className="addUser">
      <Sidebar />
      <div className="addUserContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file? URL.createObjectURL(file):""} alt=""/>
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="file">
                  {"Image"}: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {userInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} 
                  placeholder={input.placeholder}
                  value={input.placeholder} 
                  />
                </div>
              ))}
              <button className="button" onClick={warning} > {APP_CONSTANT.TEXT.SEND}</button>
               
            </form>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
