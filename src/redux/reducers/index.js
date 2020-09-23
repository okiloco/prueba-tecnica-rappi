import { combineReducers } from "redux";
import Users from './users'

const rooReducer = combineReducers({
    data: Users
});
export default rooReducer;
