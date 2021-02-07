import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import ContactForm from '../../components/contactForm/ContactForm';
import ContactList from '../../components/contactList/ContactList';
import Filter from '../../components/filter/Filter';
import { PhonebookWrapper } from '../../components/styledApp';


const ContactsPage = ({ contacts }) => {
    return (

        <PhonebookWrapper>
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
        </PhonebookWrapper >
    )
}

const mapStateToProps = (state) => {
    return { contacts: state.contacts.items };
}

export default connect(mapStateToProps)(ContactsPage)