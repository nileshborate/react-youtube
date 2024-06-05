import React from 'react'
import Demo from './Demo'

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Class Compo</h1>
        <Demo name="Nilesh1" country="IN1" />
        <Demo name="Nilesh2" country="IN2" />
        <Demo name="Nilesh3" country="IN3" />
        <Demo>
          <h1></h1>
        </Demo>
      </>
    )
  }
}

export default App
