
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function Todo() {
    let [todos, setTodos] = useState([]);
    let [value,setValue] = useState("")
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleClick = () => {
        let todoObj = {
            title:value,
            id:uuidv4(),
            status:false
        }
        setTodos([...todos,todoObj])
    }
  return (
      <div>
          <h1>Todo List</h1>
          <input  type="text" value={value} onChange={handleChange} placeholder='Enter Task'/>
          <button onClick={handleClick}>Add</button>
          {
              todos.map((item)=>{
                  return <h1 key={item.id}>{item.title}</h1>
              })
          }
      </div>
          
  )
}

export default Todo