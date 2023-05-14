import React from 'react'
import UtilityTable from './UtilityTable'

const UtilityBillPage = () => {
 /*  const d = new Date();
  const set = d.setMonth(2)
  const m = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"]; */
  const updateBillRecord = () => {
    // console.log(d.getMonth())
  }
  return (
    <div className='px-32 py-12'>
      <button onClick={updateBillRecord} className='border-2 rounded-lg px-3.5 py-2'>Change Month</button>
      <UtilityTable/>
    </div>
  )
}

export default UtilityBillPage