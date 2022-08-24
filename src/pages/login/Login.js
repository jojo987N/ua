import { signInWithEmailAndPassword } from "firebase/auth"
import { useContext, useState } from "react"
import { auth, getRestaurantById, getRestaurantId } from "../../firebase"
import "./login.scss"
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "../../context/LoadingContext";
import { APP_CONSTANT } from "../../globals";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const {setLoading} = useContext(LoadingContext)
  
  
  const SignInUser = async (e)=>{

    e.preventDefault()

    
     
    try{
      const re = await signInWithEmailAndPassword(auth, email, password)
      //navigate("/")   
      setLoading(true)

      // getRestaurantById(re.user.uid).then(restaurant => setCurrentRestaurant(restaurant))
      // .then(()=> setLoading(false))
      
    }catch(err){
       
      
    err.message.includes("password")?setPasswordError(err.message.replace(/Firebase:|auth\//g,''))
     :setEmailError(err.message.replace(/Firebase:|auth\//g,''))
      // setEmailError(err.message.replace("Firebase:",'').replace("auth/:",''))
      // switch(err.code){
      //   case "auth/invalid-email":
      //   case "auth/user-not-found":
      //    setEmailError(err.message)
      //    break
      //   case "auth/wrong-password":
      //     setPasswordError(err.message)
        
      // }

    }
  }
  return (
    <section className="login">
       
      <div className="loginContainer" >
      
      <form onSubmit={SignInUser}>
        <label>{APP_CONSTANT.TEXT.USERNAME}</label>
        <input 
          type={"text"}
          autoFocus
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
        <p className="errorMsg">{emailError}</p>
        <label>{APP_CONSTANT.TEXT.PASSWORD}</label>
        <input 
          type={"password"}
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
          />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
        <button style={{backgroundColor: buttonStyle.backgroundColor, color: buttonStyle.color}}>{buttonStyle.text}</button>
         
          {/* <button type="submit">Sign In</button> */}
       
        
        </div>
         </form>

      </div>

    </section>
  )
}

export default Login