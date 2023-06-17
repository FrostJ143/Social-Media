import axios from "axios";
import { LoginFailure, LoginStart, LoginSuccess } from "./context/AuthActions";

const loginCall = async (userCredentials, dispatch) => {
    try {
        dispatch(LoginStart());
        const user = await axios.post("/auth/login", userCredentials);
        dispatch(LoginSuccess(user));
    } catch (error) {
        dispatch(LoginFailure(error));
    }
};

export { loginCall };
