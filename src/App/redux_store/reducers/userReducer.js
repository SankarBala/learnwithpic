import Cookies from "js-cookie";

const UserReducer = (state, { type, payload }) => {

    switch (type) {
        case "login":
            return {
                ...state,
                isAuthenticated: payload.authorized,
                token: payload.token,
                user_id: payload.user.id,
                name: payload.user.name,
                email: payload.user.email
            }

        case "token":
            return {
                ...state,
                token: payload
            }

        case "retrieve":
            return {
                ...state,
                user_id: payload.user.id,
                name: payload.user.name,
                email: payload.user.email
            }

        case "notLogged":
            return {
                ...state,
                isAuthenticated: false,
            }

        case "loggout":
            Cookies.remove("token");
            return { isAuthenticated: false }

        default:
            return { ...state }
    }

};

export default UserReducer;
