import React from 'react'
import STAT_QSE from './STAT_QSE.js'
import STAT_SID from './STAT_SID.js'
import STAT_VDAF from './STAT_VDAF.js'
import NOUVEAU_QSE from './NOUVEAU_QSE.js'
import NOUVEAU_SID from './NOUVEAU_SID.js'
import NOUVEAU_VDAF from './NOUVEAU_VDAF.js'
import RECENT_TABLE from './RECENT_TABLE.js'
export default function HOMEDASH({setRub}) {
  return (
    <div>
                    
    {/* Dash gauche - partie bas - zone control - stat */}

    <div className='flex flex-row justify-between w-full pt-1  px-3'>
        <STAT_QSE />
        <STAT_SID />
        <STAT_VDAF />
    </div>
    {/* Dash gauche - partie bas - zone control - nouveau preinscription */}
      <p className='text-xl text-gray-400 font-bold mx-3'>Nouvelle pre-inscription</p>
    <div className='flex flex-row justify-between w-full mt-0'>
        <NOUVEAU_QSE/>
        <NOUVEAU_SID/>
        <NOUVEAU_VDAF/>
    </div>
     <div className='flex justify-between'> <p className='text-xl text-gray-400 font-bold mx-3 my-2'>Recente pre-inscription</p>
     <button className='text-base text-red-400 font-bold mx-3 my-2'onClick={()=>setRub('DPEC')} >Voir plus</button>
</div>
    {/* Dash gauche - partie bas - zone control - Recent */}
       <div className='bg-white m-2 '>
         <RECENT_TABLE />
       </div>
    
     
    </div> 
  )
}
