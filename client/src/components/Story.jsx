import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const Story = (props) => {
    const navigate = useNavigate()
    const {noun1} = props
    const {noun2} = props
    const {noun3} = props
    const {noun4} = props
    const {adjective1} = props
    const {adjective2} = props
    const {place} = props
    const {pluralNoun1} = props
    const {pluralNoun2} = props
    const {number} = props
    const {noise1} = props
    const {noise2} = props
    const {bodypart} = props

    useEffect(() => {
        if (noun1 === '' || noun2 === '' || noun3 === '' || noun4 === '' || adjective1 === '' || adjective2 === '' || place === '' || pluralNoun1 === '' || pluralNoun2 === '' || number === '' || noise1 === '' || noise2 === '' || bodypart === '') {
            navigate('/')
        }
    }, [])


    return (
        <div>
            <h1 className="text-center">Bowling</h1>

            <p className="w-50 mx-auto text-center">
            Almost every community in America now has a bowling <strong>{place + ' '}</strong>
            because bowling has become very <strong>{adjective1 + ' '}</strong>, with 
            young <strong>{pluralNoun1}</strong>. Most of them become very <strong>{adjective2 + ' '}</strong>
            at the game. The main object of the game is to roll a heavy 
            bowling <strong>{noun1}</strong>. down the alley and knock down the <strong>{number + ' '}</strong> pins
            which are at the other end. If you knock them down in one roll, it's
            called a <strong>{noise1 + ' '}</strong>. If it takes two rolls, it's called
            a <strong>{noise2 + ' '}</strong>. Many alleys have automatic <strong>{noise2 + ' '}</strong>
            setters. Others hire <strong>{pluralNoun2 + ' '}</strong>. who set the pins by <strong>{noun3 + ' '}</strong>.
            The most important thing to remember when bowling is to make
            sure you have a good grip on the <strong>{noun4}</strong>. or you're liable to
            drop it on your <strong>{bodypart + ' '}</strong>!
            </p>
        </div>
    )
}

export default Story;