import React from "react";
import { NavLink } from "react-router-dom";
import { contactsRoutes } from "../../routes";

const Navigation = () => {
    return (
        <div>
            <>
                <ul className="navigationList">
                    {contactsRoutes.map(({ path, name, exact }) => (
                        <li key={path} className="navigationItem">
                            <NavLink exact={exact} to={path} className="navigation-link"
                                activeClassName="navigation-link-active">
                                {name}
                            </NavLink>
                        </li>
                    )
                    )}
                </ul>
            </>
        </div>
    )
}

export default Navigation
