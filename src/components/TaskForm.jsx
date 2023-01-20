import {useState, useContext} from 'react';
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const {createTask} = useContext(TaskContext);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({title, description});
        setTitle('');
        setDescription('');
    }

    return (
        <div className=' max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className=' flex flex-col p-10 mb-10'>
                <label className='text-lg font-bold my-2' htmlFor="">Titulo</label>
                <input required className=' focus:ring-0 focus:outline-none font-semibold text-gray-800 bg-transparent border-4 rounded-lg p-1 text-sm border-[#84a59d]' type="text" placeholder='Insertar tarea' onChange={function(e) {
                    setTitle(e.target.value)
                }} value={title} />
                <label className='text-lg font-bold my-2' htmlFor="">Descripcion</label>
                <textarea required className=' focus:ring-0 focus:outline-none font-semibold text-gray-800 bg-transparent border-4 rounded-lg p-1 text-sm border-[#84a59d]' placeholder='Descripcion de la tarea' onChange={function(e) {
                    setDescription(e.target.value)
                }} value={description}></textarea>

                <button className=' font-semibold text-sm bg-[#f6bd60] rounded-lg my-5 py-2'>
                    Guardar
                </button>
        </form>
        </div>
    );
}

export default TaskForm;
