import Add from './Add'
const User = ({onAdd}) => {

 
  return (
    <div>
      <div className='header'>
       <h1 id='h1'>Shopping Shoes</h1>
      </div> 
      <nav className="navbar">
    <h1>Product On Sales</h1>
    <Add item='Add'  onClick = {onAdd}  />
    </nav >
     
       
    </div>
  )
}

export default User
