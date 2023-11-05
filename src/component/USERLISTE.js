import React, { useEffect } from 'react'
import { FaChevronCircleLeft, FaSearch } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../reducer/user';
import { PropagateLoader } from 'react-spinners';

export default function USERLISTE({retour,setBackdropUser}) {
    const dispatch = useDispatch();
  const listeUser = useSelector((state)=>{
    return state.userReducer
});
console.log(listeUser.listeUser)

useEffect(() => { 
dispatch(userActions.liste())
},[])

const mod=()=>{
    
}
  return (
    <div className='space-y-2 w-[70%] mx-20 flex  flex-col items-center'>
      <div className='flex w-full items-center justify-center cursor-pointer my-3'> <FaChevronCircleLeft size={30} color='gray' onClick={retour}  />
        <p className='text-xl text-gray-400 font-bold mx-3 text-center' >Liste des utilisateurs</p></div>
        <div className=' w-full mx-2 bg-gray-100 px-2 py-3  rounded-xl '>
        {listeUser.isLoader===true? <div className=' flex justify-center items-center p-8'> <PropagateLoader
        color={"green"}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>:<div className='w-full'>
      {listeUser.listeUser.length===0?<p className='text-center'>Pas d'utilisateur</p>:       

<table className='w-full '>
    <thead>
        <tr>
            <th className=' text-gray-400 '>Nom</th>
            <th className=' text-gray-400 '>Role</th>
            <th className=' text-gray-400 '></th>
        </tr>
    </thead>
    <tbody className='m-2 '>
       {listeUser.listeUser.map((u,i)=> <tr className='cursor-pointer  bg-white rounded-3xl h-14 m-2  items-center w-full'>
        <th className='font-medium text-base text-gray-500 '>{u.nom}</th>
            <th className='font-medium text-base text-gray-500 '>{u.role}</th>
            <th className='font-medium text-bas h-full flex  pt-2 space-x-4 items-center justify-center '>
            <button onClick={()=>setBackdropUser({boolean:true,id:u._id})} className=' rounded-full   flex bg-green-500 text-white text-sm p-2 '>
                modifier le role
            </button>
            <button onClick={()=>dispatch(userActions.supprime(u._id))} className=' rounded-full   flex bg-red-500 text-white text-sm p-2 '>
                supprimer
            </button>
       
            </th>
        </tr>)}
        
     
    </tbody>
</table>}

</div>  }
    </div></div>
  )
}
