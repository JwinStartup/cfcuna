import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

export default function NOUVEAU_VDAF() {
  return (
    <div className=' mx-2 w-72 h-64  shadow-md border-2 bg-white border-white rounded-md flex flex-col items-center'> 
    <div className='flex justify-between w-full'>
   <div className='p-1 flex flex-row items-center space-x-1'>
   <div className='bg-yellow-600 rounded-full w-3 h-3'/>
   <p className='text-lg text-gray-400 font-medium tracking-wider'>VDAF</p>
   </div>
     <p className='bg-red-400 p-2 h-7 m-1 text-center flex items-center text-red-700 text-sm font-medium rounded-md'>Nouveau</p>
   </div>
   <div className='flex flex-col  justify-between items-center px-4'>
       <div className='flex items-center space-y-5'>
           <FaUserCircle size={100} color='gray'/>
           <div className='flex flex-col items-start ml-3 mb-3'>
               <p className='text-xl font-normal text-start ml-4 w-full'>AKOU</p>
               <p className='text-xl font-normal text-start ml-4 w-full'>JEAN PAUL</p>
               <p className='text-xl font-normal text-start ml-4 w-full'>0500908420</p>
               <p className='text-base text-center text-yellow-600 font-medium '>Preinscription en Licence 3</p>
           </div>
       </div>
       <button className='p-2 bg-yellow-600 text-white text-lg font-medium tracking-widest rounded-md w-28'>Voir</button>
       
   </div>
   
   </div>
  )
}
