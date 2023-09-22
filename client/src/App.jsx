import './App.css'
import React, { useState, createContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Words from './components/Words'
import Story from './components/Story'

const globalContext = createContext()

function App() {
  const [noun1, setNoun1] = useState('')
  const [noun2, setNoun2] = useState('')
  const [noun3, setNoun3] = useState('')
  const [noun4, setNoun4] = useState('')
  const [adjective1, setAdjective1] = useState('')
  const [adjective2, setAdjective2] = useState('')
  const [place, setPlace] = useState('')
  const [pluralNoun1, setPluralNoun1] = useState('')
  const [pluralNoun2, setPluralNoun2] = useState('')
  const [number, setNumber] = useState('')
  const [noise1, setNoise1] = useState('')
  const [noise2, setNoise2] = useState('')
  const [bodypart, setBodypart] = useState('')

  return (
    <>
      <globalContext.Provider
        value={{ noun1, noun2, noun3, noun4, adjective1, adjective2, place, pluralNoun1, pluralNoun2, number, noise1, noise2, bodypart,
          setNoun1, setNoun2, setNoun3, setNoun4, setAdjective1, setAdjective2, setPlace, setPluralNoun1, setPluralNoun2, setNumber, setNoise1, setNoise2, setBodypart }}>
          <Routes>
          <Route path="/" element={<Words 
          //Props
          noun1={noun1} noun2={noun2} noun3={noun3} noun4={noun4}
          adjective1={adjective1} adjective2={adjective2} place={place} pluralNoun1={pluralNoun1} 
          pluralNoun2={pluralNoun2} number={number} noise1={noise1} noise2={noise2} bodypart={bodypart}
          //Set Props
          setAdjective1={setAdjective1} setAdjective2={setAdjective2} setNoun1={setNoun1} setNoun2={setNoun2}
          setNoun3={setNoun3} setNoun4={setNoun4} setPlace={setPlace} setPluralNoun1={setPluralNoun1} setPluralNoun2={setPluralNoun2}
          setNumber={setNumber} setNoise1={setNoise1} setNoise2={setNoise2} setBodypart={setBodypart} />} />

          <Route path="/story" element={<Story noun1={noun1} noun2={noun2} noun3={noun3} noun4={noun4}
          adjective1={adjective1} adjective2={adjective2} place={place} pluralNoun1={pluralNoun1} 
          pluralNoun2={pluralNoun2} number={number} noise1={noise1} noise2={noise2} bodypart={bodypart}
          //Set Props
          setAdjective1={setAdjective1} setAdjective2={setAdjective2} setNoun1={setNoun1} setNoun2={setNoun2}
          setNoun3={setNoun3} setNoun4={setNoun4} setPlace={setPlace} setPluralNoun1={setPluralNoun1} setPluralNoun2={setPluralNoun2}
          setNumber={setNumber} setNoise1={setNoise1} setNoise2={setNoise2} setBodypart={setBodypart} />} />
        </Routes>
      </globalContext.Provider>
    </>
  )

}

export default App
