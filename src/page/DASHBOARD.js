import React, { useState } from 'react'
import DASHBOARD_HEADER from '../component/DASHBOARD_HEADER.js'
import DASHBOARD_PEOPLE from '../component/DASHBOARD_PEOPLE.js'
import DASHBOARD_MENU from '../component/DASHBOARD_MENU.js'
import DASHBOARD_SQV from '../component/DASHBOARD_SQV.js'
import DASHBOARD_DECISION_SQV from '../component/DASHBOARD_DECISION_SQV.js'
import SwitchComponent from '../component/SwitchComponent.js'
import Backdrop from '../component/Backdrop.js'

export default function DASHBOARD() {
    const [rub , setRub]=useState('DASH')
    const [backdrop , setBackdrop]=useState(false)
    const valideBackdrop=()=>{
      setBackdrop(false)
      setRub('DASH')
    }
  return (
    <div className='flex w-full'>
        {backdrop===true&&<div>
          <Backdrop/>
         <div className='bg-white w-[500px] h-64 rounded-lg absolute z-20  top-56 left-[30%] flex items-center justify-center flex-col space-y-4 '>
           <p className='text-[24px] text-red-500 '>
             !! Felicitation !!
           </p>
           <p className='text-[20px] tracking-wider font-medium '>
             Votre préinscrition a étè effectuée avec success
           </p>
             <p className='text-gray-500'>Veuillez patienter dans 72h pour avoir la decision finale</p>
              <button className='bg-green-500 w-32 h-12 rounded-lg shadow-md' onClick={()=>valideBackdrop()}>
                   OK
              </button>
         </div>
         </div>}

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
        <SwitchComponent rub= {rub} setRub={(p)=>setRub(p)} retour={()=>setRub('DASH')} setBackdrop={(p)=>setBackdrop(p)} />
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
