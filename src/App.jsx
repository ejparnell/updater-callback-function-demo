import { useState } from 'react'
import './App.css'

function App() {
  const [isBlue, setIsBlue] = useState(false)
  const [count, setCount] = useState(0)
  const [kaleSoupWord, setKaleSoupWord] = useState('kaleSoup')

  const handleBooleanUpdate = () => {
    setIsBlue(prevState => !prevState)
  }

  const handleCountUpdate = () => {
    setCount(prevState => prevState + 1)
  }

  const handleKaleSoupUpdate = () => {
    setKaleSoupWord(prevState => prevState + '!')
  }

  const booleanDivStyle = {
    backgroundColor: isBlue ? 'blue': 'pink',
    height: '250px', 
    width: '250px'
  }

  return (
    <>
      <div style={booleanDivStyle}></div>
      <button onClick={handleBooleanUpdate}>Click to change the boolean value</button>

      <div>{count}</div>
      <button onClick={handleCountUpdate} >Click to change the count</button>

      <div>{kaleSoupWord}</div>
      <button onClick={handleKaleSoupUpdate}>Click to add an `!` to kaleSoup</button>
    </>
  )
}

export default App
