import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Counter2 from './counter2'
import Users from './users'
import Friends from './Friends'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    alert('handle click')
  }

  const handleClick3 = (num) =>{
    alert(num+3)
  }

  return (
    <>  
      <h1>explore react core concepts 2</h1>
      <button onClick={handleClick}>click me</button>
      <button onClick={() => {alert('handle 2 is clicked')}}>handle click 2</button>
      <button onClick={() => handleClick3(5)}>handle3</button>

      <Friends></Friends>
      <Counter></Counter>
      <Counter2></Counter2>
      <Users></Users>
    </>
  )
}

export default App
