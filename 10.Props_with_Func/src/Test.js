import React from 'react'

const Test = (props) => {
  console.log('Props = ', props)
  return (
    <h1>
      Test Component : {props.name} Country : {props.country}
    </h1>
  )
}

export default Test
