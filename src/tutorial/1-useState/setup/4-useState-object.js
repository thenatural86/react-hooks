import React, { useState } from 'react'

const UseStateObject = () => {
  // const [person, setPerson] = useState({
  //   name: 'pete',
  //   age: 24,
  //   message: 'rando mess',
  // })
  // console.log(person)

  const [name, setName] = useState('pete')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('rando mess')

  // const { name, age, message } = person

  const changeMessage = () => {
    // setPerson({ ...person, message: 'yolo world' })
    setMessage('Yolo World')
  }
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>
        Yolo Button
      </button>
    </>
  )
}

export default UseStateObject
