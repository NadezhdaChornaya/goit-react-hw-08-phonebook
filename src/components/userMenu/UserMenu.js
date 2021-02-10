import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { singOut } from '../../redux/actions/authorizationActions';
import { DIV } from './styledUserMenu';

const UserMenu = () => {
    const avatar = 'https://icon-library.com/images/141782.svg.svg'
    const isAuth = useSelector((state) => state.auth.isAuth);
    const email = useSelector((state) => state.auth.email);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(singOut());
    }

    return (
        <>
            {isAuth && (<DIV>
                <img src={avatar} alt='avatar' width='32' />
                <p className="TitleNav">Welcome,{email}</p>
                <button type="button" className="ButtonNav" onClick={handleLogout}>Logout</button>
            </DIV>)}
        </>
    )
}

export default UserMenu
