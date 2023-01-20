import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {

    const {tasks} = useContext(TaskContext); 

    if(tasks.length === 0){
        return (
            <div className=" w-full flex items-center justify-center">
                <h1 className=" font-extrabold text-3xl">No hay tareas.</h1>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-4 gap-4">
            {
                tasks.map((task) => (
                    <TaskCard key={task.id} task={task}/>
                ))
            }
        </div>
    );
}

export default TaskList;
