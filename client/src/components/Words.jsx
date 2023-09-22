import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Words.css"

const Words = (props) => {
    const navigate = useNavigate()
    const {noun1, setNoun1} = props
    const {noun2, setNoun2} = props
    const {noun3, setNoun3} = props
    const {noun4, setNoun4} = props
    const {adjective1, setAdjective1} = props
    const {adjective2, setAdjective2} = props
    const {place, setPlace} = props
    const {pluralNoun1, setPluralNoun1} = props
    const {pluralNoun2, setPluralNoun2} = props
    const {number, setNumber} = props
    const {noise1, setNoise1} = props
    const {noise2, setNoise2} = props
    const {bodypart, setBodypart} = props

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('submitting')
        navigate('/story')
    }


return (
    <>

    <form className="Form" onSubmit={submitHandler}>
            <h1 className="text-center mx-auto mb-5">Welcome to Mad Libs</h1>
        <div className="w-25 mx-auto text-center">
            <div className="form-group">
                <label htmlFor="noun1">Noun #1</label>
                <input className="form-control" onChange={(e) => setNoun1(e.target.value)} type="text" id="noun1" name="noun1" />
            </div>
            <div>
                <label htmlFor="noun2">Noun #2</label>
                <input className="form-control" onChange={(e) => setNoun2(e.target.value)} type="text" id="noun2" name="noun2" />
            </div>
            <div>
                <label htmlFor="noun3">Noun #3</label>
                <input className="form-control" onChange={(e) => setNoun3(e.target.value)} type="text" id="noun3" name="noun3" />
            </div>
            <div>
                <label htmlFor="noun4">Noun #4</label>
                <input className="form-control" onChange={(e) => setNoun4(e.target.value)} type="text" id="noun4" name="noun4" />
            </div>
            <div>
                <label htmlFor="adjective1">Adjective #1</label>
                <input className="form-control" onChange={(e) => setAdjective1(e.target.value)} type="text" id="adjective1" name="adjective1" />
            </div>
            <div>
                <label htmlFor="adjective2">Adjective #2</label>
                <input className="form-control" onChange={(e) => setAdjective2(e.target.value)} type="text" id="adjective2" name="adjective2" />
            </div>
                <label htmlFor='plurnoun1'>Plural Noun #1</label>
                <input className="form-control" onChange={(e) => setPluralNoun1(e.target.value)} type='text' id='plurnoun1' name='plurnoun1' />
            <div>
                <label htmlFor='plurnoun2'>Plural Noun #2</label>
                <input className="form-control" onChange={(e) => setPluralNoun2(e.target.value)} type='text' id='plurnoun2' name='plurnoun2' />
            </div>
            <div>
                <label htmlFor='place'>Place</label>
                <input className="form-control" onChange={(e) => setPlace(e.target.value)} type='text' id='place' name='place' />
            </div>
            <div>
                <label htmlFor='number'>Number</label>
                <input className="form-control" onChange={(e) => setNumber(e.target.value)} type='text' id='number' name='number' />
            </div>
            <div>
                <label htmlFor='noise1'>Funny Noise #1</label>
                <input className="form-control" onChange={(e) => setNoise1(e.target.value)} type='text' id='noise1' name='noise1' />
            </div>
            <div>
                <label htmlFor='noise2'>Funny Noise #2</label>
                <input className="form-control" onChange={(e) => setNoise2(e.target.value)} type='text' id='noise2' name='noise2' />
            </div>
            <div>
                <label htmlFor='bodypart'>Body Part</label>
                <input className="form-control" onChange={(e) => setBodypart(e.target.value)} type='text' id='bodypart' name='bodypart' />
            </div>
        <button className="mt-5 mb-5" type="submit">MAD LIB</button>
        </div>
    </form>
    </>
    )
}

export default Words;