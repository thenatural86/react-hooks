import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
// reducer function
// always return some kind of state
const reducer = (state, action) => {
  console.log(state, action)
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload]
    return {
      ...state,
      people: newPeople,
      isModalOPen: true,
      modalContent: 'person added',
    }
  }
  if (action.type === 'NO_VALUE') {
    return { ...state, isModalOPen: true, modalContent: 'please enter value' }
  }
  throw new Error('no matching type YOLO')
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
      const newPerson = { id: new Date().getTime().toString(), name }
      dispatch({ type: 'ADD_ITEM', payload: newPerson })
      setName('')
    } else {
      dispatch({ type: 'NO_VALUE' })
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
