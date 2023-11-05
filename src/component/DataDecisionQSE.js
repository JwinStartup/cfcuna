import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { preinscritActions } from '../reducer/preinscrit';
import { PropagateLoader } from 'react-spinners';
import { FaSearch } from 'react-icons/fa';

export default function DataDecisionQSE({setRub}) {
    const dispatch =useDispatch()
    const listeDec_qse = useSelector((state)=>{
         return state.preinscritReducer
        });
        useEffect(() => { 
            dispatch(preinscritActions.decision_traite_qse())
        },[])
        const [lister,setLister]=useState(listeDec_qse)
    const onChangeQSE=(p)=>{
        const filter= listeDec_qse.listeDec_qse.filter((u)=>u.numero.match(p))
        console.log(filter)
        setLister({
            isLoader:false,
            listeDec_qse:filter
        })
       
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
    <div className='w-full'>
        <div className=' border rounded-full justify-center items-center flex my-3'>
                   <FaSearch size={20} color='black' />
                    <input onChange={(e)=>onChangeQSE(e.target.value)} type='search' placeholder='Numero ...' className='py-2 bg-transparent ml-3 outline-none placeholder:font-medium   '/>
                  </div>
        {lister.isLoader===true?
      <div className='flex items-center justify-center h-full w-80'>
    <PropagateLoader
        color={"green"}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>:
    <div>  {lister.listeDec_qse.length===0?<p className='text-center'>Pas de decision traité</p>:<div> {lister.listeDec_qse.map((u,i)=>
                   <div onClick={()=>setRub({nom:"PREDETAIL",payload:u})}  key={i} className='flex justify-between w-full py-2 hover:bg-green-100 px-3 cursor-pointer'>
                    <p className='text-sm text-black font-medium'>{u.numero} </p>
                    <p className={`text-sm ${decisionColor(u.decisionType)}  font-medium`} >{u.decisionType} </p>
                   </div>)}</div> }
    </div>}
    </div>
  )
}
