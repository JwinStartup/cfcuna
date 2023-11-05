import React, { useEffect } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { PropagateLoader } from 'react-spinners'
import { preinscritActions } from '../reducer/preinscrit';
import { useDispatch, useSelector } from 'react-redux';

export default function NOUVEAU_VDAF({setRub}) {
  const dispatch =useDispatch()
  const liste_vdaf = useSelector((state)=>{
      return state.preinscritReducer
 });
  useEffect(() => { 
    dispatch(preinscritActions.vdaf_premier())
    },[])
  return (
    <div className=' mx-2   shadow-md border-2 bg-white border-white rounded-md flex flex-col items-center'> 
    <div className='flex justify-between w-full'>
   <div className='p-1 flex flex-row items-center space-x-1'>
   <div className='bg-yellow-600 rounded-full w-3 h-3'/>
   <p className='text-lg text-gray-400 font-medium tracking-wider'>VDAF</p>
   </div>
     <p className='bg-red-400 p-2 h-7 m-1 text-center flex items-center text-red-700 text-sm font-medium rounded-md'>Nouveau</p>
   </div>
   {liste_vdaf.isLoader===true?
    <div className='flex items-center justify-center h-full'>
    <PropagateLoader
        color={"green"}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>:<div>
      {liste_vdaf.liste_vdaf.length===0?<p className='text-center'>Pas de nouveau preinscrit</p>: 
        <div className='flex flex-col  justify-between items-center px-4'>
      <div className='flex items-center space-y-5'>
      {liste_vdaf.liste_vdaf[0].image===""? <FaUserCircle size={50} color='gray'/>:<img src={liste_vdaf.liste_vdaf[0].image} className='w-14 h-14 rounded-full' alt=''/>}
            <div  className='flex flex-col mb-3'>
                <p className='text- font-normal text-start ml-4 w-full'>{liste_vdaf.liste_vdaf[0].nom}</p>
                <p className='text- font-normal text-start ml-4 w-full'>{liste_vdaf.liste_vdaf[0].prenoms}</p>
                <p className='text- font-normal text-start ml-4 w-full'>{liste_vdaf.liste_vdaf[0].tel}</p>
                <p className='text-base text-center text-yellow-600 font-medium '>Preinscription en {liste_vdaf.liste_vdaf[0].diplome} en {liste_vdaf.liste_vdaf[0].filiere}</p>
            </div>
        </div>
        <button onClick={()=>setRub({nom:"PREDETAIL",payload:liste_vdaf.liste_vdaf[0]})} className='p-2 bg-yellow-600 text-white text-lg font-medium tracking-widest rounded-md w-28'>Voir</button>
        </div>}
    </div>}
   
   </div>
  )
}
