import './App.css'
import Test from './Test'

const myExample = () => {
  console.log('Hi')
}

const App = () => {
  return (
    <>
      <h1>Hello App Component</h1>
      <Test name="Nilesh" country="IN" />
      <Test name="ABC" country="US" />
      <Test name="PQR" country="UK" />
    </>
  )
}

export default App
