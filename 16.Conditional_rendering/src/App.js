import React, { useState } from 'react'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  return <>{loggedIn ? <h1>Welcome User!!!</h1> : <h1>Invalid User!!!</h1>}</>
}

export default App
