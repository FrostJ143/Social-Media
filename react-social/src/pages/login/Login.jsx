import "./login.css";
import axios from "axios";
import { useEffect } from "react";

function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Sangsocial</h3>
                    <span className="loginDesc">Connect with friends and the world around you on Sangsocial</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create New Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
