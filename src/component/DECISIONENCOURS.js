import React from 'react'
import { FaChevronCircleLeft, FaSearch } from 'react-icons/fa'

export default function DECISIONENCOURS({retour}) {
  return (
    <div className='space-y-2 w-full mx-8 flex  flex-col items-center'>
      <div className='flex w-full items-center justify-center cursor-pointer mb-3'> <FaChevronCircleLeft size={30} color='gray' onClick={retour}  />
        <p className='text-xl text-gray-400 font-bold mx-3 text-center' >Décision de preinscription en cours</p></div>
        <div className=' border rounded-full w-[400px] p-2 flex '>
          <FaSearch size={20} color='black' />
          <input type='search' placeholder='Recherche par nom ...' className='placeholder:font-medium w-full ml-3 outline-none '/>
        </div>
        <div className=' w-full mx-2 bg-gray-100 px-2 py-3 mt-6 rounded-xl overflow-y-scroll h-[90%] '>

<table className='w-full '>
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
        <tr className='cursor-pointer  bg-white rounded-3xl h-14 m-2  items-center w-full'>
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
        <tr className='cursor-pointer   rounded-3xl h-14 m-2  items-center w-full'>
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
        <tr className='cursor-pointer bg-white  rounded-3xl h-14 m-2  items-center w-full'>
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
        <tr className='cursor-pointer bg-white  rounded-3xl h-14 m-2  items-center w-full'>
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
        <tr className='cursor-pointer bg-white  rounded-3xl h-14 m-2  items-center w-full'>
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
        <tr className='cursor-pointer bg-white  rounded-3xl h-14 m-2  items-center w-full'>
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
        <tr className='cursor-pointer bg-white  rounded-3xl h-14 m-2  items-center w-full'>
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
        <tr className='cursor-pointer bg-white  rounded-3xl h-14 m-2  items-center w-full'>
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
        <tr className='cursor-pointer bg-white  rounded-3xl h-14 m-2  items-center w-full'>
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
        <tr className='cursor-pointer bg-white  rounded-3xl h-14 m-2  items-center w-full'>
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
        <tr className='cursor-pointer bg-white  rounded-3xl h-14 m-2  items-center w-full'>
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
        <tr className='cursor-pointer bg-white  rounded-3xl h-14 m-2  items-center w-full'>
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
        <tr className='cursor-pointer bg-white  rounded-3xl h-14 m-2  items-center w-full'>
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
        <tr className='cursor-pointer bg-white  rounded-3xl h-14 m-2  items-center w-full'>
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
        <tr className='cursor-pointer bg-white  rounded-3xl h-14 m-2  items-center w-full'>
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
        <tr className='cursor-pointer bg-white  rounded-3xl h-14 m-2  items-center w-full'>
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
        <tr className='cursor-pointer bg-white  rounded-3xl h-14 m-2  items-center w-full'>
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
        <tr className='cursor-pointer bg-white  rounded-3xl h-14 m-2  items-center w-full'>
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
        <tr className='cursor-pointer bg-white  rounded-3xl h-14 m-2  items-center w-full'>
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
        <tr className='cursor-pointer bg-white  rounded-3xl h-14 m-2  items-center w-full'>
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
        <tr className='cursor-pointer bg-white  rounded-3xl h-14 m-2  items-center w-full'>
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
        <tr className='cursor-pointer bg-white  rounded-3xl h-14 m-2  items-center w-full'>
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
        <tr className='cursor-pointer bg-white  rounded-3xl h-14 m-2  items-center w-full'>
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
        <tr className='cursor-pointer bg-white  rounded-3xl h-14 m-2  items-center w-full'>
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

</div>  
    </div>
  )
}
