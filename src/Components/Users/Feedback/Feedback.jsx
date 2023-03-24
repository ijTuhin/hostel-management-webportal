import React from 'react'
import MasonryLayout from './MasonryLayout'
import SearchBar from './SearchBar'

const Feedback = () => {
  return (
    <div className='w-full flex flex-col justify-end items-center my-10'>
        <SearchBar/>
        <MasonryLayout/>
    </div>
  )
}

export default Feedback