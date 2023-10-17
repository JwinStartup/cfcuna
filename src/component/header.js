import React from 'react'
import {FiArrowRight} from 'react-icons/fi'
import { Link,useNavigate } from 'react-router-dom'

export default function Header() {
  const navigation = useNavigate()
  return (
    <div className='flex w-full justify-between items-center'>
    <div className='flex m-1'> 
        <img src={require('../assets/logo_una.png')} style={{width:60 ,height:60} } alt=''/>
        <p className='w-[100px] whitespace-normal text-[14px] ml-1 font-sans text-blue-500 font-bold tracking-wider'>
         CENTRE DE FORMATION CONTINUE
        </p>
    </div>
     <div> 
        <ul className='flex '>
        <li className='text-base cursor-pointer my-2 px-6 font-medium tracking-wide text-gray-300  border-r-slate-200 border-r-2 hover:text-black'>
          <Link to='/'> Home </Link></li>
        <li className='text-base cursor-pointer my-2 px-6 font-medium tracking-wide text-gray-300 border-r-slate-200 border-r-2 hover:text-green-500'>
        <Link to='/QSE'>QSE</Link></li>
        <li className='text-base cursor-pointer my-2 px-6 font-medium tracking-wide text-gray-300 border-r-slate-200 border-r-2 hover:text-violet-500'><Link to='/SID'>SID</Link></li>
        <li className='text-base cursor-pointer my-2 px-6 font-medium tracking-wide text-gray-300 border-r-slate-200 border-r-2 hover:text-yellow-800'><Link to='/VDAF'>VDAF</Link></li>
        <a href='/#contact'className='text-base cursor-pointer my-2 px-6 font-medium tracking-wide text-gray-300 hover:text-black'>Contact</a>
      </ul>
    </div>
    <div>
        <button onClick={()=>navigation('/preinscription')} className='flex text-center font-medium tracking-wide items-center bg-blue-600 m-1 p-2 text-base text-white rounded-xl'>
            Pre-inscription
            <FiArrowRight  width='25'/>
        </button>
    </div>
    </div>
  )
}
