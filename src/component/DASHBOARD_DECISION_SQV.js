import React, { useEffect, useLayoutEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { preinscritActions } from '../reducer/preinscrit';
import { PropagateLoader } from 'react-spinners';
import DataDecisionSID from './DataDecisionSID.js';
import DataDecisionQSE from './DataDecisionQSE.js';
import DataDecisionVDAF from './DataDecisionVDAF.js';
import DataDecisionNSA from './DataDecisionNSA.js';

export default function DASHBOARD_DECISION_SQV({setRub}) {
  const dispatch =useDispatch()
    const liste = useSelector((state)=>{
         return state.preinscritReducer
        });
        const [lister,setLister]=useState([])
  
   const [border,setBorder]=useState('QSE')

   
     const listerDec=(p)=>{
      console.log(p)
      setBorder(p) 
      const l=liste.listeDec.filter((u)=>u.filiere===p)
       setLister(l)
     }
   const switchDec =(p)=>{
    switch (p) {
      case 'QSE':
        return(
          <DataDecisionQSE setRub={setRub} />
        )
      case 'NSA':
        return(
          <DataDecisionNSA setRub={setRub} />
        )
      case 'VDAF':
        return(
          <DataDecisionVDAF setRub={setRub} />
        )
      case 'SID':
        return(
          <DataDecisionSID setRub={setRub} />
        )
    
      default:
        return(
          <DataDecisionQSE setRub={setRub} />
        )
    }
   }
  return (
    <div className="">
      <p className='text-xl text-gray-400 font-bold mx-3 my-2 '>Decision de preinscription</p>
      <div className='py-2 h-[420px]  flex flex-col items-center  text-base shadow-md border-2 border-gray-100 rounded-2xl  bg-gray-100   '>
                <ul className='flex justify-between w-full h-11 space-x-2'>
                <li   onClick={()=>listerDec('QSE')} className={`cursor-pointer ${border==='QSE'?'border-b-gray-600 border-b-2':" "} p-1 flex flex-row items-center space-x-1 `}>
                        <div className='bg-green-600 rounded-full w-3 h-3'/>
                        <p className={`text-lg  text-gray-400 font-medium tracking-wider`}>QSE</p>
                </li>
                <li onClick={()=>listerDec('SID')} className={`cursor-pointer ${border==='SID'?'border-b-gray-600 border-b-2':" "}  p-1 flex flex-row items-center space-x-1 `}>
                        <div className='bg-violet-600 rounded-full w-3 h-3'/>
                        <p className={`text-lg  text-gray-400 font-medium tracking-wider`}>SID</p>
                </li>
                <li onClick={()=>listerDec('VDAF')} className={`cursor-pointer ${border==='VDAF'?'border-b-gray-600 border-b-2':" "}  p-1 flex flex-row items-center space-x-1 `}>
                        <div className='bg-yellow-600 rounded-full w-3 h-3'/>
                        <p className={`text-lg  text-gray-400 font-medium tracking-wider`}>VDAF</p>
                </li>
                <li onClick={()=>listerDec('NSA')} className={`cursor-pointer ${border==='NSA'?'border-b-gray-600 border-b-2':" "}  p-1 flex flex-row items-center space-x-1 `}>
                        <div className='bg-blue-300 rounded-full w-3 h-3'/>
                        <p className={`text-lg  text-gray-400 font-medium tracking-wider`}>NSA</p>
                </li>

                </ul>
                
                

                 <div className='w-full'>
               
                    {switchDec(border)}
            
               
                   
                  
                </div>
                
    </div>
    </div>
  )
}
