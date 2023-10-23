import React from 'react'

export default function STAT_QSE() {
  return (
    <div className=' m-2 w-72 h-36 shadow-md border-2 bg-white border-white rounded-md flex flex-col'> 

    <div className='p-1 flex flex-row items-center space-x-1'>
    <div className='bg-green-600 rounded-full w-3 h-3'/>
    <p className='text-lg text-gray-400 font-medium tracking-wider'>QSE</p>
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
