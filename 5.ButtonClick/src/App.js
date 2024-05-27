import './App.css'

function App() {
  var myname = 'Nilesh'
  const test = () => {
    console.log('function call ', myname)
    alert('Function call ' + myname)
  }
  return (
    <>
      <h1>Hello ReactJS!!!</h1>
      <button onClick={test}>Click Me</button>
    </>
  )
}

export default App
