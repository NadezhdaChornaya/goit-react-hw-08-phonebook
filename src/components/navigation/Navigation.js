import React from "react";
import { useSelector } from 'react-redux';
import { contactsRoutes } from "../../routes";
import { Ul } from "./styledNavigation";
import NavigationItem from "./NavigationItem";

const Navigation = () => {
    const isAuth = useSelector(state => state.auth.isAuth)
    return (
        <div>

            <Ul>
                {contactsRoutes.map((route) => (
                    <NavigationItem {...route} isAuth={isAuth} key={route.path} />
                )
                )}
            </Ul>

        </div>
    )
}

export default Navigation
