import React from 'react'
import { connect } from 'react-redux'
import * as actionTypes from "../constants/actionTypes"
import UserList from '../pages/users/UserList'
const Users = ({ data }) => (
    <>
        {<UserList users={data} />}
    </>
);
const mapStateToProps = state => {
    return {
        ...state.data
    }
}
const mapDispatchToProps = dispatch => ({
    onUserList: params => dispatch({ type: actionTypes.SUCCESS_GET_USERS, params })
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);
