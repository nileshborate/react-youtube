import React from 'react'

const Demo = () => {
  var name = 'Nilesh Technology'
  const myElement = React.createElement('h1', {}, 'I do not use JSX!')

  return (
    <>
      <div>My name is {name}</div>
      <div>
        Addition is {10 + 20} {myElement}
      </div>
    </>
  )
}

export default Demo
