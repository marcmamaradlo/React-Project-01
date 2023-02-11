import React, { useState } from 'react';

const SixSums = () => {

    let [state, setState] = useState({
        numOne: 0,
        numTwo: 0,
        numThree: 0,
        numFour: 0,
        numFive: 0,
        numSix: 0,
        answer: 0
    })

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleFunction();
    }

    const handleInput = (e) => {
        setState({ ...state, [e.target.name]: parseInt(e.target.value) })
    }

    const handleClearData = (e) => {
        setState({ ...state, [e.target.name]: '' })
    }

    const handleFunction = () => {
        setState({
            ...state, answer:
                state.numOne +
                state.numTwo +
                state.numThree +
                state.numFour +
                state.numFive +
                state.numSix
        })
    }

    // const handleFormReset = () => {
    //     setState({
    //         ...state, numOne: 0,
    //         numTwo: 0,
    //         numThree: 0,
    //         numFour: 0,
    //         numFive: 0,
    //         numSix: 0,
    //         answer: 0
    //     })
    // }

    // console.table(state)

    return (
        <section className='background-white'>
            <div className='container-lg'>
                <h3 className='font-weight-normal'><b>3.</b> Six Sums</h3>
                <h5 className='font-weight-normal'>Write a program to find the sum of six integers.</h5>
                <form onSubmit={handleFormSubmit}>
                    <div className='shadow-sm rounded p-3'>
                        <div className='row text-center'>
                            <div className='col-lg-2 col-md-4 col-sm-12'>
                                <label>1st Number:</label>
                                <input className='form-control'
                                    type='number'
                                    max={100}
                                    min={1}
                                    name='numOne'
                                    value={state.numOne}
                                    onChange={handleInput}
                                    onClick={handleClearData}
                                />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-12'>
                                <label>2nd Number:</label>
                                <input className='form-control'
                                    type='number'
                                    max={100}
                                    min={1}
                                    name='numTwo'
                                    value={state.numTwo}
                                    onChange={handleInput}
                                    onClick={handleClearData}
                                />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-12'>
                                <label>3rd Number:</label>
                                <input className='form-control'
                                    type='number'
                                    max={100}
                                    min={1}
                                    name='numThree'
                                    value={state.numThree}
                                    onChange={handleInput}
                                    onClick={handleClearData}
                                />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-12'>
                                <label>4th Number:</label>
                                <input className='form-control'
                                    type='number'
                                    max={100}
                                    min={1}
                                    name='numFour'
                                    value={state.numFour}
                                    onChange={handleInput}
                                    onClick={handleClearData}
                                />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-12'>
                                <label>5th Number:</label>
                                <input className='form-control'
                                    type='number'
                                    max={100}
                                    min={1}
                                    name='numFive'
                                    value={state.numFive}
                                    onChange={handleInput}
                                    onClick={handleClearData}
                                />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-12'>
                                <label>6th Number:</label>
                                <input className='form-control'
                                    type='number'
                                    max={100}
                                    min={1}
                                    name='numSix'
                                    value={state.numSix}
                                    onChange={handleInput}
                                    onClick={handleClearData}
                                />
                            </div>
                        </div>
                        <div className='row mt-3 text-center'>
                            <div className='col-6'>
                                <label className='col-6-form-label'>sum of all six integers: </label>
                            </div>
                            <div className='col-6'>
                                <input className='form-control'
                                    type='text'
                                    value={state.answer}
                                    readOnly />
                            </div>
                            <div className='col-12 mt-md-3 mt-sm-3'>
                                <button className='btn btn-secondary btn-block'>Check Sum</button>
                                {/* <button
                                    onClick={handleFormReset}>Reset Form</button> */}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SixSums;