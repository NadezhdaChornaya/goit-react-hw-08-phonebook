import React from 'react'
import Authorization from '../../components/authorization/Authorization'

const RegisterPage = () => {
    return (
        <div>
            <Authorization />
        </div>
    )
}

export default RegisterPage







// import React, { useState } from 'react'

// const initialState = {
//     name: '',
//     email: '',
//     password: '',
// }

// const RegisterPage = () => {
//     const [state, setState] = useState({ ...initialState })

//     const handleChange = ((e) => {
//         console.log(e.target.value)
//         const { name, value } = e.target;
//         setState(prevState => ({ ...prevState, [name]: value }))
//     })

//     const handleSubmit = (e) => {
//         this.preventDefault()
//         console.log(state)

//     }
//     return (
//         <div>
//             <h1>Register page</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Name
//                 <input type='text'
//                         name='name'
//                         value={state.name}
//                         onChange={handleChange}
//                         placeholder='Enter your name' />
//                 </label>
//                 <label>
//                     Email
//                 <input type='email'
//                         name='email'
//                         value={state.email}
//                         onChange={handleChange}
//                         placeholder='Enter your email' />
//                 </label>
//                 <label>
//                     Password
//                 <input type='password'
//                         name='password'
//                         value={state.password}
//                         onChange={handleChange}
//                         placeholder='Enter your password' />
//                 </label>
//                 <button type="submit">SignUp</button>
//             </form>
//         </div>
//     )
// }

// export default RegisterPage

