import React, { useState } from 'react'

export default function App () {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      <h1>Welcome to ohakutsu portfolio!</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  )
}
