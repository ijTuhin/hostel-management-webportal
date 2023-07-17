import React from 'react'
import { wardenMenu } from '../../Hooks/staticData'
import SubOutletBox from '../../Components/Common/SubOutletBox'

export default function IssuesPage() {
  return <SubOutletBox menu={wardenMenu[3].subMenu}/>
}
