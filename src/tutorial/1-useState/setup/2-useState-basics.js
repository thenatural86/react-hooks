import React, { useState } from 'react'
// import { Fragment } from 'react'

const UseStateBasics = () => {
  // console.log(useState('hello'))
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)
  const [text, setText] = useState('rando title')

  const handleClick = () => {
    if (text === 'rando title') {
      setText('Yolo World')
    } else {
      setText('rando title')
    }
  }

  return (
    <>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Yolo Button
      </button>
    </>
  )
}

export default UseStateBasics
