import React, { useEffect, useState } from 'react'

const App = () => {
  const [cnt1,setCnt1] = useState(0)
  const [cnt2,setCnt2] = useState(0)
  useEffect(()=>{
    console.log("No Dependency useEffect....")
  });
  useEffect(()=>{
    console.log("Dependency Blank Array useEffect....")
  },[]);
  useEffect(()=>{
    console.log("cnt2 Dependency value useEffect....")
  },[cnt2]);

  const buttonEvent1 = () => {
    setCnt1(cnt1+1)
  }
  const buttonEvent2 = () => {
    setCnt2(cnt2+1)
  }

  return (
    <>
      <h1>Hello ReactJS!!! {cnt1} {cnt2}</h1>
      <button onClick={buttonEvent1}>Click Me1</button>
      <button onClick={buttonEvent2}>Click Me2</button>
    </>
  )
}

export default App
