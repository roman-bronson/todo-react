import { useState } from "react"

export default function TodoInput(props) {
    // Destructs the props that were passed from the parent component
    const { handleAddTask, newTask, setTaskValue } = props

    return (
        <header>
            <input value={newTask} onChange={(e) => {
                setTaskValue(e.target.value)
            }} placeholder="Enter tasks here..." />
            <button onClick={() => {
                handleAddTask(newTask)
                setTaskValue('')
            }}>Add</button>
        </header>
    )
}