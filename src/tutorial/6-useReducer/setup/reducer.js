// reducer function
// always return some kind of state
export const reducer = (state, action) => {
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
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOPen: false }
  }
  if (action.type === 'REMOVE_PERSON') {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    )
    return {
      ...state,
      people: newPeople,
      isModalOPen: true,
      modalContent: 'person removed',
    }
  }
  throw new Error('no matching type YOLO')
}
