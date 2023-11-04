import React, { useEffect } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { preinscritActions } from '../reducer/preinscrit';
import { useDispatch, useSelector } from 'react-redux';
import { PropagateLoader } from 'react-spinners';
export default function NOUVEAU_QSE({setRub}) {
  const dispatch =useDispatch()
  const liste_qse = useSelector((state)=>{
      return state.preinscritReducer
 });
  useEffect(() => { 
    dispatch(preinscritActions.qse_premier())
    },[])

    
  return (
      
<div className=' mx-2 w-64 h-64  shadow-md border-2 bg-white border-white rounded-md flex flex-col items-center'> 
     <div className='flex justify-between w-full'>
    <div className='p-1 flex flex-row items-center space-x-1'>
    <div className='bg-green-600 rounded-full w-3 h-3'/>
    <p className='text-lg text-gray-400 font-medium tracking-wider'>QSE</p>
    </div>
      <p className='bg-red-400 p-2 h-7 m-1 text-center flex items-center text-red-700 text-sm font-medium rounded-md'>Nouveau</p>
    </div>
    {liste_qse.isLoader===true?
    <div className='flex items-center justify-center h-full'>
    <PropagateLoader
        color={"green"}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>:<div>
      {liste_qse.liste_qse.length===0?<div className='flex items-center justify-center h-full'><p className='text-center '>Pas de nouveau preinscrit</p></div>: 
        <div className='flex flex-col  justify-between items-center px-4'>
      <div className='flex items-center space-y-5'>
            <FaUserCircle size={70} color='gray'/>
            <div  className='flex flex-col mb-5'>
                <p className='text-xl font-normal text-start ml-4 w-full'>{liste_qse.liste_qse[0].nom}</p>
                <p className='text-xl font-normal text-start ml-4 w-full'>{liste_qse.liste_qse[0].prenoms}</p>
                <p className='text-xl font-normal text-start ml-4 w-full'>{liste_qse.liste_qse[0].tel}</p>
                <p className='text-base text-center text-green-600 font-medium '>Preinscription en {liste_qse.liste_qse[0].diplome} en {liste_qse.liste_qse[0].filiere}</p>
            </div>
        </div>
        <button onClick={()=>setRub({nom:"PREDETAIL",payload:liste_qse.liste_qse[0]})} className='p-2 bg-green-600 text-white text-lg font-medium tracking-widest rounded-md w-28'>Voir</button>
        </div>}
    </div>}
    
    </div>
  )
}
