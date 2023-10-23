import React from 'react'
import { FaChevronCircleLeft, FaSearch } from 'react-icons/fa'

export default function USERLISTE({retour}) {
  return (
    <div className='space-y-2 w-full mx-8 flex  flex-col items-center'>
      <div className='flex w-full items-center justify-center cursor-pointer mb-3'> <FaChevronCircleLeft size={30} color='gray' onClick={retour}  />
        <p className='text-xl text-gray-400 font-bold mx-3 text-center' >Liste des utilisateurs</p></div>
        <div className=' border rounded-full w-[400px] p-2 flex '>
          <FaSearch size={20} color='black' />
          <input type='search' placeholder='Recherche par nom ...' className='placeholder:font-medium w-full ml-3 outline-none '/>
        </div>
        <div className=' w-full mx-2 bg-gray-100 px-2 py-3  rounded-xl '>

<table className='w-full '>
    <thead>
        <tr>
            <th className=' text-gray-400 '>Nom</th>
            <th className=' text-gray-400 '>Email</th>
            <th className=' text-gray-400 '>Role</th>
            <th className=' text-gray-400 '></th>
        </tr>
    </thead>
    <tbody className='m-2 '>
        <tr className='cursor-pointer  bg-white rounded-3xl h-14 m-2  items-center w-full'>
        <th className='font-medium text-base text-gray-500 '>AKOU</th>
            <th className='font-medium text-base text-gray-500 '>jeanakoupaul@gmail.com</th>
            <th className='font-medium text-base text-gray-500 '>Directeur</th>
            <th className='font-medium text-bas h-full flex  pt-2 space-x-4 items-center justify-center '>
            <button className=' rounded-full   flex bg-green-500 text-white text-sm p-2 '>
                modifier
            </button>
            <button className=' rounded-full   flex bg-red-500 text-white text-sm p-2 '>
                supprimer
            </button>
       
            </th>
        </tr>
        <tr className='cursor-pointer   rounded-3xl h-14 m-2  items-center w-full'>
        <th className='font-medium text-base text-gray-500 '>AKOU</th>
            <th className='font-medium text-base text-gray-500 '>jeanakoupaul@gmail.com</th>
            <th className='font-medium text-base text-gray-500 '>Conseiller</th>
            <th className='font-medium text-base h-full flex pt-2 space-x-4  items-center justify-center '>
            <button className=' rounded-full   flex bg-green-500 text-white text-sm p-2 '>
                modifier
            </button>
            <button className=' rounded-full   flex bg-red-500 text-white text-sm p-2 '>
                supprimer
            </button>
      
            </th>
        </tr>
        <tr className='cursor-pointer bg-white  rounded-3xl h-14 m-2  items-center w-full'>
        <th className='font-medium text-base text-gray-500 '>AKOU</th>
            <th className='font-medium text-base text-gray-500 '>jeanakoupaul@gmail.com</th>
            <th className='font-medium text-base text-gray-500 '>Admin</th>
            <th className='font-medium text-base h-full flex pt-2 space-x-4  items-center justify-center '>
            <button className=' rounded-full   flex bg-green-500 text-white text-sm p-2 '>
                modifier
            </button>
            <button className=' rounded-full   flex bg-red-500 text-white text-sm p-2 '>
                supprimer
            </button>
      
            </th>
        </tr>
     
    </tbody>
</table>

</div>  
    </div>
  )
}
