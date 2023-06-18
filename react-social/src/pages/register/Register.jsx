import { useRef } from "react";
import "./register.css";
import { registerCall } from "../../apiCalls";
import { useNavigate, Navigate } from "react-router-dom";

function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Password don't match!");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            registerCall(user);
            navigate("/login");
        }
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Sangsocial</h3>
                    <span className="loginDesc">Connect with friends and the world around you on Sangsocial</span>
                </div>
                <div className="loginRight">
                    <form className="registerBox" onSubmit={handleSubmit}>
                        <input placeholder="Email" className="loginInput" ref={email} required type="email" />
                        <input placeholder="Username" className="loginInput" ref={username} required type="text" />
                        <input placeholder="Password" className="loginInput" ref={password} required type="password" />
                        <input placeholder="Password again" className="loginInput" ref={passwordAgain} required type="password" />
                        <button className="loginButton" type="submit">
                            Sign Up
                        </button>
                        <button className="loginRegisterButton">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
