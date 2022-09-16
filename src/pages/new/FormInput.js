import React from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Select from 'react-select'
import { decryptData } from "../../utils";
import TimePicker from 'react-time-picker';
import { addCategory, addRestaurant, updateUser } from "../../firebase";
import { restaurantModel } from "../../model";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { roles, categoryType} from "../../formSource";
import Inputs from "./Inputs";


const customStyles = {
  control: (base) => ({
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
      disabled: false,
      inputs: {},
      button: {
        text: "Send",
        color: "teal"
      }
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.inputs.image)
    if (this.props.data)
      updateUser(this.state.inputs, this.props.itemId)
    else
      if (this.state.inputs.image) {
        this.setState({ disabled: true })
        addCategory(this.state.inputs)
          .then(() => this.props.navigate('/' + this.props.type))
      }
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
  }
  render() {
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
            await uploadBytes(storageRef, file)
            const url = await getDownloadURL(storageRef)
            this.setState({
              inputs: {
                ...this.state.inputs,
                image: url
              }
            })
          }
          }
          style={{ display: "none" }}
          required
        />
      </div>
      {this.props.inputs.map((input) => {
        return (
          <div className="formInput" key={input.id}>
            <label>{input.label}</label>
            <input type={input.type}
              placeholder={input.placeholder}
              name={input.alias}
              required="required"
              onChange={this.handleInputChange}
              defaultValue={
                // this.props.itemId !== "profile" ? this.props.data ? this.props.data[input.alias] : "" : input.placeholder
                this.props.data ? this.props.data[input.alias] : input.placeholder
              }
            />
          </div>
        )
      })}

      {(this.props.type === "categories") &&
        <div className="formInput" >
          <label>Category</label>
          <Select
            styles={customStyles}
            options={categoryType}
            placeholder={"Select Type"} 
            
            onChange={(e) => this.setState({
              inputs: {
                ...this.state.inputs,
                cayegory: {
                  type: e.value
                }
              }
            })}
            />
        </div>
      }
      {/* {(this.props.type === "products" || this.props.type === "categorie") && <div className="formInput" >
        <label>Restaurant</label>
        <Select
          styles={customStyles}
          options={decryptData(localStorage.getItem(process.env.REACT_APP_RESTAURANTS_KEY)).map(option =>
          ({
            value: option.name,
            label: option.name
          }))}
          placeholder={"Select Restaurant"} />
      </div>} */}
      {/* {(this.props.type === "products") && <div className="formInput" >
        <label>Category</label>
        <Select
          styles={customStyles}
          options={decryptData(localStorage.getItem(process.env.REACT_APP_CATEGORIES_KEY)).map(option =>
          ({
            value: option.name,
            label: option.name
          }))}
          placeholder="Select Category" />
      </div>} */}

      {/* <Inputs type="user" setState={this.setState} state={this.state}/> */}

      {(this.props.type === "user") && <div className="formInput" >
        <label>Role</label>
        <Select
          styles={customStyles}
          options={roles}
          onChange={(e) => this.setState({
            inputs: {
              ...this.state.inputs,
              role: e.value
            }
          })}
        />
      </div>}
      {/* {(this.props.type === "restaurant" || this.props.type === "drivers") && <div className="formInput" >
        <label>{this.props.type === "drivers" ? "Driver" : "Manager"}</label>
        <Select
          styles={customStyles}
          options={decryptData(localStorage.getItem(process.env.REACT_APP_USERS_KEY)).map(option =>
          ({
            value: option.name,
            label: option.name
          }))}
          placeholder={this.props.type === "drivers" ? "Select driver" : "Select manager"} />
      </div>} */}
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
            className="tmp" />
        </div>
        <div className="tmpContainer">
          <label>Closing Time</label>
          <TimePicker
            className="tmp" />
        </div>
      </>}
      <button disabled={this.state.disabled} className="button" style={{ backgroundColor: this.state.button.color }}>{this.state.button.text}</button>
    </form>
  }
}
export default FormInput;
