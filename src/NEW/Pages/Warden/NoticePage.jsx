import React from 'react'
import SubOutletBox from '../../Components/Common/SubOutletBox'
import { wardenMenu } from '../../Hooks/staticData'

export default function NoticePage() {
    return <SubOutletBox menu={wardenMenu[4].subMenu}/>
}
