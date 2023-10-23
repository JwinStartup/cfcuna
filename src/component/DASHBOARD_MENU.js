import React from 'react'
import { FcBookmark, FcGraduationCap } from 'react-icons/fc'
import { FaUserAltSlash } from 'react-icons/fa'

export default function DASHBOARD_MENU({setRub}) {
  return (
  
      
    <div className='w-full'>
      <ul className='p-5 text-base shadow-md border-2 border-gray-100 rounded-2xl font-medium tracking-wider font-sans text-start bg-gray-100  space-y-3 '>
        <li onClick={()=>setRub('USERLISTE')} className='cursor-pointer flex flex-row space-x-2 text-gray-500 items-center'> <FaUserAltSlash size={25} />
             Utilisateurs
            </li>
        <li onClick={()=>setRub('PRELISTE')} className='cursor-pointer flex flex-row space-x-2 text-gray-500'> <FcGraduationCap size={25} />
             Preinscriptions
            </li>
        <li onClick={()=>setRub('PRELISTESID')} className='cursor-pointer flex flex-row space-x-2 text-gray-500'> <FcGraduationCap size={25} />
             Preinscriptions en SID 
            </li>
        <li onClick={()=>setRub('PRELISTEQSE')} className='cursor-pointer flex flex-row space-x-2 text-gray-500'> <FcGraduationCap size={25} />
             Preinscriptions en QSE 
            </li>
        <li onClick={()=>setRub('PRELISTEVDAF')} className='cursor-pointer flex flex-row space-x-2 text-gray-500'> <FcGraduationCap size={25} />
             Preinscriptions en VDAF 
            </li>
      </ul>
    </div>
  )
}



