import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router'

export default function DASHBOARD_PEOPLE() {
  const navigate =useNavigate()
  return (
    <div className='flex p-5 my-2 text-base shadow-md border-2 border-gray-100 rounded-2xl font-medium tracking-wider font-sans text-start bg-gray-100  space-y-3 '>
                 <FaUserCircle size={70} color='gray'/>
                 <div className='ml-1'>
                    <p>JEAN PAUL AKOU</p>
                    <p className='text-sm ml-1'>Admin</p>
                    <button onClick={()=>navigate("/login")} className='bg-red-700 text-white p-2 rounded-xl'>Se deconnecter</button>
                 </div>
    </div>
  )
}
