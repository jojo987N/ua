import React from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Select from 'react-select'
import { decryptData } from "../../utils";
import TimePicker from 'react-time-picker';



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

class FormInput extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }
    handleSubmit = (e)=>{
    
      e.preventDefault();
      
    }
    render() {
    //   return <div ref={this.myRef} />;
    
    return <form onSubmit={this.handleSubmit}>
    <div className="formInput">
      <label htmlFor="file">
        {type === "drivers"?"Car Image":"Image"}: <DriveFolderUploadOutlinedIcon className="icon" />
      </label>
      <input
        type="file"
        id="file"
        onChange={(e) => this.props.setFile(e.target.files[0])}
        style={{ display: "none" }}
      />
    </div> 

    

     {this.props.inputs.map((input) => (
      <div className="formInput" key={input.id}>
        <label>{input.label}</label>
        <input type={input.type} 
        placeholder={input.placeholder}
        ref={"input"+input.id}
        // onChange={e => setFormData(val => ({
        //   ...val,
        //   [input.alias] : e.target.value
        // }))}
      //   value={
      //    // (userId && user[input.alias]) || 
      //     // (itemId && itemId !== "profile" && (data[input.alias]))} 
      //   //  itemId !== "profile"?data[input.alias]:input.placeholder} 

      //   // itemId !== "profile"?data?data[input.alias]:"":formData[input.alias]
      //    formData[input.alias]
      // } 
        />
      </div>
    ))} 
    {(this.props.type === "products" || this.props.type === "categorie") && <div className="formInput" >
    <label>Restaurant</label>
      <Select 
       styles={customStyles}
      //  onChange={handleChange}
      options={decryptData(localStorage.getItem(process.env.REACT_APP_RESTAURANTS_KEY)).map(option =>
        ({
          value: option.name,
          label: option.name
        
        }))} 
      placeholder={"Select Restaurant"}/>
    </div>}
    {(this.props.type === "products") && <div className="formInput" >
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

    {(this.props.type === "user") && <div className="formInput" >
    <label>Role</label>
      <Select 
       styles={customStyles}
      options={roles} 
       
      // placeholder={
      // (itemId && itemId !== "profile" && data.Role) || 
      // "Select Role"
      // }
      />
    </div>}

    {(this.props.type === "restaurant" || this.props.type === "drivers") && <div className="formInput" >
    <label>{this.props.type === "drivers"?"Driver":"Manager"}</label>
      <Select 
      onChange={(e) => setRole(e.target.value)}
       styles={customStyles}
      options={decryptData(localStorage.getItem(process.env.REACT_APP_USERS_KEY)).map(option =>
        ({
          value: option.name,
          label: option.name
        
        }))} 
      placeholder={this.props.type === "drivers"?"Select driver":"Select manager"}/>
    </div>}




     
    {this.props.type === "restaurant" && <><div className="tmpContainer">
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
    
    <button className="button" >Send</button>
     
  </form>

      // return this.props.inputs.map((input) => (
      //           <div className="formInput" key={input.id}>
      //             <label>{input.label}</label>
      //             <input type={input.type} 
      //             placeholder={input.placeholder}
      //             ref={"input"+input.id}
      //             // onChange={e => setFormData(val => ({
      //             //   ...val,
      //             //   [input.alias] : e.target.value
      //             // }))}
      //           //   value={
      //           //    // (userId && user[input.alias]) || 
      //           //     // (itemId && itemId !== "profile" && (data[input.alias]))} 
      //           //   //  itemId !== "profile"?data[input.alias]:input.placeholder} 

      //           //   // itemId !== "profile"?data?data[input.alias]:"":formData[input.alias]
      //           //   formData[input.alias]
      //           // } 
      //             />
      //           </div>
      //         ))
    

    }
  }
  export default FormInput;