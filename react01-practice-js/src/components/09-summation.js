import React, { useState } from 'react';

const Summation = () => {

    let [input, setInput] = useState({
        input: 0,
        answer: '',
        array: []
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        handleInput(e);
        const array = input.array;
        for (let i = 1; i <= input.input; i++) {
            array.push(i);
        }
        let sum = 0;
        for (let j = 0; j < array.length; j++) {
            sum += array[j]
        }
        array.length = 0;
        setInput({
            ...input,
            input: '',
            answer: sum
        })
    }

    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: parseInt(e.target.value) })
    }

    return (
        <section className='background-dark'>
            <div className='container-lg'>
                <h3 className='font-weight-normal'><b>9.</b> Summation.</h3>
                <h5 className='font-weight-normal'>Write a program that finds the summation of the number input by the user. The
                    number will always be a positive integer
                    greater than 0.
                </h5>
                <div className='shadow rounded-lg p-3 form-white'>
                    <form onSubmit={handleSubmit}>
                        <div className='row text-center'>
                            <div className='col-sm-6 mt-2'>
                                <label className='col-form-label'>Enter a Number ( 1 - 100 ):</label>
                            </div>
                            <div className='col-sm-6 mt-2'>
                                <input className='form-control'
                                    type="number"
                                    min={1}
                                    max={100}
                                    name='input'
                                    value={input.input}
                                    onChange={handleInput} />
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-sm-6 text-center'>
                                <p>{input.answer}</p>
                            </div>
                            <div className='col-sm-6'>
                                <button className='btn btn-secondary btn-block' type='submit'>Summation</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Summation;