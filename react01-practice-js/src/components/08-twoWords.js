import React, { useState } from 'react';

const TwoWords = () => {

    let [input, setInput] = useState({
        input: '',
        answer: ''
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleInput(e);
        const newWord = input.input;
        const split = newWord.split(' ');
        const firstWord = split[0];
        const secondWord = split[1];
        const firstSlice = firstWord.charAt(0).toUpperCase().slice(0);
        const secondSlice = secondWord.charAt(0).toUpperCase().slice(0);
        setInput({ ...input, answer: `${firstSlice}.${secondSlice}` })
    }

    const handleInput = (e) => [
        setInput({ ...input, input: e.target.value })
    ]

    return (
        <section className='background-white'>
            <div className='container-lg'>
                <h3 className='font-weight-normal'><b>8.</b> Two Words</h3>
                <h5 className='font-weight-normal'>Write a function to convert a name (ex: John Doe) into initials (ex: J. D.).
                    You can assume that the program takes in two words with one space in between them.</h5>
                <h5 className='font-weight-normal'>The output should be two capital letters with a dot separating them.</h5>
                <div className='shadow rounded-lg p-3'>
                    <form onSubmit={handleFormSubmit}>
                        <div className='row text-center'>
                            <div className='col-6 mt-2'>
                                <label className='col-form-label'>Enter two words:</label>
                            </div>
                            <div className='col-6 mt-2'>
                                <input className='form-control'
                                    type="text"
                                    name='input'
                                    value={input.input}
                                    onChange={handleInput} />
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-6 text-center'>
                                <p>{`The Output is: ${input.answer}`}</p>
                            </div>
                            <div className='col-6'>
                                <button className='btn btn-secondary btn-block' type='submit'>Check</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default TwoWords;