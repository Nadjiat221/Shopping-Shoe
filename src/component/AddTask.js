import { useState } from 'react'

const AddTask = ({ onAdd }) => {

    const [item, setItem] = useState('')
    const [itemPrice, setitemPrice] = useState('')
    const [img, setImg] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!item) {
            alert('please add an item')
            return
        }
        onAdd({ item, itemPrice, img })
        setItem('')
        setitemPrice('')
        setImg('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>


            <div className='form-control'>

                <input type='url' placeholder='insert an image'
                    value={img} onChange={(e) =>
                        setImg(e.target.value)} />
            </div>


            <div className='form-control'>
                <label>Item Name</label>
                <input type='text' placeholder='Add item'
                    value={item} onChange={(e) =>
                        setItem(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Item Price</label>
                <input type='text' placeholder='Add price'
                    value={itemPrice} onChange={(e) =>
                        setitemPrice(e.target.value)} />
            </div>

            <input type='submit' value='Add Item' className='btn btn-block' />
        </form >
    )
}

export default AddTask
