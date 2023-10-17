import React from 'react'
import {FcBookmark, FcGraduationCap} from 'react-icons/fc'
import { Link } from 'react-router-dom'

export default function SousMenuSID() {
  return (
    <div>
      <ul className='p-5 text-base rounded-2xl font-medium tracking-wider font-sans text-start bg-gray-100 w-[250px] ml-5 mt-10   space-y-3 '>
        <li className='cursor-pointer flex flex-row space-x-2 text-gray-500 items-center'> <FcBookmark size={25} />
           <Link to='/VDAF'> Informations génerales </Link>
            </li>
        <li className='cursor-pointer flex flex-row space-x-2 text-gray-500'> <FcGraduationCap size={25} />
           <Link to='/VDAF/m2'> Master 2 </Link>
            </li>
      </ul>
    </div>
  )
}
