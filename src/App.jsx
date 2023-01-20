
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm';

function App() {
  
  return (
    <main className=' w-full min-h-screen bg-[#f7ede2]'>
      <div className='container mx-auto p-10'>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )
}


export default App;