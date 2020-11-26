import React from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)

  // clear array
  const clickHandler = () => {
    setPeople([])
  }
  // clear an item from an array
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button className='btn' onClick={() => removeItem(id)}>
              Clear this Yolo
            </button>
          </div>
        )
      })}
      <button className='btn' onClick={clickHandler}>
        Yolo Button
      </button>
    </>
  )
}

export default UseStateArray
