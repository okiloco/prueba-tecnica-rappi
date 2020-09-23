import React from 'react';
import propTypes from 'prop-types'

const Users = ({ _id, email, first_name, last_name }) => {
    return (<div key={_id}>
        <div>{email}</div>
        <div>{first_name}</div>
        <div>{last_name}</div>
    </div>)
}
Users.propTypes = {
    email: propTypes.string.isRequired,
    first_name: propTypes.string,
    last_name: propTypes.string,
}
export default Users