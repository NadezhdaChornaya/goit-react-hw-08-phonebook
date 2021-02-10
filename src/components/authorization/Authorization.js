import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import { singUpOperation, singInOperation } from '../../redux/operations/authOperanions';
import { DIV } from './styledAuth';

const initialState = {
    email: '',
    password: '',
}

const Authorization = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const [state, setState] = useState({ ...initialState });

    const handleChange = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (location.pathname === '/register') { dispatch(singUpOperation(state)) }
        else dispatch(singInOperation(state))
    }

    return (
        <DIV>
            <h1 className="TitleAuth">Register page</h1>
            <form onSubmit={handleSubmit}>

                <label>
                    Email
                <input type='email'
                        name='email'
                        value={state.email}
                        onChange={handleChange}
                        placeholder='Enter your email' />
                </label>
                <label>
                    Password
                <input type='password'
                        name='password'
                        value={state.password}
                        onChange={handleChange}
                        placeholder='Enter your password' />
                </label>
                <button type="submit">{location.pathname === '/register' ? 'SignUp' : 'SignIn'}</button>
            </form>
        </DIV>
    )
}

export default Authorization

