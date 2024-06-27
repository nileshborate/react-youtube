import React from 'react'
import logo from './images/keep-note.png'

const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt="image" width='70' height='70' />
        <h1>Keep Note</h1>
    </div>
  )
}

export default Header