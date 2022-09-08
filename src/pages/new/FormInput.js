import React from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Select from 'react-select'
import { decryptData } from "../../utils";
import TimePicker from 'react-time-picker';
import { addRestaurant, updateUser } from "../../firebase";
import { restaurantModel } from "../../model";
import {getDownloadURL, getStorage, ref} from 'firebase/storage'




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

  },
  {
    value: "admin",
    label: "Admin"

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
    this.state = {
      inputs: {},
      button: {
        text: "Send",
        color: "teal"
      }

    }
  }
  handleSubmit = (e) => {

    e.preventDefault();

    //  console.log(this.state.inputs.file)

    //  console.log(restaurantModel(this.state.inputs.latitude, this.state.inputs.longitude, this.state.inputs.phone, this.state.inputs.image_url, this.state.inputs.address, this.state.inputs.city, this.state.inputs.country, this.state.inputs.name))


    // console.log(this.state.inputs)
    if (this.props.data)
      updateUser(this.state.inputs, this.props.itemId)
    else
      addRestaurant(restaurantModel(this.state.inputs.latitude, this.state.inputs.longitude, this.state.inputs.phone, URL.createObjectURL(this.state.inputs.file), this.state.inputs.address, this.state.inputs.city, this.state.inputs.country, this.state.inputs.name))
    // addRestaurant(this.state.inputs)

    if (Object.keys(this.state.inputs).length)
      this.props.navigate('/' + this.props.type + 's');
    // this.setState({
    //   button: {
    //     text: "Sent",
    //     color: "green"
    //   }
    // })

  }
  handleInputChange = (event) => {

    const target = event.target;
    const name = target.name;

    this.setState({
      inputs: {
        ...this.state.inputs,
        [name]: target.value
      },
      button: {
        text: "Send",
        color: "teal"
      }
    })

    // this.setState({
    //   [name]: target.value
    // });
  }


  render() {
    //   return <div ref={this.myRef} />;

    return <form onSubmit={this.handleSubmit}>
      <div className="formInput">
        <label htmlFor="file">
          {this.props.type === "drivers" ? "Car Image" : "Image"}: <DriveFolderUploadOutlinedIcon className="icon" />
        </label>
        <input
          type="file"
          id="file"
          onChange={async (e) => {

            const file = e.target.files[0];
            const storage = getStorage();
            const storageRef = ref(storage, file.name);
            const url = await getDownloadURL(storageRef)

            console.log("url", url)
               


            this.setState({
              inputs: {
                ...this.state.inputs,
                file: e.target.files[0]
              }

            })





          }

          }
          style={{ display: "none" }}
          required
        />
      </div>



      {this.props.inputs.map((input) => {
        //  this.setState({value: this.props.data[input.alias]})
        return (
          <div className="formInput" key={input.id}>
            <label>{input.label}</label>
            <input type={input.type}
              placeholder={input.placeholder}
              name={input.alias}
              required="required"
              // ref={"input"+input.id}
              // onChange={e => this.setState({
              //   [input.alias] : e.target.value
              // })}

              onChange={this.handleInputChange}
              //   onChange={e => this.setState(val => {

              //     console.log(val)
              //     return {
              //     ...val,
              //     [input.alias] : e.target.value
              //   }
              // } )}
              defaultValue={
                // (userId && user[input.alias]) || 
                // (itemId && itemId !== "profile" && (data[input.alias]))} 
                //  itemId !== "profile"?data[input.alias]:input.placeholder} 

                this.props.itemId !== "profile" ? this.props.data ? this.props.data[input.alias] : "" : input.placeholder

              }
            />
          </div>
        )
      })}


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
          placeholder={"Select Restaurant"} />
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
          placeholder="Select Category" />
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
          onChange={(e) => this.setState({
            inputs: {
              ...this.state.inputs,
              role: e.value
            }
          })}
        />
      </div>}

      {(this.props.type === "restaurant" || this.props.type === "drivers") && <div className="formInput" >
        <label>{this.props.type === "drivers" ? "Driver" : "Manager"}</label>
        <Select
          // onChange={(e) => this.setState({
          //   role: e.target.value
          // })}
          styles={customStyles}
          options={decryptData(localStorage.getItem(process.env.REACT_APP_USERS_KEY)).map(option =>
          ({
            value: option.name,
            label: option.name

          }))}
          placeholder={this.props.type === "drivers" ? "Select driver" : "Select manager"} />
      </div>}





      {this.props.type === "restaurant" && <>
        <div className="formInput" >
          <label>Reward</label>
          <input type="text" />
        </div>
        <div className="formInput" >
          <label>Collect Time</label>
          <input type="text" />
        </div>
        <div className="tmpContainer">
          <label>Opening Time</label>
          <TimePicker
            // onChange={(e) => this.setState({
            //    value1: e.target.value
            //  })} 
            //  value={this.state.value1}
            className="tmp" />
        </div>

        <div className="tmpContainer">
          <label>Closing Time</label>
          <TimePicker
            //  onChange={(e) => this.setState({
            //    value2: e.target.value
            //  })} 
            //  value={this.state.value2}
            className="tmp" />
        </div>
      </>}

      <button className="button" style={{ backgroundColor: this.state.button.color }}>{this.state.button.text}</button>

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



