import React, { useEffect, useState } from 'react'
import { toursData } from './ToursData'
import Tours from './Tours'
const App = () => {
  const [tours,setTours] = useState([])
  useEffect(()=>{
    setTours(toursData)
  },[])

  const removeTour = (id) => {
    //console.log("remove tour call",id)
    const newTours = tours.filter((tour)=>tour.id !== id)
    setTours(newTours)
  }
  if(tours.length === 0){
    return(
      <main>
        <div className='title'>
          <h2>No Tours Left</h2>
          <button className='btn'>Refresh</button>
        </div>
      </main>
    )
  }
  return (
    <>
      <main>
        <Tours tours={tours} removeTour={removeTour}/>
      </main>
    </>
  )
}

export default App
