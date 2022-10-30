import Task from './Task'

const Tasks = ({ tasks}) => {
  return (
    <div className='Tasks'>
      {tasks.map ((task) => (
      <Task key ={task.idItem}  task={task}/>
      ))}
    </div>
  )
}

export default Tasks
