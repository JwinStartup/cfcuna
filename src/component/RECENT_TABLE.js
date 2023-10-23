import React from 'react'
import { useSelector } from 'react-redux';

export default function RECENT_TABLE() {
    const liste = useSelector((state)=>{
         return state.preinscritReducer
    });
   console.log(liste)
  return (
    <div className='h-full w-full mx-2 bg-gray-100 p-2 rounded-xl'>
        {liste.isLoader===true? <div>Chargement.....</div>:
        <table className='w-full'>
            <thead>
                <tr>
                    <th className='border-b-2 text-gray-400 '>Nom</th>
                    <th className='border-b-2 text-gray-400 '>Prenoms</th>
                    <th className='border-b-2 text-gray-400 '>Numero</th>
                    <th className='border-b-2 text-gray-400 '>Email</th>
                    <th className='border-b-2 text-gray-400 '>Preinscription</th>
                    <th className='border-b-2 text-gray-400 '>Filiére</th>
                    <th className='border-b-2 text-gray-400 '>Decision</th>
                </tr>
            </thead>
            <tbody className='m-2 '>
                <tr className=' bg-white rounded-3xl h-14 m-2  items-center w-full'>
                <th className='font-medium text-base text-gray-500 '>AKOU</th>
                    <th className='font-medium text-base text-gray-500 '>JEAN PAUL</th>
                    <th className='font-medium text-base text-gray-500 '>0500908420</th>
                    <th className='font-medium text-base text-gray-500 '>jeanakoupaul@gmail.com</th>
                    <th className='font-medium text-base text-gray-500 '>Preinscription en LICENCE 3</th>
                    <th className='font-medium text-base text-gray-500 h-full pt-4 flex items-center justify-center '>
                    <div className='bg-violet-600 rounded-full w-2 h-2 mr-1 flex self-center'/>
                    SID
                    </th>
                    <th className='font-medium text-base text-red-500 '>En cours</th>
                </tr>
                <tr className='  rounded-3xl h-14 m-2  items-center w-full'>
                <th className='font-medium text-base text-gray-500 '>AKOU</th>
                    <th className='font-medium text-base text-gray-500 '>JEAN PAUL</th>
                    <th className='font-medium text-base text-gray-500 '>0500908420</th>
                    <th className='font-medium text-base text-gray-500 '>jeanakoupaul@gmail.com</th>
                    <th className='font-medium text-base text-gray-500 '>Preinscription en LICENCE 3</th>
                    <th className='font-medium text-base text-gray-500 h-full pt-4 flex items-center justify-center '>
                    <div className='bg-green-600 rounded-full w-2 h-2 mr-1 flex self-center'/>
                QSE
                    </th>
                    <th className='font-medium text-base text-red-500 '>En cours</th>
                </tr>
                <tr className='bg-white  rounded-3xl h-14 m-2  items-center w-full'>
                <th className='font-medium text-base text-gray-500 '>AKOU</th>
                    <th className='font-medium text-base text-gray-500 '>JEAN PAUL</th>
                    <th className='font-medium text-base text-gray-500 '>0500908420</th>
                    <th className='font-medium text-base text-gray-500 '>jeanakoupaul@gmail.com</th>
                    <th className='font-medium text-base text-gray-500 '>Preinscription en LICENCE 3</th>
                    <th className='font-medium text-base text-gray-500 h-full pt-4 flex items-center justify-center '>
                    <div className='bg-yellow-600 rounded-full w-2 h-2 mr-1 flex self-center'/>
                    VDAF
                    </th>
                    <th className='font-medium text-base text-red-500 '>En cours</th>
                </tr>
            </tbody>
        </table>
      }
    </div>
  )
}
