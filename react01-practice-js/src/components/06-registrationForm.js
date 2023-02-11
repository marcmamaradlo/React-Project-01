import React, { useState } from 'react';

const RegistrationForm = ({ data }) => {
    console.table(data)
    return (
        <div>
            <fieldset>
                <legend>Registration Form:</legend>
                <div>
                    <div>
                        <label>Username:</label>
                    </div>
                    <div >
                        <input type="text" placeholder='Enter username' />
                    </div>
                </div>
                <div>
                    <div>
                        <label>Password:</label>
                    </div>
                    <div>
                        <input type='password' placeholder='Enter password' />
                    </div>
                </div>
                <div>
                    <div></div>
                    <div>
                        <button>Register Now</button>
                    </div>
                </div>
            </fieldset>
        </div>
    )
}

export default RegistrationForm;