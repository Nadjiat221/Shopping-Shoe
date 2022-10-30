

const Task = ({task}) => {
  return (
    <div className="row">
       <img src={task.img} className='column' />
      <h3> {task.item}</h3>
      <p>{task.itemPrice}</p>
     
    </div>
  )
}

export default Task
