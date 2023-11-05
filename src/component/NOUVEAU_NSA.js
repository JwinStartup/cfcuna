import React, { useEffect } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { preinscritActions } from '../reducer/preinscrit';
import { useDispatch, useSelector } from 'react-redux';
import { PropagateLoader } from 'react-spinners';
export default function NOUVEAU_NSA({setRub}) {
  const dispatch =useDispatch()
  const liste_nsa = useSelector((state)=>{
      return state.preinscritReducer
 });
  useEffect(() => { 
    dispatch(preinscritActions.nsa_premier())
    },[])

    
  return (
      
<div className=' mx-2  shadow-md border-2 bg-white border-white rounded-md flex flex-col items-center'> 
     <div className='flex justify-between w-full'>
    <div className='p-1 flex flex-row items-center space-x-1'>
    <div className='bg-blue-300 rounded-full w-3 h-3'/>
    <p className='text-lg text-gray-400 font-medium tracking-wider'>NSA</p>
    </div>
      <p className='bg-red-400 p-2 h-7 m-1 text-center flex items-center text-red-700 text-sm font-medium rounded-md'>Nouveau</p>
    </div>
    {liste_nsa.isLoader===true?
    <div className='flex items-center justify-center h-full'>
    <PropagateLoader
        color={"green"}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>:<div>
      {liste_nsa.liste_nsa.length===0?<div className='flex items-center justify-center h-full'><p className='text-center '>Pas de nouveau preinscrit</p></div>: 
        <div className='flex flex-col  justify-between items-center px-1'>
      <div className='flex items-center space-y-5'>{liste_nsa.liste_nsa[0].image===""? <FaUserCircle size={50} color='gray'/>:<img src={liste_nsa.liste_nsa[0].image} className='w-14 h-14 rounded-full' alt=''/>}  
            <div  className='flex flex-col mb-5'>
                <p className='text-lg font-normal text-start ml-4 w-full'>{liste_nsa.liste_nsa[0].nom}</p>
                <p className='text-lg font-normal text-start ml-4 w-full'>{liste_nsa.liste_nsa[0].prenoms}</p>
                <p className='text-lg font-normal text-start ml-4 w-full'>{liste_nsa.liste_nsa[0].tel}</p>
                <p className='text-base text-center text-blue-300 font-medium '>Preinscription en {liste_nsa.liste_nsa[0].diplome} en {liste_nsa.liste_nsa[0].filiere}</p>
            </div>
        </div>
        <button onClick={()=>setRub({nom:"PREDETAIL",payload:liste_nsa.liste_nsa[0]})} className='p-2 bg-blue-300 text-white text-lg font-medium tracking-widest rounded-md w-28'>Voir</button>
        </div>}
    </div>}
    
    </div>
  )
}
