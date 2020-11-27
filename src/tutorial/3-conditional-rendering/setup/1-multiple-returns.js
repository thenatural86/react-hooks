import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')

  // const getUser = async () => {
  //   const response = await fetch(url)
  //   const user = await response.json()
  //   console.log(user)
  //   setUser(user.name)
  // }

  // useEffect(() => {
  //   getUser()
  // }, [])

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json()
        } else {
          setIsLoading(false)
          setIsError(true)
          throw new Error(response.status)
        }
      })
      .then((user) => {
        const { login } = user
        setUser(login)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  })

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )
  }
  if (isError) {
    return (
      <div>
        <h2>Error</h2>
      </div>
    )
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  )
}

export default MultipleReturns
