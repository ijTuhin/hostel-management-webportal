import React from 'react'
import { mealMenu } from '../../Hooks/staticData'
import SubOutletBox from '../../Components/Common/SubOutletBox'

export default function GroceryPageMeal() {
  return <SubOutletBox menu={mealMenu[1].subMenu}/>
}
