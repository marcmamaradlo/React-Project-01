import React, { useState } from 'react';

import LoginForm from './05-loginForm';
// import RegistrationForm from './06-registrationForm';

const RegisterAndLogin = () => {

    let [userData, setUserData] = useState({
        username: '',
        password: '',
        regvalidation: '',
        logValidation: ''
    });

    const handleUsername = (e) => {
        setUserData({
            ...userData,
            username: e.target.value,
            regvalidation: ''
        })
    }

    const handlePassword = (e) => {
        setUserData({
            ...userData,
            password: e.target.value,
            regvalidation: ''
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleUsername(e);
        handlePassword(e);
        setUserData({
            ...userData,
            regvalidation: 'Registration Complete'
        });
    }

    // console.table(userData);
    return (


        <section className='background-white'>
            <div className='container-lg'>
                <h3 className='font-weight-normal'><b>5.</b> <b>6. </b>Register and Login</h3>
                <h5 className='font-weight-normal'>Create a Registration and Login form. Inform the user if the login was a success or not</h5>
                <h5 className='font-weight-normal'>Note: Do not use your real Username and Password</h5>
            </div>
            <div className='mt-5'>
                <div className='shadow rounded-lg p-3'>
                    <form onSubmit={handleFormSubmit}>
                        <fieldset className='p-3'>
                            <legend className='text-center'>Registration Form:</legend>
                            <div className='row'>
                                <div className='col-12'>
                                    <label className='col-form-label'>Username:</label>
                                </div>
                                <div className='col-12'>
                                    <input className='form-control'
                                        type="text"
                                        placeholder='Enter username'
                                        value={userData.username}
                                        onChange={handleUsername} />
                                </div>
                            </div>
                            <div className='row mt-5'>
                                <div className='col-12'>
                                    <label className='col-form-label'>Password:</label>
                                </div>
                                <div className='col-12'>
                                    <input className='form-control'
                                        type='password'
                                        placeholder='Enter password'
                                        value={userData.password}
                                        onChange={handlePassword} />
                                </div>
                            </div>
                            <div className='row mt-5'>
                                <div className="col-md-6">
                                    <p>{userData.regvalidation}</p>
                                </div>
                                <div className='col-md-6'>
                                    <button className='btn btn-secondary btn-block'>Register</button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <LoginForm data={userData} />
            </div>
        </section>
    )
}

export default RegisterAndLogin;