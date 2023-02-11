import React, { useState } from 'react';

const Palindrome = () => {

    let [input, setInput] = useState({
        input: '',
        answer: ''
    })

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleInput(e);
        const reverse = input.input.split('').reverse().join('');

        if (input.input === '') {
            setInput({ ...input, answer: 'Sorry, Please enter a word' })
        }

        else if (reverse === input.input) {
            setInput({
                ...input,
                input: '',
                answer: 'Palindrome!'
            })
        }

        else {
            setInput({ ...input, answer: 'Not a Palindrome, Sorry try again.' })
        }
    }

    const handleInput = (e) => {
        setInput({ ...input, input: e.target.value })
    }

    return (
        <section className='background-dark mt-5 mb-5'>
            <div className='container-lg'>
                <h3 className='font-weight-normal'><b>7.</b> Palindrome</h3>
                <h5 className='font-weight-normal'>Write a prgram that asks a user for a word and check if it's a Palindrome or
                    not.</h5>
                <div className='shadow rounded-lg p-3 form-white'>
                    <form onSubmit={handleFormSubmit}>
                        <div className='row text-center'>
                            <div className='col-sm-6 mt-3'>
                                <label className='col-form-label'>GIve me a Palindrome</label>
                            </div>
                            <div className='col-sm-6 mt-3'>
                                <input className='form-control'
                                    type="text"
                                    name='input'
                                    value={input.input}
                                    onChange={handleInput} />
                            </div>
                        </div>
                        <div className='row mt-3 text-center'>
                            <div className='col-sm-6'>
                                <p>{input.answer}</p>
                            </div>
                            <div className='col-sm-6'>
                                <button className='btn btn-secondary btn-block' type="submit">Palindrome</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Palindrome;