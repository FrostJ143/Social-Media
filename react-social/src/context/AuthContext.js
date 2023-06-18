import { createContext } from "react";
import { useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INIT_STATE = {
    user: {
        _id: "648ea1f9a7206ef8cee240cf",
        username: "bin123",
        email: "bin123@gmail.com",
        password: "$2b$10$LJyEunQKdMgNovOXgcVx/OwOI3pI70S6adNJI1UYVjnfAAGJlzUzS",
        followers: [],
        following: [],
        isAdmin: false,
        profilePicture: "",
        coverPicture: "",
        createdAt: "2023-06-18T06:19:37.579Z",
        updatedAt: "2023-06-18T06:39:11.245Z",
        __v: 1,
    },
    isFetching: false,
    error: null,
};

export const AuthContext = createContext(INIT_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INIT_STATE);
    return (
        <AuthContext.Provider value={{ user: state.user, isFetching: state.isFetching, error: state.error, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
