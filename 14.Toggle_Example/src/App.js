import React, { useState } from 'react'

const App = () => {
  const [status, setStatus] = useState(true)
  return (
    <>
      {status ? <h1>Hello ReactJS!!!</h1> : null}

      <button onClick={() => setStatus(!status)}>Hide&Show</button>
    </>
  )
}

export default App
