import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
import { reducer } from './reducer'

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
  // dispatch an action to handle submit
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

  // dispatch an action to close modal
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return (
    <>
      {state.isModalOPen ? (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      ) : null}
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
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: 'REMOVE_PERSON', payload: person.id })
              }
            >
              remove person
            </button>
          </div>
        )
      })}
    </>
  )
}

export default Index
