import React, { useState } from 'react'
import DASHBOARD_HEADER from '../component/DASHBOARD_HEADER.js'
import DASHBOARD_PEOPLE from '../component/DASHBOARD_PEOPLE.js'
import DASHBOARD_MENU from '../component/DASHBOARD_MENU.js'
import DASHBOARD_SQV from '../component/DASHBOARD_SQV.js'
import DASHBOARD_DECISION_SQV from '../component/DASHBOARD_DECISION_SQV.js'
import SwitchComponent from '../component/SwitchComponent.js'
import Backdrop from '../component/Backdrop.js'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { userActions } from '../reducer/user.js'

export default function DASHBOARD() {
    const [rub , setRub]=useState({nom:'DASH',payload:null})
    const [backdrop , setBackdrop]=useState(false)
    const [backdropUser , setBackdropUser]=useState({boolean:false,id:null})
    const dispatch =useDispatch()
    const { register, handleSubmit} = useForm();
    const valideBackdrop=()=>{
      setBackdrop(false)
      setRub({nom:'DASH',payload:null})
    }
    const onSubmit=(data)=>{
      console.log({role:data.role,id:backdropUser.id})
  dispatch(userActions.modifierRole({role:data.role,id:backdropUser.id})).then(()=>setBackdropUser(false))
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
        {backdropUser.boolean===true&&<div>
          <Backdrop/>
         <form onSubmit={handleSubmit(onSubmit)} className='bg-white w-[500px] h-64 rounded-lg absolute z-20  top-56 left-[30%] flex items-center justify-center flex-col space-y-4'>
           <p className='text-lg text-gray-400 font-bold '>
             Modifier Role
           </p>
           <div className='space-x-7 flex items-center'> 
               <select {...register("role")}  className=' outline-none border-b-2 border-b-gray-300 p-2 mb-3 text-center'>
               <option  >Admin</option>
                <option  >Directeur</option>
                <option >Analyste</option>
                <option selected>Conseiller</option>
               </select>
            </div>
            <div className='space-x-7'>    
             <button className='bg-green-500 w-32 h-12 text-white font-medium rounded-lg shadow-md ' onClick={()=>setBackdropUser({boolean:false})}>
                   Retour
              </button>
              <button type='submit' className='bg-red-500 w-32 h-12 text-white font-medium rounded-lg shadow-md ' >
                   Modifier
              </button>
              </div>
         </form>  
         </div>}

        {/* Dash gauche  */}
      <div className='w-[80%] h-screen flex flex-col '>
        {/* Dash gauche - partie haut */}

        <div className='h-[10%]'>
            <DASHBOARD_HEADER />
             </div>

        {/* Dash gauche - partie bas */}
        <div className='h-[90%]  flex flex-row p-1  '> 
        <div className='w-[20%] h-full  '> 
        <DASHBOARD_MENU setRub={(p)=>setRub({nom:p,payload:null})}/>
        </div>

        {/* Dash gauche - partie bas - menu */}

        {/* Dash gauche - partie bas - zone control */}
        <SwitchComponent rub= {rub} setRub={(p)=>setRub(p)} retour={()=>setRub({nom:'DASH',payload:null})} setBackdrop={(p)=>setBackdrop(p)} setBackdropUser={(p)=>setBackdropUser(p)}/>
        </div>
      </div >

        {/* Dash droit */}
      <div className='w-[20%]'>
        <DASHBOARD_PEOPLE />
        <DASHBOARD_SQV creer ={()=>setRub({nom:'USERCREER',payload:null})} pre ={()=>setRub({nom:'PRE',payload:null})} />
        <DASHBOARD_DECISION_SQV setRub={setRub} />
      </div>
    </div>
  )
}
