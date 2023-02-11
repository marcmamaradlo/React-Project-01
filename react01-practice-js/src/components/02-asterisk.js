import React, { useState } from "react";

const Asterisk = () => {

    let [formData, setFormData] = useState({
        height: 0,
        width: 0,
        asterisk: [],
        finalArray: []
    })

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleInput(e);
        handleFunction()
    }

    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleFunction = () => {
        const width = formData.width;
        const height = formData.height;
        const arrayWidth = [];
        const newArray = [];

        for (let i = 0; i < width; i++) {
            arrayWidth.push('#');
        }
        setFormData({ ...formData, asterisk: arrayWidth })

        for (let j = 0; j < height; j++) {
            newArray.push(arrayWidth)
        }
        setFormData({ ...formData, finalArray: newArray })
    }

    // const handleFormReset = () => {
    //     setFormData({
    //         ...formData,
    //         height: 0,
    //         width: 0,
    //         asterisk: [],
    //         finalArray: []
    //     })
    // }

    // console.table(formData)

    return (
        <section className="background-dark">
            <div className='container-lg'>
                <h3 className="font-weight-normal"><b>2. </b>Asterisk '*'</h3>
                <h5 className="font-weight-normal">White a function that will print a box of '#', taking from the user the height and width.</h5>
                <div className="background-white p-3 rounded-lg">
                    <form onSubmit={handleFormSubmit}>
                        <div className="row mt-5">
                            <div className="col-lg-6 col-sm-12">
                                <label className="col-form-label text-black">Enter width</label>
                                <input className="form-control"
                                    type='number'
                                    max={10} min={1}
                                    name='width'
                                    onChange={handleInput}
                                    value={formData.width}
                                />
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <label className="col-form-label text-blac">Enter height</label>
                                <input className="form-control"
                                    type='number'
                                    max={10} min={1}
                                    name='height'
                                    onChange={handleInput}
                                    value={formData.height}
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12">
                                <button className="btn btn-secondary btn-block" type='submit'>Submit</button>
                                {/* <button onClick={handleFormReset}>Reset Form</button> */}
                            </div>
                        </div>
                        <div className="row mt-3 align-items-center">
                            <div className="col text-center text-black">
                                {formData.finalArray.map((item, i) => (
                                    <p key={i}>{item}</p>
                                ))}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Asterisk;