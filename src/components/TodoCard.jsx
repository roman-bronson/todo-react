import React from 'react'

export default function TodoCard(props) {
  // Destructs the props that were passed from the parent component
  const {children, handleDeleteTask, index, handleEditTask} = props

  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        <button onClick={() => {
          handleEditTask(index)
        }}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => {
          handleDeleteTask(index)
        }}> 
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  )
}
