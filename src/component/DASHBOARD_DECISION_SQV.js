import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function DASHBOARD_DECISION_SQV() {
  return (
    <div>
      <p className='text-xl text-gray-400 font-bold mx-3 my-2 '>Decision de preinscription</p>
      <div className='p-5 h-[450px] my-2 flex flex-col items-center space-x-2 text-base shadow-md border-2 border-gray-100 rounded-2xl  bg-gray-100   '>
                <ul className='flex justify-between w-full h-11'>
                <li className='cursor-pointer p-1 flex flex-row items-center space-x-1 border-b-2 border-b-gray-600'>
                        <div className='bg-green-600 rounded-full w-3 h-3'/>
                        <p className='text-lg text-gray-400 font-medium tracking-wider'>QSE</p>
                </li>
                <li className='cursor-pointer p-1 flex flex-row items-center space-x-1 border-b-2 border-b-gray-600'>
                        <div className='bg-violet-600 rounded-full w-3 h-3'/>
                        <p className='text-lg text-gray-400 font-medium tracking-wider'>SID</p>
                </li>
                <li className='cursor-pointer p-1 flex flex-row items-center space-x-1 border-b-2 border-b-gray-600'>
                        <div className='bg-yellow-600 rounded-full w-3 h-3'/>
                        <p className='text-lg text-gray-400 font-medium tracking-wider'>VDAF</p>
                </li>

                </ul>
                <div className='w-full'>
                <div className=' border rounded-full justify-center items-center flex my-3'>
                   <FaSearch size={20} color='black' />
                    <input type='search' placeholder='Recherche par id ...' className='py-2 bg-transparent ml-3 outline-none placeholder:font-medium   '/>
                  </div>
                   <div className='flex justify-between w-full py-2'>
                    <p className='text-sm text-black font-medium'>09782929NHSJSUNcf</p>
                    <p className='text-sm text-green-400 font-medium'>accepté</p>
                   </div>
                   <div className='flex justify-between w-full py-2'>
                    <p className='text-sm text-black font-medium'>09782929NHSJSUNcf</p>
                    <p className='text-sm text-green-400 font-medium'>accepté</p>
                   </div>
                   <div className='flex justify-between w-full py-2'>
                    <p className='text-sm text-black font-medium'>09782929NHSJSUNcf</p>
                    <p className='text-sm text-red-400 font-medium'>refuse</p>
                   </div>
                   <div className='flex justify-between w-full py-2'>
                    <p className='text-sm text-black font-medium'>09782929NHSJSUNcf</p>
                    <p className='text-sm text-green-400 font-medium'>accepté</p>
                   </div>
                   <div className='flex justify-between w-full py-2'>
                    <p className='text-sm text-black font-medium'>09782929NHSJSUNcf</p>
                    <p className='text-sm text-yellow-500 font-medium'>retrogradé</p>
                   </div>
                   <div className='flex justify-between w-full py-2'>
                    <p className='text-sm text-black font-medium'>09782929NHSJSUNcf</p>
                    <p className='text-sm text-green-400 font-medium'>accepté</p>
                   </div>
                </div>
                
    </div>
    </div>
  )
}
