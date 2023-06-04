import React from 'react'
import { RxDoubleArrowRight } from 'react-icons/rx'

const SeatUser = ({id}) => {
  return (
    <button className="flex w-full justify-center items-center gap-x-1.5 hover:underline decoration-2 underline-offset-4 uppercase"><span className="mb-0.5">{id}</span> <RxDoubleArrowRight/></button>
  )
}

export default SeatUser