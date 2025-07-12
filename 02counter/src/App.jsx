import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
 let [counter, setCounter] = useState(15)
 
  // let counter = 15
  
  const addValue = () => {
    console.log("clicked", counter)
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue = () => {
    console.log("clicked", counter)
    counter = counter - 1
    setCounter(counter)
  }
// REACT controls the UI UPDATION
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      

      <button 
      onClick={addValue}
      >Add value</button>
      <br />
      <button 
      onClick={removeValue}
      >remove value</button>
    </>
  )
}

export default App
