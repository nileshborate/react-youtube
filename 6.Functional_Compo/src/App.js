import react, { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('yellow')
  const changeColor = () => {
    setColor('blue')
  }
  return (
    <>
      <h1>Hello ReactJS!!!</h1>
      <h2>Color Value {color}</h2>
      <button onClick={changeColor}>Change Color</button>
    </>
  )
}

export default App
