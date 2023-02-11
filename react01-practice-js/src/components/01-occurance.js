import React, { useState } from "react";

const Occurance = () => {

    let [formData, setFormData] = useState({
        userInput: '',
        characterToCheck: '',
        answer: 0
    })

    const onFormSubmit = (e) => {
        e.preventDefault();
        handleInput(e);
        handleFunction(formData.userInput, formData.characterToCheck)
    }

    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleFunction = () => {
        const userInput = formData.userInput;
        const characterToCheck = formData.characterToCheck;
        let number = 0;
        for (let i = 0; i < userInput.length; i++) {
            if (userInput.charAt(i) === characterToCheck) {
                number++;
            }
            setFormData({ ...formData, answer: number })
            if (number === 0) {
                setFormData({
                    ...formData, answer: 'Sorry, Non Found'
                })
            }
        }

    }

    const handleResetForm = () => {
        setFormData({
            ...formData,
            userInput: '',
            characterToCheck: '',
            answer: ''
        })
    }

    // console.table(formData)

    return (
        <section className="background-white">
            <div className="container-lg">
                <h3 className="font-weight-normal"><b>1. </b>Occurence</h3>
                <h5 className="font-weight-normal mt-3">Check the occurence of a character in the user input.</h5>
                <div className="p-3 rounded-lg shadow-sm">
                    <form onSubmit={onFormSubmit}>
                        <div className="row mt-5">
                            <div className="col-lg-9 col-md-6 col-sm-12">
                                <label className="col-form-label" htmlFor='userInput'>Enter a word or sentence</label>
                                <input className="form-control"
                                    type='text'
                                    id='userInput'
                                    name='userInput'
                                    onChange={(e) => handleInput(e)}
                                    value={formData.userInput}
                                />
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <label className="col-form-label" htmlFor='characterToCheck'>Enter a character to check</label>
                                <input className="form-control"
                                    type='text'
                                    id='characterToCheck'
                                    name='characterToCheck'
                                    onChange={(e) => handleInput(e)}
                                    value={formData.characterToCheck}
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-4 col-md-6 col-sm-12 mt-sm-3">
                                <input className="form-control" type='text' readOnly value={formData.answer} />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mt-sm-3">
                                <button className="btn btn-secondary btn-block" type='submit'>Check</button>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mt-sm-3">
                                <button className="btn btn-secondary btn-block" onClick={handleResetForm}>Reset Form</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default Occurance;