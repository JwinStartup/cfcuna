import React, { useState } from 'react'
import DASHBOARD_HEADER from '../component/DASHBOARD_HEADER.js'
import DASHBOARD_PEOPLE from '../component/DASHBOARD_PEOPLE.js'
import DASHBOARD_MENU from '../component/DASHBOARD_MENU.js'
import DASHBOARD_SQV from '../component/DASHBOARD_SQV.js'
import DASHBOARD_DECISION_SQV from '../component/DASHBOARD_DECISION_SQV.js'
import SwitchComponent from '../component/SwitchComponent.js'

export default function DASHBOARD() {
    const [rub , setRub]=useState('DASH')
  return (
    <div className='flex w-full'>

        {/* Dash gauche  */}
      <div className='w-[80%] h-screen flex flex-col '>
        {/* Dash gauche - partie haut */}

        <div className='h-[10%]'>
            <DASHBOARD_HEADER />
             </div>

        {/* Dash gauche - partie bas */}
        <div className='h-[90%]  flex flex-row p-1 '> 

        {/* Dash gauche - partie bas - menu */}
        <div className='w-[20%] h-full  '> 
        <DASHBOARD_MENU setRub={(p)=>setRub(p)}/>
        </div>

        {/* Dash gauche - partie bas - zone control */}
        <SwitchComponent rub= {rub} setRub={(p)=>setRub(p)} retour={()=>setRub('DASH')} />
        </div>
      </div >

        {/* Dash droit */}
      <div className='w-[20%]'>
        <DASHBOARD_PEOPLE />
        <DASHBOARD_SQV creer ={()=>setRub('USERCREER')} pre ={()=>setRub('PRE')} />
        <DASHBOARD_DECISION_SQV/>
      </div>
    </div>
  )
}
