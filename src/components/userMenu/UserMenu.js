import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { singOut } from '../../redux/actions/authorizationActions';

const UserMenu = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(singOut());
    }

    return (
        <div>
            {isAuth && <button type="button" onClick={handleLogout}>Logout</button>}
        </div>
    )
}

export default UserMenu
