import { createStore } from "redux";
import CombinedReducer from "./combinedReducers";
import InitialStates from "./initialStates";

const Store = createStore(
    CombinedReducer,
    InitialStates,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default Store;
