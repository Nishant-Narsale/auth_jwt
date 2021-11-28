import React, { Fragment, useState } from 'react'
import {Link,Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {logout} from '../actions/auth';

const Navbar = ({isAuthenticated, logout}) => {
    const [redirect, setRedirect] = useState(false);

    const logout_handler = () => {
        logout();
        setRedirect(true);
    };


    const guestLinks = () => {
        return(
            <Fragment>
                <li className='nav-item'>
                    <Link className='nav-link' to='/login'>Login</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/signup'>Sign Up</Link>
                </li>
            </Fragment>
        )
    }

    const authLinks = () => {
        return(
            <li className='nav-item'>
                <a href="#!" className='nav-link' onClick={logout_handler}>Logout</a>
            </li>
        )
    }

    return (
        <Fragment>
            <div className="container">
                <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                    <Link className='navbar-brand' to='/'>Auth System</Link>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav'>
                            <li className='nav-item active'>
                                <Link className='nav-link' to='/'>Home</Link>
                            </li>
                            {isAuthenticated ? authLinks() : guestLinks()}
                        </ul>
                    </div>
                </nav>
            </div>
        {redirect ? <Redirect to="/" /> : <Fragment></Fragment>}
        </Fragment>
    )
}

const mapStateToProps = state => ({
    isAuthenticated : state.auth.isAuthenticated
});

export default connect(mapStateToProps,{logout})(Navbar);
