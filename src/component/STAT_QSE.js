import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {preinscritActions}from '../reducer/preinscrit'

export default function STAT_QSE() {
  const dispatch = useDispatch();
  const countQse = useSelector((state)=>{
    return state.preinscritReducer
});
console.log(countQse)

useEffect(() => { 
dispatch(preinscritActions.countQse())
},[])
  return (
    <div className=' m-2 w-72 h-36 shadow-md  bg-gradient-to-r from-green-400 from-10% via-green-500 via-30% to-emerald-500 to-90%  rounded-md flex flex-col'> 

    <div className='p-1 flex flex-row items-center space-x-1'>
    <div className='bg-green-600 rounded-full w-3 h-3'/>
    <p className='text-lg text-white font-medium tracking-wider'>QSE</p>
    </div>
    
    <div className='flex flex-row  justify-between px-4'>
        <div className=''>
            <div className='w-16 h-16 border-4 rounded-full text-center flex justify-center items-center'>
                20 %
            </div>
            <p>Licence 3</p>
        </div>
        <div className=''>
            <div className='w-16 h-16 border-4 rounded-full text-center flex justify-center items-center'>
                20 %
            </div>
            <p>Master 1</p>
        </div>
        <div className=''>
            <div className='w-16 h-16 border-4 rounded-full text-center flex justify-center items-center'>
                20 %
            </div>
            <p>Master 2</p>
        </div>
    </div>
    
     </div>
  )
}
