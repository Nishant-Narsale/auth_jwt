import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {verify} from '../actions/auth';

const Activate = ({verify , match}) => {
    const [submitted, setSubmitted] = useState(false)

    const verify_account = e => {
        e.preventDefault();
        const uid = match.params.uid;
        const token = match.params.token;

        verify(uid, token);
        setSubmitted(true);
    }

    if (submitted) {
        return(
            <Redirect to='/' />
        )
    }

    return (
        <div className='container'>
            <div 
                className='d-flex flex-column justify-content-center align-items-center'
                style={{ marginTop: '200px' }}
            >
                <h1>Verify your Account:</h1>
                <button
                    onClick={verify_account}
                    style={{ marginTop: '50px' }}
                    type='button'
                    className='btn btn-primary'
                >
                    Verify
                </button>
            </div>
        </div>
    )
}

export default connect(null, { verify })(Activate);
