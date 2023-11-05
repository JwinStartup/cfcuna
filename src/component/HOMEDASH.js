import React from 'react'
import STAT_QSE from './STAT_QSE.js'
import STAT_SID from './STAT_SID.js'
import STAT_VDAF from './STAT_VDAF.js'
import NOUVEAU_QSE from './NOUVEAU_QSE.js'
import NOUVEAU_SID from './NOUVEAU_SID.js'
import NOUVEAU_VDAF from './NOUVEAU_VDAF.js'
import RECENT_TABLE from './RECENT_TABLE.js'
import STAT_NSA from './STAT_NSA.js'
import NOUVEAU_NSA from './NOUVEAU_NSA.js'
export default function HOMEDASH({setRub}) {
  return (
    <div className='ml-5 flex  justify-center flex-col w-full'>
                    
    {/* Dash gauche - partie bas - zone control - stat */}

    <div className='flex flex-row    overflow-x-scroll w-[900px] ' >
        <STAT_QSE />
        <STAT_SID />
        <STAT_VDAF />
        <STAT_NSA />
    </div>
    {/* Dash gauche - partie bas - zone control - nouveau preinscription */}
      <p className='text-xl text-gray-400 font-bold mx-3'>Nouvelle pre-inscription</p>
    <div className='flex flex-row justify-between  mt-0 w-[900px] '>
        <NOUVEAU_QSE setRub={setRub}/>
        <NOUVEAU_SID setRub={setRub}/>
        <NOUVEAU_VDAF setRub={setRub}/>
        <NOUVEAU_NSA setRub={setRub}/>
    </div>
     <div className='flex justify-between'> <p className='text-xl text-gray-400 font-bold mx-3 my-2'>Recente pre-inscription</p>
     <button className='text-base text-red-400 font-bold mx-3 my-2'onClick={()=>setRub({nom:'DPEC',payload:null})} >Voir plus</button>
</div>
    {/* Dash gauche - partie bas - zone control - Recent */}
       <div className='bg-white  w-full'>
         <RECENT_TABLE setRub={setRub}/>
       </div>
    
     
    </div> 
  )
}
