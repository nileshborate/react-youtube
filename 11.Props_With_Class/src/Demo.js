import React from 'react'

class Demo extends React.Component {
  render() {
    console.log('Props = ', this.props)
    return (
      <h1>
        Demo : {this.props.name} {this.props.country}
      </h1>
    )
  }
}

export default Demo
