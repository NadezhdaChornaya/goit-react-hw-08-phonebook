import React from 'react';
// import { CSSTransition } from 'react-transition-group';
// import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import ContactsPage from '../page/contacts/ContactsPage';
import RegisterPage from '../page/register/RegisterPage'
import LoginPage from '../page/login/LoginPage'

// import ContactForm from './contactForm/ContactForm';
// import ContactList from './contactList/ContactList';
// import Filter from './filter/Filter';
// import { PhonebookWrapper } from './styledApp';


const App = () => {
    return (
        <>
            <Route path='/register' component={RegisterPage}></Route>
            <Route path='/login' component={LoginPage}></Route>
            <Route path='/contacts' component={ContactsPage}></Route>
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


