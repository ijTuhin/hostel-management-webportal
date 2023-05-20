import React from 'react'

const MealHeading = ({meal, total}) => {
  return (
    <div className='text-3xl font-medium text-red-400 bg-red-300/25 w-full text-center py-8 shadow-md'>{meal} - {total}</div>
  )
}

export default MealHeading