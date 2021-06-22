import React, { useState } from 'react'
const Display = ({ counter }) => <div>{counter}</div>


const App = () => {

  const [counter, setCounter] = useState(0)

  const addCLick = () => {
    setCounter(counter + 1)
  }
  const subtractCLick = () => {
    setCounter(counter - 1)
  }
  const zeroClick = () => {
    setCounter(0)
  }
  return (
    <div>
      <Display counter={counter} />
      <button onClick={addCLick}>Add</button>
      <button onClick={subtractCLick}>Subtract</button>
      <button onClick={zeroClick}>Reset</button>
    </div>
  )
}

export default App