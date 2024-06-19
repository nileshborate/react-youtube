import React from 'react'
import './App.css'
import Card from './Card'
import mdata from './moviedata'

const App = () => {
  console.log("mdata = ",mdata)
  return (
    <>
      <div className='cards'>
        {
          mdata.map((obj,index) => {
            return(
            <Card key={index}
              imgsrc= {obj.imgsrc}
              cardCategory = {obj.cardCategory}
              cardTitle = {obj.cardTitle}
              linkurl = {obj.linkurl}
            />
            )
          })
        }
      </div>
    </>
  )
}

export default App
