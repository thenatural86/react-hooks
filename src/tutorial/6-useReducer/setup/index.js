import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
// reducer function
const reducer = (state, action) => {}

// have state that is an obj and has multiple properties
const defaultState = {
  people: [],
  isModalOPen: false,
  modalContent: '',
}

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
    } else {
    }
  }

  return (
    <>
      {state.isModalOPen ? <Modal modalContent={state.modalContent} /> : null}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        )
      })}
    </>
  )
}

export default Index
