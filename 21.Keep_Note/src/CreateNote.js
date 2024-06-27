import React, { useState } from 'react'

const CreateNote = (props) => {
  const[note, setNote] = useState({
    title:'',
    content:''
  })
  const InputEvent = (e) => {
    const {name,value} = e.target;
    //console.log("name = ",name," content = ",value)

    setNote((prevData) => {
      return {
        ...prevData,
        [name] : value
      }
    })
  }

  const addNote = (e) => {
    e.preventDefault()
    props.passNote(note)
  }
  return (
    <div className='main_note'>
      <form>
        <input 
          type="text" 
          placeholder='Title' 
          name="title"
          value={note.title}  
          onChange={InputEvent}
        />
        <textarea 
          placeholder='Write a Note'
          name="content"
          value={note.content}  
          onChange={InputEvent}
          >
        </textarea>
        <button className='add_button' onClick={addNote}>
          <span className='plus_sign'>+</span>
        </button>
      </form>
    </div>
  )
}

export default CreateNote