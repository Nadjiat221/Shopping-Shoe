
import './App.css'
import { useState } from 'react'
import Item from './component/Item';
import User from './component/User';
import Tasks from './component/Tasks'
import AddTask from './component/AddTask'
import pic1 from './img/pic1.jpg'
import pic2 from './img/pic2.jpg'
import pic3 from './img/pic3.jpg'
import pic4 from './img/pic4.jpg'


const App= () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState ([ 
    {
    img:pic1,
    idItem:1 ,
    item: 'Plaid Print Drop highHeels',
    itemPrice:'RFW 15000',
    


},
{
    img:pic2,
    idItem:2 ,
    item: 'Lace-up Front Casual Shoes',
    itemPrice:'RFW 12000',
    


},
{
  img:pic3, 
  idItem:3 ,
  item: 'Colorblock Leopard Detail Lace-up Front Skate Shoes',
  itemPrice:'RFW 10000',
 

},
{
  img:pic4,
  idItem:4 ,
  item: ' Leopard Detail Lace-up Front Skate Shoes',
  itemPrice:'RFW 7000',
 

},
{
  img:pic2,
  idItem:5 ,
  item: 'Lace-up Front Casual Shoes',
  itemPrice:'RFW 12000',
  


},
{
img:pic3, 
idItem:6 ,
item: 'Colorblock Leopard Detail Lace-up Front Skate Shoes',
itemPrice:'RFW 10000',


},


])
const addTask = (task) => {
  const idItem = Math.floor(Math.random() * 10000) + 1
   const newItem = { idItem, ...task }
   setTasks([...tasks, newItem])
}
  return (
    <>
    <User  onAdd={()=> setShowAddTask (!showAddTask)}  />
   {showAddTask && <AddTask onAdd={addTask}  />}
    <div className="container">
    <Tasks tasks={tasks} />
    </div>
    
  
    

   
    </>
  );
}

export default App;
