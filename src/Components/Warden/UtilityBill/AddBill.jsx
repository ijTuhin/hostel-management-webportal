import React, { useState } from 'react'

const AddBill = () => {
    const [bill, setBill] = useState('')
  return (
    <div>
        <input type="text" className='border border-gray-400 p-2 w-24' />
    </div>
  )
}

export default AddBill