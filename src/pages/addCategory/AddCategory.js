import "./addCategory.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { categoryInputs } from "./formSource";
import { APP_CONSTANT } from "../../globals";

const AddCategory = () => {
  const [file, setFile] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  }
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
              src={file ? URL.createObjectURL(file) : ""} alt="" />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="file">
                  {APP_CONSTANT.TEXT.IMAGE}: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} style={{ display: "none" }} />
              </div>
              {categoryInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button className="button" onClick={warning} >{APP_CONSTANT.TEXT.SEND}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddCategory;
