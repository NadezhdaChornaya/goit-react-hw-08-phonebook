import React from 'react';
import { NavLink } from "react-router-dom";

const NavigationItem = ({ isAuth, path, name, exact, isPrivate, restricted }) => {
    return (
        <>
            {!isPrivate && !restricted && (<li key={path} className="navigationItem">
                <NavLink exact={exact} to={path} className="navigation-link"
                    activeClassName="navigation-link-active">
                    {name}
                </NavLink>
            </li>)}
            {isAuth && isPrivate && !restricted && (<li key={path} className="navigationItem">
                <NavLink exact={exact} to={path} className="navigation-link"
                    activeClassName="navigation-link-active">
                    {name}
                </NavLink>
            </li>)}
            {!isAuth && !isPrivate && restricted && (<li key={path} className="navigationItem">
                <NavLink exact={exact} to={path} className="navigation-link"
                    activeClassName="navigation-link-active">
                    {name}
                </NavLink>
            </li>)}
        </>
    )
}

export default NavigationItem
