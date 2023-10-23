import React from 'react'
import { FaUserPlus } from 'react-icons/fa'

export default function DASHBOARD_SQV({creer,pre}) {
  return (
    <div>
    <div onClick={creer} className='p-5 cursor-pointer my-2 flex items-center space-x-2 text-base shadow-md border-2 border-gray-100 rounded-2xl font-medium tracking-wider font-sans text-start bg-gray-100   '>
                 <FaUserPlus size={30} color='gray'/>
                 <p className='text-xl text-gray-800' >Creer un utilisateur</p>
    </div>
    <div onClick={pre} className='p-5 my-2 cursor-pointer flex items-center space-x-2 text-base shadow-md border-2 border-gray-100 rounded-2xl font-medium tracking-wider font-sans text-start bg-gray-100   '>
                 <FaUserPlus size={30} color='gray'/>
                 <p className='text-base text-gray-800'>Faire une preinscription</p>
    </div>
    </div>
  )
}
