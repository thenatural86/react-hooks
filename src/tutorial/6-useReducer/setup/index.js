import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
// reducer function
// always return some kind of state
const reducer = (state, action) => {
  console.log(state, action)
  if (action.type === 'TESTING') {
    return {
      ...state,
      people: data,
      isModalOPen: true,
      modalContent: 'item added',
    }
  }
  return state
}

// have state that is an obj and has multiple properties
const defaultState = {
  people: [],
  isModalOPen: false,
  modalContent: '',
}

const Index = () => {
  const [name, setName] = useState('')
  // useReducer takes reducer function and default state as args
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      // dispatch my action, then reducer handles it
      dispatch({ type: 'TESTING' })
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
