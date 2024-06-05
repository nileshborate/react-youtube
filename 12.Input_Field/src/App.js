import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [data, setData] = useState('')
  const [val, setVal] = useState('')

  const InputData = (e) => {
    console.log('val = ', e.target.value)
    setData(e.target.value)
  }
  const printValue = () => {
    setVal(data)
  }
  return (
    <>
      <h1>Hello {val}</h1>
      <input type="text" onChange={InputData} />
      <button onClick={printValue}>Click Me</button>
    </>
  )
}

export default App
