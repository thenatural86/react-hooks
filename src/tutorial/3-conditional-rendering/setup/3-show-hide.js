import React, { useState, useEffect } from 'react'

const ShowHide = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <h1>{show ? 'Yolo Time!' : <Item />}</h1>
      <button className='btn' onClick={() => setShow(!show)}>
        Yolo Button
      </button>
    </>
  )
}

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => setSize(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  }, [])

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>Window</h1>
      <h2>Size: {size}px</h2>
    </div>
  )
}

export default ShowHide
