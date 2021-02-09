import React from 'react'
import Authorization from '../../components/authorization/Authorization'

const LoginPage = () => {
    return (
        <div>
            <Authorization />
        </div>
    )
}

export default LoginPage










// import React, { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from "react-redux";

// const LoginPage = () => {
//     const [state, setState] = useState({
//         email: '',
//         password: '',
//     })

//     const handleChange = ((e) => {
//         const { name, value } = e.target;
//         setState(prevState => ({ ...prevState, [name]: value }))
//     })

//     const handleSubmit = (e) => {
//         this.preventDefault()

//     }
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Email
//                 <input type='email'
//                         name='email'
//                         value={state.email}
//                         onChange={handleChange}
//                         placeholder='Enter email' />
//                 </label>
//                 <label>
//                     Password
//                 <input type='password'
//                         name='password'
//                         value={state.password}
//                         onChange={handleChange}
//                         placeholder='Enter password' />
//                 </label>
//                 <button type="submit">SignIn</button>
//             </form>
//         </div>
//     )
// }

// export default LoginPage

