import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('J.Lo')
  const firstValue = text || 'hello world'
  const secondValue = text && 'hello world'

  return (
    <>
      {/* <h2>{firstValue}</h2>
      <h2>value: {secondValue}</h2> */}
      <h1>{text || 'yolo dolo'}</h1>
      {text && <h1>yolo world</h1>}
    </>
  )
}

export default ShortCircuit
