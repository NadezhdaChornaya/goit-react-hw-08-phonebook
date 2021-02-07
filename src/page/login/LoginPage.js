import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";

const LoginPage = () => {
    const [state, setState] = useState({
        email: '',
        password: '',
    })

    const handleChange = (({ value, name }) => {
        setState({ [name]: value })
    })

    const handleSubmit = (e) => {
        this.preventDefault()

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                <input type='email'
                        name='email'
                        value={state.email}
                        onChange={handleChange}
                        placeholder='Enter email' />
                </label>
                <label>
                    Password
                <input type='password'
                        name='password'
                        value={state.password}
                        onChange={handleChange}
                        placeholder='Enter password' />
                </label>
            </form>
        </div>
    )
}

export default LoginPage
