import React from "react";
import styles from "./TaskItem.module.css";

const TaskItem = ({task, onDelete, onToggle}) =>{
    
    const itemClasses = `${styles.taskItem} ${task.completed? styles.completed : ""} container frosted`
    
    return(
        <li id={task.id} className={itemClasses}>
            <input type="checkbox" onChange={()=>onToggle(task.id)}
            className={styles.checkbox}
            checked={task.completed}/>
            <span>{task.text}</span>
            <button onClick={()=>onDelete(task.id)} className={styles.deleteButton}>X</button>
        </li>
    )
}

export default TaskItem