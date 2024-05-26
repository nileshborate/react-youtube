import './App.css'
import MyClass from './MyClass'
import MyFunc2, { MyFunc1 } from './MyFunc'

function App() {
  return (
    <div>
      <h1>Hello ReactJS!!!</h1>
      <MyFunc1 />
      <MyFunc2 />
      <MyClass />
    </div>
  )
}

export default App
