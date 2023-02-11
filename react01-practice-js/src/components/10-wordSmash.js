import React, { useState } from 'react';

const WordSmash = () => {

    let [data, setData] = useState({
        firstWord: '',
        secondWord: '',
        thirdWord: '',
        fourthWord: '',
        fifthWord: '',
        sixthWord: '',
        array: []
    })

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleFunction();
    }

    const handleFunction = () => {
        setData({
            ...data,
            array: [
                data.firstWord,
                data.secondWord,
                data.thirdWord,
                data.fourthWord,
                data.fifthWord,
                data.sixthWord
            ]
        });
    }

    const handleInputChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const onClickChange = (e) => {
        setData({ ...data, [e.target.name]: '' })
    }

    // const handleFormReset = () => {
    //     setData({
    //         ...data,
    //         firstWord: '',
    //         secondWord: '',
    //         thirdWord: '',
    //         fourthWord: '',
    //         fifthWord: '',
    //         sixthWord: ''
    //     })
    // }

    return (
        <section className='background-white'>
            <div className='container-lg'>
                <h3 className='font-weight-normal'><b>10.</b> Word Smash</h3>
                <h5 className='font-weight-normal'>Write a program that takes an array of words and smashes them together
                    into a sentence and returns the sentence.
                    You can ignore any need to sanitize words or add punctuation, but you should add spaces between each
                    word.</h5>
                <form onSubmit={handleFormSubmit}>
                    <div className='shadow rounded-lg p-3'>
                        <div className='row mt-5'>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <label>1st Word:</label>
                                <input className='form-control'
                                    type="text"
                                    name="firstWord"
                                    value={data.firstWord}
                                    onChange={handleInputChange}
                                    onClick={onClickChange} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <label>2nd Word:</label>
                                <input className='form-control'
                                    type="text"
                                    name="secondWord"
                                    value={data.secondWord}
                                    onChange={handleInputChange}
                                    onClick={onClickChange} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <label>3rd Word:</label>
                                <input className='form-control'
                                    type="text"
                                    name="thirdWord"
                                    value={data.thirdWord}
                                    onChange={handleInputChange}
                                    onClick={onClickChange} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <label>4th Word:</label>
                                <input className='form-control'
                                    type="text"
                                    name="fourthWord"
                                    value={data.fourthWord}
                                    onChange={handleInputChange}
                                    onClick={onClickChange} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <label>5th Word:</label>
                                <input className='form-control'
                                    type="text"
                                    name="fifthWord"
                                    value={data.fifthWord}
                                    onChange={handleInputChange}
                                    onClick={onClickChange} />
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <label>6th Word:</label>
                                <input className='form-control'
                                    type="text"
                                    name="sixthWord"
                                    value={data.sixthWord}
                                    onChange={handleInputChange}
                                    onClick={onClickChange} />
                            </div>
                        </div>
                        <div className='row text-center'>
                            <div className='col-md-6 col-sm-12 mt-md-3 mt-sm-3'>
                                <div className='form-control-plaintext'>
                                    <p>{data.array.join(' ')}</p>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 mt-md-3 mt-sm-3'>
                                <button className='btn btn-secondary btn-block' type="submit">Smash!</button>
                                {/* <button className='btn btn-secondary btn-block' onClick={handleFormReset}>Reset Form</button> */}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default WordSmash;