import { signInWithEmailAndPassword } from "firebase/auth"
import { useContext, useState } from "react"
import { auth } from "../../config"
import "./login.scss"
import { LoadingContext } from "../../context/LoadingContext";
import { APP_CONSTANT } from "../../globals";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { setLoading } = useContext(LoadingContext)


  const SignInUser = async (e) => {
    e.preventDefault()
    const re = await signInWithEmailAndPassword(auth, email, password)
    setLoading(true)
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
            type={APP_CONSTANT.TYPE.PASSWORD}
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <div className="btnContainer">
            <button>{APP_CONSTANT.TEXT.SIGN_IN}</button>
          </div>
        </form>

      </div>

    </section>
  )
}

export default Login