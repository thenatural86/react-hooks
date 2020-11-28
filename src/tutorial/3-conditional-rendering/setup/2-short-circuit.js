import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('J.Lo')
  const [isError, setIsError] = useState(false)

  return (
    <>
      <h1>{text || 'yolo dolo'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        Yolo Error
      </button>
      {isError ? <h1>Error...</h1> : <h1>There is no error</h1>}
    </>
  )
}

export default ShortCircuit
