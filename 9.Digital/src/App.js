import React, { useState } from 'react'

const App = () => {
  let currTime = new Date().toLocaleTimeString()
  const [value, setValue] = useState(currTime)

  const updateTime = () => {
    let currTime = new Date().toLocaleTimeString()
    setValue(currTime)
  }

  setInterval(updateTime, 1000)

  return (
    <>
      <h1>Date & time : {value}</h1>
    </>
  )
}

export default App
