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

            {/* <PhonebookWrapper>
                <CSSTransition
                    in={true}
                    appear={true}
                    classNames="titleSlide"
                    timeout={500}
                    unmountOnExit
                >
                    <h1 className="mainTitle">Phonebook</h1>
                </CSSTransition>
                <ContactForm />
                <h2 className="title">Contacts</h2>
                <CSSTransition
                    in={contacts.length > 1}
                    classNames="filterSlide"
                    timeout={500}
                    unmountOnExit>
                    <Filter />
                </CSSTransition>
                {contacts.length > 0 && (<CSSTransition
                    in={true}
                    appear={true}
                    classNames="titleSlide"
                    timeout={500}
                    unmountOnExit>
                    <ContactList contacts={contacts} />
                </CSSTransition>)}
            </PhonebookWrapper > */}
        </>
    )
}

// const mapStateToProps = (state) => {
//     return { contacts: state.contacts.items };
// }

export default App


// import { CSSTransition } from 'react-transition-group';
// import { connect } from 'react-redux';
// import ContactForm from './contactForm/ContactForm';
// import ContactList from './contactList/ContactList';
// import Filter from './filter/Filter';
// import { PhonebookWrapper } from './styledApp';