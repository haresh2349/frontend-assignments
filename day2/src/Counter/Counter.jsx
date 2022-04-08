import React from "react"
const Counter = () => {
    const [counter,setCounter] = React.useState(0)
    const handleInc = (value) => {
        setCounter(counter + value)
    }
    const doubleCounter = () => {
        setCounter(counter*2)
    }
    return (
        <>
        <div className="box">
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <button onClick={()=>{handleInc(1)}}>INCREMENT</button>
        <button onClick={()=>{handleInc(-1)}}>DECREMENT</button>
        <button onClick={()=>{doubleCounter()}}>DOUBLE</button>
        </div>
        </>
    )
}
export default Counter