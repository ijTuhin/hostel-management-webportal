import React from 'react'
import { RxDoubleArrowRight } from 'react-icons/rx'

const SeatUser = ({id}) => {
  return (
    <button className="hover:underline decoration-2 underline-offset-4 uppercase">{id}</button>
  )
}

export default SeatUser