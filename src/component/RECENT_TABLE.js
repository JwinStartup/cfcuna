import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { preinscritActions}from '../reducer/preinscrit'
import { PropagateLoader } from 'react-spinners';

export default function RECENT_TABLE({setRub}) {
    const dispatch =useDispatch()
    const liste = useSelector((state)=>{
         return state.preinscritReducer
    });

   useEffect(() => { 
     dispatch(preinscritActions.listerTroisPremier())
   },[])

   const colour =(p)=>{
    switch (p) {
        case 'QSE':
            return 'bg-green-600'
        case 'SID':
            return 'bg-violet-600'
        case 'VDAF':
            return 'bg-yellow-600'
            case 'NSA':
                return 'bg-blue-300'    
    
        default:
            break;
    }
   }
  return (
    <div className='h-full w-full   bg-gray-100 p-2 rounded-xl flex justify-center'>
        {liste.isLoader===true? <div className=' flex justify-center items-center p-8'> <PropagateLoader
        color={"green"}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>: <div className='w-full'>
        {liste.preinscritPost.length===0?<p className='text-center'>Pas de nouveau preinscrit</p>:<table className='w-full'>
            <thead>
                <tr>
                    <th className='border-b-2 text-gray-400 '>Nom</th>
                    <th className='border-b-2 text-gray-400 '>Prenoms</th>
                    <th className='border-b-2 text-gray-400 '>Numero</th>
                    <th className='border-b-2 text-gray-400 '>Email</th>
                    <th className='border-b-2 text-gray-400 '>Preinscription</th>
                    <th className='border-b-2 text-gray-400 '>Filiére</th>
                    <th className='border-b-2 text-gray-400 '>Decision</th>
                </tr>
            </thead>
            <tbody className=' '>
                {liste.preinscritPost.map((u,i)=><tr key={i}  onClick={()=>setRub({nom:"PREDETAIL",payload:u})} className=' odd:bg-gray-100  bg-white rounded-3xl h-14 m-2  items-center w-full hover:bg-green-100 cursor-pointer'>
                <th className='font-medium text-base text-gray-500 '>{u.nom}</th>
                    <th className='font-medium text-base text-gray-500 '>{u.prenoms}</th>
                    <th className='font-medium text-base text-gray-500 '>{u.tel}</th>
                    <th className='font-medium text-base text-gray-500 '>{u.email}</th>
                    <th className='font-medium text-base text-gray-500 '>{u.diplome}</th>
                    <th className='font-medium text-base text-gray-500 h-full pt-4 flex items-center justify-center '>
                    <div className={`${colour(u.filiere)} rounded-full w-2 h-2 mr-1 flex self-center`}/>
                    {u.filiere}
                    </th>
                    <th className='font-medium text-base text-red-500 '>{u.decisionType}</th>
                </tr>)}
                
            </tbody>
        </table>}
        </div>
      }
    </div>
  )
}
