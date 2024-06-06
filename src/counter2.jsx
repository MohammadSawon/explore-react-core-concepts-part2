import { useState } from "react"

export default function Counter2(){
    const [count, setCount] = useState(0)
    const handleIncrease = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleDecrease = () =>{
        const newCount = count - 1;
        setCount(newCount)
    }
    return (
        <div style={{border: '2px solid blue', borderRadius: '10px', padding: '10px', margin: '10px'}}>
            <h3>Counter2: {count}</h3>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    )
}