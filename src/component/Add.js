
import PropTypes from 'prop-types'

const Add = ({item, onClick}) => {

  return (
<button onClick={onClick} className='btn' >{item}</button>
  )
  
}


// Add.PropTypes = {
//     text: PropTypes.string,
//     onClick:PropTypes.func,

// }

export default Add
