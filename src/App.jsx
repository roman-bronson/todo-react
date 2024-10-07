import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  /* 
  *  We are initializing all of the variables and methods we may need. The first line creates the state variable that will hold the list of todos and the set todos updates that list.
  *  The second line initializes the new task that will be added to the todo list. The setTaskValue sets that value to a specified value.
  */
  const [todos, setTodos] = useState([])
  const [newTask, setTaskValue] = useState('')

  // This persistData function makes sure that all existing todos on the page will persist even if the page reloads.
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }


  // This adds new tasks
  function handleAddTask(newTask) {
    const newTodoList = [...todos,newTask]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  // This function handles deleting tasks by grabbing the index of the task and create a new list without the specified index.
  function handleDeleteTask(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex != index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  // This functions handles editing the value of specific task
  function handleEditTask(index) {
    const valueToBeEdited = todos[index]
    setTaskValue(valueToBeEdited)
    handleDeleteTask(index)
  }

  // The useEffect is to run the logic of gathering all of the local task on the page so that they can persist on page reloading
  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTasks = localStorage.getItem('todos')
    if (!localTasks) {
      return
    }

    localTasks = JSON.parse(localTasks).todos
    setTodos(localTasks)
  }, [])

  return ( 
    <>
      <TodoInput newTask={newTask} setTaskValue={setTaskValue} handleAddTask={handleAddTask} />
      <TodoList handleEditTask={handleEditTask} handleDeleteTask={handleDeleteTask} todos={todos} />
    </>
  )
}

export default App