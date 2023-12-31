export const LoginStart = () => {
    return { type: "LOGIN_START" };
};

export const LoginSuccess = (user) => {
    return { type: "LOGIN_SUCCESS", payload: user };
};

export const LoginFailure = (error) => {
    return { type: "LOGIN_FAILURE", payload: error };
};

export const Follow = (userID) => {
    return { type: "FOLLOW", payload: userID };
};

export const Unfollow = (userID) => {
    return { type: "UNFOLLOW", payload: userID };
};
