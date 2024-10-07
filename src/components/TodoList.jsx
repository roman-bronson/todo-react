import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    // Destructs the props that were passed from the parent component
    const { todos } = props

    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard {...props} key={todoIndex} index={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}

