import React, { useState, useEffect } from 'react';
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
            <h1 className="mainTitle">{location.pathname === '/register' ? 'Register page' : 'Login page'}</h1>
            <form onSubmit={handleSubmit} className='formAuth wrapper'>

                <label className='labelAuth'>
                    Email
                <input type='email'
                        name='email'
                        value={state.email}
                        onChange={handleChange}
                        placeholder='Enter your email'
                        className='inputAuth' />
                </label>
                <label className='labelAuth'>
                    Password
                <input type='password'
                        name='password'
                        value={state.password}
                        onChange={handleChange}
                        placeholder='Enter your password'
                        className='inputAuth' />
                </label>
                <button type="submit" className='buttonAuth'>{location.pathname === '/register' ? 'SignUp' : 'SignIn'}</button>
            </form>
        </DIV>
    )
}

export default Authorization

