import React from 'react'
import './TodoList.css'
export default function TodoItem(props) {

  return (
    <div className={`TodoItem ${props.task.completed ? "completed" : ""}`}>

        <h3>{props.task.title}</h3>
        <p>{props.task.completed? "Task Completed Yes" : "Task Completed no"}</p>
        <button onClick={props.onDelete}>Delete</button>
        <button onClick={props.onComplete} >Complete</button>
        <button onClick={props.onEdit} >Edit</button>
        
    </div>
  )
}
