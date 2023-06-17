import "./register.css";

function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Sangsocial</h3>
                    <span className="loginDesc">Connect with friends and the world around you on Sangsocial</span>
                </div>
                <div className="loginRight">
                    <div className="registerBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Password again" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Log In</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
