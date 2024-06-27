import React from 'react'

const Notes = (props) => {
  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <br />
      <p>{props.content}</p>
      <button 
        className='delete_button' 
        onClick={()=>props.deleteItem(props.id)}>
        <span className='deleteIcon'>Delete</span>
      </button>
    </div>
  )
}

export default Notes