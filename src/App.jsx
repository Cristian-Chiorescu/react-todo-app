import { useState, useEffect } from 'react'
import styles from "./App.module.css"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import TaskForm  from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'
import TaskItem from './components/TaskItem/TaskItem'

function App() {
  const [tasks, setTasks] = useState(()=>{
    const savedTasks = localStorage.getItem("tasks")
    return savedTasks? JSON.parse(savedTasks) : []
  })

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = (taskText) =>{
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (taskIdToDelete) => {
    const newTasks = tasks.filter((task) => task.id !== taskIdToDelete)
    setTasks(newTasks)
  }

  const toggleTaskComplete = (taskIdToToggle) => {
    const newTasks = tasks.map((task)=>{
      if(task.id !== taskIdToToggle){
        return task
      }
      
      return {...task, completed: !task.completed}
    })
    setTasks(newTasks)
  }

  return (
    <>
    <Header/> 
      <main>
        <div className={`${styles.outerContainer} container`}>
        <div className={`${styles.addTaskContainer} container frosted`}>
          <h1>My Tasks</h1>
        <TaskForm onAddTask={addTask}/>
        </div>
        {tasks.length>0 && <div className={`${styles.divider} frosted`}></div>}
        <TaskList tasks={tasks} onDeleteTask={deleteTask} onToggleTask= {toggleTaskComplete}/>
        </div>
      </main>
    <Footer /> 
    </>
  )
}

export default App
