import "./login.css";
import { useRef, useContext } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

function Login() {
    const email = useRef();
    const password = useRef();

    const { user, isFetching, dispatch } = useContext(AuthContext);

    const handleSubmit = (e) => {
        loginCall({ email: email.current.value, password: password.current.value }, dispatch);
        e.preventDefault();
    };

    console.log(user);

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Sangsocial</h3>
                    <span className="loginDesc">Connect with friends and the world around you on Sangsocial</span>
                </div>
                <div className="loginRight">
                    <form onSubmit={handleSubmit} className="loginBox">
                        <input placeholder="Email" type="email" required className="loginInput" ref={email} />
                        <input placeholder="Password" type="password" required className="loginInput" ref={password} />
                        <button className="loginButton">{isFetching ? <CircularProgress color="inherit" /> : "Log In"}</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create New Account</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
