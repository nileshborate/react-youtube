import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateNote from './CreateNote'
import Notes from './Notes'

const App = () => {
  const [noteList, setNoteList] = useState([])
  const passNote = (note) => {

    setNoteList((oldData)=>{
      return [...oldData,note]
    })
  }

  const deleteItem = (id) => {
      //console.log("deleted id = ",id)
      
      setNoteList((oldData)=>
          oldData.filter((obj,index)=>{
            return index !== id
      }))
  }
  return (
    <>
      <Header />
      <CreateNote 
        passNote={passNote}
      />
      {
        noteList.map((obj,index)=>{
          return(
            <Notes 
              key={index}
              id={index}
              title={obj.title}
              content={obj.content}
              deleteItem={deleteItem}
            />
          )
        })
      }
      <Footer/>
    </>
  )
}

export default App
