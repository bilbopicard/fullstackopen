import React, { useState } from 'react'

const Button = ({ anecdotes, setSelected, points, setPoints, selected }) => {

  const randomNum = () => {
    return Math.floor(Math.random() * anecdotes.length)
  }

  const handleClick = () => {
    setSelected(randomNum())
    setPoints({ ...points, [selected]: points[selected] += 1 })
    console.log(points)
  }

  let max = Object.keys(points).reduce((a, b) => points[a] > points[b] ? a : b);


  return (
    <div>
      <button onClick={handleClick}>Random</button >
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 })

  let max = Object.keys(points).reduce((a, b) => points[a] > points[b] ? a : b)


  return (
    <div>
      {anecdotes[selected]}
      <Button selected={selected} anecdotes={anecdotes} setSelected={setSelected} points={points} setPoints={setPoints} />
      <h2>Most Selected</h2>
      <p>{anecdotes[max]}</p>
      <p>{points[max] + ' times'}</p>
    </div>
  )
}

export default App
