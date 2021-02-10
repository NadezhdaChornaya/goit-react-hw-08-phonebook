import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ path, exact, component, restricted, isAuth }) => {
    return isAuth && restricted ?
        (<Redirect to='/contacts' />) :
        (
            <div>
                <Route path={path} exact={exact} component={component} />
            </div>
        )
}

export default PublicRoute
