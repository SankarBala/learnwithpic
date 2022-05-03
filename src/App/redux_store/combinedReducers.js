import { combineReducers } from "redux";
import UserReducer from './reducers/userReducer';

const CombinedReducer = combineReducers({
    user: UserReducer
});

export default CombinedReducer;
