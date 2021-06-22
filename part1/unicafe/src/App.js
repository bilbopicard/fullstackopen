import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {

  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistic = ({ text, value }) => {

  return (
    <>
      <td>{text}</td><td>{value}{text === 'positive' ? '%' : ''}</td>
    </>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  let all = good + neutral + bad

  let average = (good + (bad * (- 1))) / all

  let positive = (good / all) * 100

  return (
    <div>
      <h1>statistics</h1>
      {all > 0 ? <>
        <table>
          <tbody>
            <tr><Statistic text='good' value={good} /></tr>
            <tr><Statistic text='neutral' value={neutral} /></tr>
            <tr><Statistic text='bad' value={bad} /></tr>
            <tr><Statistic text='all' value={all} /></tr>
            <tr><Statistic text='average' value={average.toFixed(1)} /></tr>
            <tr><Statistic text='positive' value={positive.toFixed(1)} /></tr>
          </tbody>
        </table>

      </> : <p>No feedback given</p>}
    </div>

  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
  }
  const neutralClick = () => {
    setNeutral(neutral + 1)
  }
  const badClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feeback</h1>
      <Button handleClick={goodClick} text='good' />
      <Button handleClick={neutralClick} text='neutral' />
      <Button handleClick={badClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
