import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {reset_password_confirm} from '../actions/auth';

const ResetPasswordConfirm = ({match,reset_password_confirm}) => {
    const [redirect, setRedirect] = useState(false);

    const [formData , setFormData] = useState({
        new_password: '',
        re_new_password: ''
    })

    const { new_password, re_new_password } = formData;

    const onChange = e => setFormData({...formData, [e.target.name] : e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        const uid = match.params.uid;
        const token = match.params.token;
        reset_password_confirm(uid, token, new_password, re_new_password);
        setRedirect(true);
    }

    if (redirect) {
        return(
            <Redirect to='/' />
        )
    }

    return (
        <div className='container mt-5'>
            <h1>Reset Password</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group mt-2'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='New Password'
                        name='new_password'
                        value={new_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <div className='form-group mt-2'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Confirm New Password'
                        name='re_new_password'
                        value={re_new_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary mt-2' type='submit'>Continue</button>
            </form>
        </div>
    )
}


export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
