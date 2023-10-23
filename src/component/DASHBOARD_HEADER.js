import React from 'react'

export default function DASHBOARD_HEADER() {
  return (
    <div className='flex items-center space-x-96'>
      <div className='flex m-1'> 
        <img src={require('../assets/logo_una.png')} style={{width:70 ,height:70} } alt=''/>
        <p className='w-[100px] whitespace-normal text-[14px] ml-1 font-sans text-blue-500 font-bold tracking-wider'>
         CENTRE DE FORMATION CONTINUE
        </p>
    </div>  
    <p className='font-bold text-3xl tracking-widest text-black'> DASHBOARD</p>
      
    </div>
  )
}
