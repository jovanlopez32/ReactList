import React, {createContext, useState, useEffect} from 'react'
import {tasks as data} from '../data/tasks'

export const TaskContext = createContext();

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([]);

    function createTask(task) {
        setTasks([...tasks, {
            title: task.title,
            id: tasks.length,
            description: task.description
        }]);
    }

    function deleteTask(taskId){
        const newtasks = tasks.filter(task => task.id !== taskId);
        setTasks(newtasks);
    }

    useEffect(() => {
        setTasks(data)
    }, []);

  return (
    
     <TaskContext.Provider value={
        {
            tasks,
            deleteTask,
            createTask
        }
     }>
        {props.children}
     </TaskContext.Provider>
  )
}

