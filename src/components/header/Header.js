import React from 'react';
import { useSelector } from 'react-redux'

const Header = props => {
    const { user } = useSelector(state => state.data)
    return (<>
        {user && <span>Wellcome {user.first_name || user.email.substring(0, user.email.indexOf("@"))}</span>}
    </>)
}

export default Header;