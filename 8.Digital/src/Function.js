import react, {useState} from 'react'

const Function = () => {
const [count,setCount] = useState(1)
  const increment = () => {
    setCount(count+1)
  }
  const decrement = () => {
    setCount(count-1)
  }
  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default Function