import React, { Suspense } from 'react';
import { contactsRoutes } from '../routes'
import { Switch, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { ThemeProvider } from 'styled-components'
import Layout from './header/Layout';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivetRoute';



const App = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);

    return (
        <>

            <Layout>
                <Suspense fallback=''>
                    <Switch>
                        {contactsRoutes.map(route => (
                            !route.isPrivate ?
                                < PublicRoute key={route.path} isAuth={isAuth} {...route} />
                                : <PrivateRoute key={route.path} isAuth={isAuth} {...route} />


                        ))}
                        <Redirect to="/" />
                    </Switch>
                </Suspense>
            </Layout>
        </>
    )
}


export default App

// const mapStateToProps = (state) => {
//     return { contacts: state.contacts.items };
// }



