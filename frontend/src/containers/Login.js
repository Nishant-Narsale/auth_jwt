import React, { useState } from 'react'
import { Link, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'


const Login = () => {

    const [formData , setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = FormData;

    const onChange = e => setFormData({...FormData, [e.target.name] : [e.target.value] });

    const onSubmit = e => {
        e.preventDefault();

        //Login(email, password)
    }

    return (
        <div className="container">
            <h1>Sign In</h1>
            <p>Sign into your account</p>

            <form onSubmit={e => onSubmit(e)}>
                <input 
                type="email" 
                name="email" 
                className="input-field" 
                value={email} 
                onChange={e => onChange(e)} 
                required 
                placeholder="Email" 
                />

                <input 
                type="password" 
                name="password" 
                className="input-field" 
                value={password} 
                onChange={e => onChange(e)} 
                required 
                placeholder="Password" 
                minLength="6" 
                />
                
                <button type="submit" className="submit-button">Submit</button>

            </form>

        </div>
    )
}

export default Login;
