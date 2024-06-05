import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [data, setData] = useState({
    fname: '',
    lname: '',
    address: '',
  })
  const [val, setVal] = useState('')

  const InputEvent = (e) => {
    setData((old) => {
      console.log('old = ', old)
      return {
        ...old,
        [e.target.name]: e.target.value,
      }
    })
  }

  const ButtonEvent = () => {
    setVal(data.fname + ' ' + data.lname + ' ' + data.address)
  }
  return (
    <>
      <h1>Hello {val}</h1>
      First Name : <input type="text" onChange={InputEvent} name="fname" />
      <br />
      Last Name : <input type="text" onChange={InputEvent} name="lname" />
      <br />
      Address : <input type="text" onChange={InputEvent} name="address" />
      <br />
      <button onClick={ButtonEvent}>Click Me </button>
    </>
  )
}

export default App
