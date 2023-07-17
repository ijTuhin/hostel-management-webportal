import React from 'react'
import SubOutletBox from '../../Components/Common/SubOutletBox'
import { wardenMenu } from '../../Hooks/staticData'

export default function StaffPage() {
  return <SubOutletBox menu={wardenMenu[5].subMenu}/>
}
