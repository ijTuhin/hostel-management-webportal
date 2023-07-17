import React from 'react'
import SubOutletBox from '../../Components/Common/SubOutletBox'
import { financeMenu } from '../../Hooks/staticData'

export default function PaymentsPageFinance() {
  return <SubOutletBox menu={financeMenu[2].subMenu}/>
}
