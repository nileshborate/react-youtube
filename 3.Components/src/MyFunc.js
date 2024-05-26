import React from 'react'

const MyFunc1 = () => {
  const MyFunc2 = () => {
    return <h3>Hi External File2</h3>
  }

  return (
    <div>
      <h3>Hi External File1</h3>
      <MyFunc2 />
    </div>
  )
}

export default MyFunc1
