import React from "react";
import styles from "./TaskList.module.css";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({tasks, onDeleteTask, onToggleTask}) =>{

    return(
        <ul id="task-list">
            {tasks.map((task)=>{
                return (<TaskItem
                key={task.id}
                task={task}
                onDelete={onDeleteTask}
                onToggle={onToggleTask}/>)
            })}
        </ul>
    )
}

export default TaskList