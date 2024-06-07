import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')
  const [terms, setTerms] = useState(false)
  const [os, setOS] = useState('')
  const [hobby, setHobby] = useState('')
  const formEvent = (e) => {
    e.preventDefault()
    console.log('Name = ', name)
    console.log('Terms = ', terms)
    console.log('OS = ', os)
    console.log('Hobby = ', hobby)
  }
  return (
    <>
      <form onSubmit={formEvent}>
        Enter Your Name
        <input type="text" onChange={(e) => setName(e.target.value)} /> <br />
        <input
          type="checkbox"
          onChange={(e) => setTerms(e.target.checked)}
        />{' '}
        Accept Terms and Conditions <br />
        <select onChange={(e) => setOS(e.target.value)}>
          <option value="">Select Options</option>
          <option value="Windows 11">Windows 11</option>
          <option value="MacOS">MacOS</option>
          <option value="Linux">Linux</option>
        </select>
        <br />
        What is your Hobby?
        <input
          type="radio"
          name="rb"
          value="Cricket"
          onChange={(e) => setHobby(e.target.value)}
        />
        Cricket
        <input
          type="radio"
          name="rb"
          value="Football"
          onChange={(e) => setHobby(e.target.value)}
        />
        Football <br />
        <input type="submit" />
      </form>
    </>
  )
}

export default App
