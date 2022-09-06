import React from "react";

class FormInput extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }
    render() {
    //   return <div ref={this.myRef} />;
    
      return this.props.inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} 
                  placeholder={input.placeholder}
                  ref={"input"+input.id}
                  // onChange={e => setFormData(val => ({
                  //   ...val,
                  //   [input.alias] : e.target.value
                  // }))}
                  value={
                   // (userId && user[input.alias]) || 
                    // (itemId && itemId !== "profile" && (data[input.alias]))} 
                  //  itemId !== "profile"?data[input.alias]:input.placeholder} 

                  // itemId !== "profile"?data?data[input.alias]:"":formData[input.alias]
                  formData[input.alias]
                } 
                  />
                </div>
              ))
    

    }
  }
  export default FormInput;