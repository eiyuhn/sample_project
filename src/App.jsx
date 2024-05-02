import './App.css'
import { useState } from 'react'
import ClassComponent from './ClassComponent'
import FunctionalComponent from './FunctionalComponent'

function App() {
  const [isShow, setIsShow] = useState (true);
  return (
    <>
      {isShow &&  <ClassComponent />}
      <button onClick = {() => setIsShow (!isShow)}>Toggle Class</button>
      <FunctionalComponent />
    </>
  )
}

export default App
