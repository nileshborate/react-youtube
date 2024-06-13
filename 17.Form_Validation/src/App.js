import React, { useState } from 'react'

const App = () => {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [userError, setUserError] = useState(false)
  const [passError, setPassError] = useState(false)

  const userEvent = (e) => {
    const value = e.target.value
    if (value.length < 3 || value.length > 10) {
      setUserError(true)
      setUser('')
    } else {
      setUserError(false)
      setUser(value)
    }
  }
  const passEvent = (e) => {
    const value = e.target.value
    if (value.length < 3 || value.length > 10) {
      setPassError(true)
      setPass('')
    } else {
      setPassError(false)
      setPass(value)
    }
  }
  const formSubmit = (e) => {
    e.preventDefault()
    if (user.length === 0 || pass.length === 0) {
      alert('Please Enter Username and Password')
    } else {
      console.log('Username = ', user)
      console.log('Password = ', pass)
    }
  }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          onChange={userEvent}
        />
        {userError ? <span style={{ color: 'red' }}>Invalid User</span> : null}
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={passEvent}
        />
        {passError ? (
          <span style={{ color: 'red' }}>Invalid Password</span>
        ) : null}
        <br />
        <input type="submit" />
      </form>
    </>
  )
}

export default App
