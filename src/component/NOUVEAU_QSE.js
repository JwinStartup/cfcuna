import React, { useEffect } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { preinscritActions } from '../reducer/preinscrit';
import { useDispatch, useSelector } from 'react-redux';
import { PropagateLoader } from 'react-spinners';
export default function NOUVEAU_QSE() {
  const dispatch =useDispatch()
  const liste = useSelector((state)=>{
      return state.preinscritReducer
 });
  useEffect(() => { 
    dispatch(preinscritActions.sid_premier())
    },[])

    
  return (
      
<div className=' mx-2 w-72 h-64  shadow-md border-2 bg-white border-white rounded-md flex flex-col items-center'> 
     <div className='flex justify-between w-full'>
    <div className='p-1 flex flex-row items-center space-x-1'>
    <div className='bg-green-600 rounded-full w-3 h-3'/>
    <p className='text-lg text-gray-400 font-medium tracking-wider'>QSE</p>
    </div>
      <p className='bg-red-400 p-2 h-7 m-1 text-center flex items-center text-red-700 text-sm font-medium rounded-md'>Nouveau</p>
    </div>
    <div className='flex flex-col  justify-between items-center px-4'>
    {liste.isLoader===true?<PropagateLoader
        color={"green"}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />:<div>
      {liste.liste.length===0?<p className='text-center'>Pas de preinscription</p>: <div className='flex items-center space-y-5'>
            <FaUserCircle size={100} color='gray'/>
            {liste.liste.map((u,i)=><div key={i} className='flex flex-col items-start ml-3 mb-3'>
                <p className='text-xl font-normal text-start ml-4 w-full'>{u.nom}</p>
                <p className='text-xl font-normal text-start ml-4 w-full'>{u.prenoms}</p>
                <p className='text-xl font-normal text-start ml-4 w-full'>{u.filiere}</p>
                <p className='text-base text-center text-green-600 font-medium '>{u.numero}</p>
            </div>)}
        </div>}</div>}
        <button className='p-2 bg-green-600 text-white text-lg font-medium tracking-widest rounded-md w-28'>Voir</button>
        
    </div>
    
    </div>
  )
}
