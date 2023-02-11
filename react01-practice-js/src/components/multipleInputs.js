import React, { useState } from 'react';

const MultipleInputs = () => {

    let [input, setInput] = useState({
        username: '',
        password: '',
        email: ''
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleInputs(e)
        console.table(input);
    }

    const handleInputs = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Username:</label>
                <input type='text'
                    name='username'
                    placeholder='Enter Username'
                    value={input.username}
                    onChange={handleInputs}
                />
                <label>Password:</label>
                <input type='text'
                    name='password'
                    placeholder='Enter Password'
                    value={input.password}
                    onChange={handleInputs}
                />
                <label>E-Mail:</label>
                <input type='text'
                    name='email'
                    placeholder='Enter Email'
                    value={input.email}
                    onChange={handleInputs}
                />
                <button type='submit'>Change the State!</button>
            </form>
        </div>
    )
}

export default MultipleInputs;