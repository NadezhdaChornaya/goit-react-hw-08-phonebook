import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { contactsRoutes } from "../../routes";
import { Ul } from "./styledNavigation";

const Navigation = () => {
    const isAuth = useSelector(state => state.auth.isAuth)
    return (
        <div>

            <Ul>
                {contactsRoutes.map(({ path, name, exact, isPrivate, restricted }) => (
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
                )}
            </Ul>

        </div>
    )
}

export default Navigation
