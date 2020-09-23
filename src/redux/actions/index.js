import * as actionTypes from "../../constants/actionTypes";
export const startGetUsers = params => ({
    type: actionTypes.START_GET_USERS,
    ...params
})
export const successGetUsers = params => ({
    type: actionTypes.SUCCESS_GET_USERS,
    ...params
})
export const getCurrentUsers = params => ({
    type: actionTypes.GET_CURRENT_USER,
    ...params
})
export const setCurrentUser = user => ({
    type: actionTypes.SET_CURRENT_USER,
    user
})