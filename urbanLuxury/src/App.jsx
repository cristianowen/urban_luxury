import { useState } from 'react'
import BasicExample from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BasicExample/>
      <BasicExample/>
      <BasicExample/>
    </>
  )
}

export default App
