import Cookies from 'js-cookie';

const roles = ["admin", "editor", "user"];
const host = "http://127.0.0.1:8000";



let isAuthenticated = Cookies.get("isAuthenticated") === "true";

export { roles, isAuthenticated, host };