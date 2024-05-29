import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: 'Nilesh Technology',
    }
  }
  changeValue() {
    this.setState({ data: 'Youtube Channel' })
  }
  render() {
    return (
      <>
        <h1>Hello ReactJS New!!!</h1>
        <h2>Data = {this.state.data}</h2>
        <button onClick={()=>this.changeValue()}>Click Me</button>
      </>
    )
  }
}

export default App
