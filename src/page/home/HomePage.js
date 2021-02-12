import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { DIV } from './styledHomePage';

const HomePage = () => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const img = 'https://cdn.pixabay.com/photo/2021/01/24/10/23/ashutosh-kaushik-5944749_1280.jpg'

    return (
        <DIV>
            <h1 className="mainTitle">Welcome to Phonebook</h1>
            <img src={img} alt="phone" width="350" className="img" />
            {!isAuth && (<div className="wrapper" >
                <div className="regWrapper">
                    <p className="text">Don't have an account?</p>
                    <Link className="linkHome" to="/register">
                        Pleace, sign up
                </Link>

                </div>
                <div className="regWrapper">
                    <p className="text">Do you have an account? </p>
                    <Link className="linkHome" to="/register">
                        Please, sign in
                </Link>

                </div>
            </div>)}
        </DIV>
    )
}

export default HomePage
