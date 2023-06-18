import axios from "axios";
import { LoginFailure, LoginStart, LoginSuccess } from "./context/AuthActions";

const loginCall = async (userCredentials, dispatch) => {
    try {
        dispatch(LoginStart());
        const res = await axios.post("/auth/login", userCredentials);
        console.log(res.data);
        dispatch(LoginSuccess(res.data));
    } catch (error) {
        dispatch(LoginFailure(error));
    }
};

const registerCall = async (userCredentials) => {
    try {
        await axios.post("/auth/register", userCredentials);
    } catch (error) {
        console.log(error);
    }
};

const toggleLikePostCall = async (postID, userID) => {
    try {
        const res = await axios.put(`/posts/${postID}/like`, { userID: userID });
    } catch (error) {
        console.log(error);
    }
};

export { loginCall, registerCall, toggleLikePostCall };
