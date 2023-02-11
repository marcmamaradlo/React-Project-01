import React, { useState } from 'react';

const Factorial = () => {

    let [data, setData] = useState({
        userInput: 0,
        answer: 0
    })

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleFunction()
    }

    const handleFunction = () => {
        let result = 1;
        for (let i = 1; i <= data.userInput; i++) {
            result *= i;
            console.log(result);
        }
        setData({
            ...data, answer: result
        });
    }

    const handleUserInput = (e) => {
        setData({ ...data, userInput: e.target.value })
    }

    // const handleFormReset = () => {
    //     setData({
    //         ...data,
    //         userInput: 0,
    //         answer: 0
    //     })
    // }

    // console.table(data);

    return (
        <section className='background-dark'>
            <div className='container-lg'>
                <h3 className='font-weight-normal'><b>4.</b> Factorial !</h3>
                <h5 className='font-weight-normal'>Write a JavaScript program to calculate the factorial value of
                    given number</h5>
                <div className='shadow rounded-lg p-3 form-white'>
                    <form onSubmit={handleFormSubmit}>
                        <div className='row'>
                            <div className='col-md-4 col-sm-6'>
                                <label className='col-form-label'>Enter a Number: </label>
                            </div>
                            <div className='col-md-8 col-sm-6'>
                                <input className='form-control'
                                    type='text'
                                    value={data.userInput}
                                    onChange={handleUserInput} />
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-md-4 col-sm-6'>
                                <label className='col-form-label'>The Factorial is: </label>
                            </div>
                            <div className='col-md-8 col-sm-6'>
                                <input className='form-control'
                                    type='text'
                                    readOnly
                                    value={data.answer} />
                            </div>
                            <div className='col-md-12 col-sm-12 mt-sm-3 mt-xs-3'>
                                <button className='btn btn-secondary btn-block'>Factorial!</button>
                                {/* <button onClick={handleFormReset}>Reset Form</button> */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Factorial;