import React, { Component } from 'react'

class Class extends Component {
  state = { count: 1 }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }
  decrement() {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <>
        <h1>Count = {this.state.count}</h1>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </>
    )
  }
}

export default Class
