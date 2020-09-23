import React from 'react';
import { useSelector } from 'react-redux'
import propTypes from 'prop-types'
import User from './Users'
const UserList = ({ users = [] }) => {
    //const { data = users } = useSelector(state => state.data);
    return (<>
        <h2>List</h2>
        <React.Fragment>
            {
                users.map((it, index) => (<User key={index} {...it} />))
            }
        </React.Fragment>

    </>)
}
UserList.propTypes = {
    users: propTypes.arrayOf(propTypes.shape(
        {
            email: propTypes.string.isRequired,
            first_name: propTypes.string,
            last_name: propTypes.string,
        }
    ))
}
export default UserList