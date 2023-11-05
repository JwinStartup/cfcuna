import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { HiMiniUserGroup } from 'react-icons/hi2'

export default function DASHBOARD_MENU({setRub}) {
  return (
  
      
    <div className='w-[250px]'>
      <ul className=' ml-2 p-3 text-base shadow-md border-2 border-gray-100 rounded-2xl font-medium tracking-wider font-sans text-start bg-gray-100  space-y-3 '>
        <li onClick={()=>setRub('PRELISTE')} className='cursor-pointer space-x-1 items-center   flex flex-row  text-gray-500'> <div className='bg-black rounded-full w-5 h-5'/>
          <p> Preinscriptions</p>
            </li>
        <li onClick={()=>setRub('PRELISTESID')} className='cursor-pointer space-x-1 items-center  flex flex-row  text-gray-500'> <div className='bg-violet-600 rounded-full w-5 h-5'/>
            <p> Preinscriptions en SID </p>
            </li>
        <li onClick={()=>setRub('PRELISTEQSE')} className='cursor-pointer space-x-1 items-center  flex flex-row  text-gray-500'> <div className='bg-green-600 rounded-full w-5 h-5'/>
            <p> Preinscriptions en QSE </p>
            </li>
        <li onClick={()=>setRub('PRELISTEVDAF')} className='cursor-pointer space-x-1 items-center  flex flex-row  text-gray-500'> <div className='bg-yellow-600 rounded-full w-5 h-5'/>
            <p> Preinscriptions en VDAF </p>
            </li>
        <li onClick={()=>setRub('PRELISTENSA')} className='cursor-pointer space-x-1 items-center  flex flex-row  text-gray-500'> <div className='bg-blue-300 rounded-full w-5 h-5'/>
            <p> Preinscriptions en NSA</p>
            </li>
        <li onClick={()=>setRub('USERLISTE')} className='cursor-pointer flex flex-row space-x-1 text-gray-500 items-center'> <HiMiniUserGroup size={25} />
            <p>Utilisateurs</p> 
            </li>
      </ul>
    </div>
  )
}



