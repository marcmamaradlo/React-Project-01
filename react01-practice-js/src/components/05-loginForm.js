import React, { useState } from 'react';

const LoginForm = ({ data }) => {

    let [loginData, setLoginData] = useState({
        loginUsername: '',
        loginPassword: '',
        loginValidation: '',
        loginState: false
    })

    const handleUsername = (e) => {
        setLoginData({ ...loginData, loginUsername: e.target.value })
    }

    const handlePassword = (e) => {
        setLoginData({ ...loginData, loginPassword: e.target.value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (data.username === loginData.loginUsername && data.password === loginData.loginPassword) {
            setLoginData({
                ...loginData,
                loginValidation: `Welcome back, ${data.username}!`,
                loginState: true
            })
        }

        else {
            setLoginData({ ...loginData, loginValidation: 'Invalid Username or Password' })
        }
    }


    return (
        <div className='shadow rounded-lg p-3 mt-5'>
            <form onSubmit={handleFormSubmit}>
                <fieldset className='p-3'>
                    <legend className='text-center'>Login Form:</legend>
                    <div className='row'>
                        <div className='col-12'>
                            <label className='col-form-label'>Username:</label>
                        </div>
                        <div className='col-12'>
                            <input className='form-control'
                                type='text'
                                placeholder='Enter Username'
                                value={loginData.loginUsername}
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
                                placeholder='Enter Password'
                                value={loginData.loginPassword}
                                onChange={handlePassword} />
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-6 col-sm-12'>
                            <p>{loginData.loginValidation}</p>
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <button className='btn btn-secondary btn-block' type='submit'>Login</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>

    )
}

export default LoginForm;