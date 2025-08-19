import React, {useState} from "react";
import styles from "./TaskForm.module.css"

const TaskForm = ({onAddTask}) =>{
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim() === ""){
            return
        }
        onAddTask(inputValue)
        setInputValue("")
    }

    return (
          <form action="" onSubmit={handleSubmit} className={`${styles.inputForm} container`}>
            <input value={inputValue} onChange={(e)=> setInputValue(e.target.value)} type="text" className={styles.input} placeholder="Add a new task..." />
            <button type="submit" className={styles.submitButton}>Submit</button>
          </form>
    )
}

export default TaskForm