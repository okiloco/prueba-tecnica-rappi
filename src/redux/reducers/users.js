import * as ActionTypes from "../../constants/actionTypes"
const Users = (state = {}, action = {}) => {
    switch (action.type) {
        case ActionTypes.START_GET_USERS:
            console.log("Get Users!")
            return {
                ...state,
                ...action.data
            };
            break;
        case ActionTypes.SUCCESS_GET_USERS:
            console.log("Get Users", action.data)
            return {
                ...state,
                data: action.data
            };
            break;
        case ActionTypes.SET_CURRENT_USER:
            console.log("Set User", action.user)
            return {
                ...state,
                user: action.user
            };
            break;
        default:
            return state;
            break;
    }
};
export default Users;
