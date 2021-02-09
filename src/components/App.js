import React, { Suspense } from 'react';
import { contactsRoutes } from '../routes'
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './header/Layout';



const App = () => {

    return (
        <>

            <Layout>
                <Suspense fallback=''>
                    <Switch>
                        {contactsRoutes.map(route => (
                            <Route key={route.path} {...route} />
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



