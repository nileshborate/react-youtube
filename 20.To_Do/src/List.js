import React from 'react'

const List = (props) => {

  return (
    <div className='todo_style'>
        <i class="fa-solid fa-trash" onClick={()=> props.deleteClick(props.id)}></i>
        <li>{props.text}</li>
    </div>
  )
}

export default List