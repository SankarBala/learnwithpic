import axios from 'axios';
import { host } from './config';
import Store from "./redux_store/store";

const api = (custom_token) => {
    let token = custom_token || Store.getState().user.token;
    axios.defaults.baseURL = `${host}/api`;
    axios.defaults.headers.common = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
    }
    return axios;
}

export default api;
