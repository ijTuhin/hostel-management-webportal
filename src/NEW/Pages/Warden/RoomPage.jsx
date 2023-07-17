import React from 'react'
import SubOutletBox from '../../Components/Common/SubOutletBox'
import { wardenMenu } from '../../Hooks/staticData'

export default function RoomPage() {
  return <SubOutletBox menu={wardenMenu[2].subMenu}/>
}
