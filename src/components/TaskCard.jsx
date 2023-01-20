import { useContext} from 'react';
import { TaskContext } from "../context/TaskContext";

export const TaskCard = ({task}) => {

    const { deleteTask} = useContext(TaskContext);

    return (
        <div className=' bg-[#84a59d] flex flex-col items-center justify-center p-4 rounded-lg' >
            <h1 className=' text-xl font-bold capitalize'>{task.title}</h1>
            <p className=' text-gray-800'>{task.description}</p>
            <button className=' bg-[#f28482] w-full rounded-lg py-1 text-sm font-semibold mt-4 hover:bg-[#f5cac3]' onClick={function (){
                deleteTask(task.id)
            }}>
                Eliminar
            </button>
        </div>
    );
}

export default TaskCard;
