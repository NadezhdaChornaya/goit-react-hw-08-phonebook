import React from 'react';
import { Link } from "react-router-dom";
import { DIV } from './styledHomePage';

const HomePage = () => {
    const img = 'https://icon-library.net//images/phone-contacts-icon/phone-contacts-icon-18.jpg'

    return (
        <DIV>
            <h1 className="mainTitle">Welcome to Phonebook</h1>
            <img src={img} width="350" className="img" />
            <div className="wrapper" >
                <div className="regWrapper">
                    <p className="text">Don't have an account?</p>
                    <Link className="link" to="/register">
                        Pleace, sign up
                </Link>

                </div>
                <div className="regWrapper">
                    <p className="text">Do you have an account? </p>
                    <Link className="link" to="/register">
                        Please, sign in
                </Link>

                </div>
            </div>
        </DIV>
    )
}

export default HomePage
