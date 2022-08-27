import "./addRestaurant.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { APP_CONSTANT } from "../../globals";

const AddRestaurant = () => {
  const [file, setFile] = useState("");
  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  return (
    <div className="addRestaurant">
      <Sidebar />
      <div className="addRestaurantContainer">
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
                  "Image": <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} style={{ display: "none" }}/>
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} value={input.placeholder}/>
                </div>
              ))}
              <button className="button" >{APP_CONSTANT.TEXT.SEND}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddRestaurant;
