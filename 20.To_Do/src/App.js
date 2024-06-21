import React, { useState } from 'react'
import List from './List'

const App = () => {

  const [inputText,setInputText] = useState("")
  const [items,setItems] = useState([])

  const InputEvent = (e) => {
    setInputText(e.target.value)
  }

  const addItem = () => {
    setItems((oldItems)=>{
      return [...oldItems,inputText]
    })
    setInputText("")
    //console.log("items = ",items)
  }

  const deleteItem = (id) => {
      setItems(items.filter((ele,index) => {
        return index !== id
      }))
  }
  return (
    <>
      <div className='main-div'>
        <div className='center-div'>
            <br/>
            <h1>ToDo List</h1>
            <br />
            <input type="text" 
              placeholder='Add Item' 
              onChange={InputEvent}
              value={inputText}
              />
            <button onClick={addItem}>+</button>
            <ol>
              {
                items.map((ele,index)=>{
                  return(
                    <List
                      key={index}
                      id={index}
                      text={ele}
                      deleteClick={deleteItem}
                     />
                  )
                })
              }
            </ol>
        </div>
      </div>
    </>
  )
}

export default App
