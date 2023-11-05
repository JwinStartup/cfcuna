import React, { useEffect } from 'react'
import { FaChevronCircleLeft, FaSearch } from 'react-icons/fa'
import { preinscritActions } from '../reducer/preinscrit';
import { useDispatch, useSelector } from 'react-redux';
import { PropagateLoader } from 'react-spinners';

export default function PRELISTENSA({retour,setRub}) {
    const dispatch =useDispatch()
    const liste_nsa = useSelector((state)=>{
        return state.preinscritReducer
   });
    useEffect(() => { 
        dispatch(preinscritActions.preinscritListeNsa())
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
           const decisionColor =(p)=>{
            switch (p) {
              case "Accepte":
                
                return "text-green-400"
              case "Retrograde":
                
                return "text-orange-400"
              case "Refuse":
                
                return "text-red-800"
              case "Encours":
                
                return "text-red-400"
            
              default:
                break;
            }
           }
  return (
    <div className='space-y-2 w-full mx-8 flex  flex-col items-center'>
    <div className='flex w-full items-center justify-center cursor-pointer mb-3'> <FaChevronCircleLeft size={30} color='gray' onClick={retour}  />
      <p className='text-xl text-gray-400 font-bold mx-3 text-center' >Liste des preinscriptions en NSA </p></div>
      <div className=' border rounded-full w-[400px] p-2 flex '>
        <FaSearch size={20} color='black' />
        <input type='search' placeholder='Recherche par nom ...' className='placeholder:font-medium w-full ml-3 outline-none '/>
      </div>
      <div className=' w-full mx-2 bg-gray-100 px-2 py-3 mt-6 rounded-xl overflow-y-scroll  '>

      {liste_nsa.isLoader===true? <div className='w-full flex justify-center items-center p-2'> <PropagateLoader
        color={"green"}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>: <div className='w-full'>
        {liste_nsa.liste_nsa.length===0?<p className='text-center'>Pas de preinscription</p>:

<table className='w-full '>
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
    <tbody className='m-2 '>
    {liste_nsa.liste_nsa.map((u,i)=><tr key={i} onClick={()=>setRub({nom:"PREDETAIL",payload:u})}  className='cursor-pointer hover:bg-green-100 odd:bg-gray-100  bg-white rounded-3xl h-14 m-2  items-center w-full'>
                <th className='font-medium text-base text-gray-500 '>{u.nom}</th>
                    <th className='font-medium text-base text-gray-500 '>{u.prenoms}</th>
                    <th className='font-medium text-base text-gray-500 '>{u.tel}</th>
                    <th className='font-medium text-base text-gray-500 '>{u.email}</th>
                    <th className='font-medium text-base text-gray-500 '>{u.diplome}</th>
                    <th className='font-medium text-base text-gray-500 h-full pt-4 flex items-center justify-center '>
                    <div className={`${colour(u.filiere)} rounded-full w-2 h-2 mr-1 flex self-center`}/>
                    {u.filiere}
                    </th>
                    <th className={`font-medium text-base ${decisionColor(u.decisionType)}`} >{u.decisionType}</th>
                </tr>)}
        
        
        
        
    </tbody> 
</table>  }
</div> }
</div>  
</div>
  )
}
