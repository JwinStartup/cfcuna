import React, { useEffect, useState } from 'react'
import { FaChevronCircleLeft, FaSearch, FaUserCircle } from 'react-icons/fa'
import { preinscritActions } from '../reducer/preinscrit';
import { useDispatch, useSelector } from 'react-redux';
import { PropagateLoader } from 'react-spinners';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import ViewerPdf from './ViewerPdf';
import Backdrop from './Backdrop';
import { useForm } from 'react-hook-form';

export default function PRELISTE({retour,rub}) {
    const dispatch =useDispatch()
    const { register, handleSubmit} = useForm();
        const [decision,setDecision]=useState(false)
   
        const colour =(p)=>{
            switch (p) {
                case 'QSE':
                    return 'bg-green-600'
                case 'SID':
                    return 'bg-violet-600'
                case 'VDAF':
                    return 'bg-yellow-600'
            
                default:
                    break;
            }
           }
        const colourText =(p)=>{
            switch (p) {
                case 'QSE':
                    return 'text-green-600'
                case 'SID':
                    return 'text-violet-600'
                case 'VDAF':
                    return 'text-yellow-600'
            
                default:
                    break;
            }
           }
        const onSubmit=(data)=>{
            console.log({decisionType:data.decisionType,diplome:data.diplome,pre:rub.payload._id})
        dispatch(preinscritActions.modifie({decisionType:data.decisionType,diplome:data.diplome,pre:rub.payload._id})).then(()=>setDecision(false))
        }

     const decisionPre =(p)=>{
      switch (p) {
        case "Encours":
          return(
            <div className='w-full flex items-center justify-center'>
          <div className='flex justify-center items-center mt-4  rounded-lg  bg-yellow-100 p-10 w-[500px] text-lg  flex-col space-y-2'> 
           <p className='font-medium'>
                La preinscription est <span className='text-red-400'> en cours </span>de traitement
            </p>
            <button className='p-2 w-32 text-white rounded-lg bg-red-500' onClick={()=>setDecision(true)} >
                Modifier
            </button>
          </div></div>
          )
        case "Accepte":
          return(
            <div className='w-full flex items-center justify-center'>
          <div className='flex justify-center items-center mt-4  rounded-lg  bg-green-100 p-10 w-[500px] text-lg  flex-col space-y-2'> 
           <p className='font-medium'>
                Votre preinscription a étè <span className='text-green-400'> accepté</span> 
            </p>
            <button className='p-2 w-32 text-white rounded-lg bg-red-500' onClick={()=>setDecision(true)} >
                Modifier
            </button>
          </div></div>
          )
        case "Refuse":
          return(
            <div className='w-full flex items-center justify-center'>
          <div className='flex justify-center items-center mt-4  rounded-lg  bg-red-100 p-10 w-[500px] text-lg  flex-col space-y-2'> 
           <p className='font-medium'>
                votre preinscription a étè <span className='text-red-700'> refusé </span>
            </p>
            <button className='p-2 w-32 text-white rounded-lg bg-red-500' onClick={()=>setDecision(true)} >
                Modifier
            </button>
          </div></div>
          )
        case "Retrograde":
          return(
            <div className='w-full flex items-center justify-center'>
          <div className='flex justify-center items-center mt-4  rounded-lg  bg-orange-100 p-10 w-[500px] text-lg  flex-col space-y-2'> 
           <p className='font-medium'>
                Vous avez étè <span className='text-orange-700'> rétrogradé au niveau inferieur </span>
            </p>
            <button className='p-2 w-32 text-white rounded-lg bg-red-500' onClick={()=>setDecision(true)} >
                Modifier
            </button>
          </div></div>
          )
      
        default:
          break;
      }
     }   
        
  return (
    <div className='space-y-2 w-full mx-8 flex  flex-col items-center'>
       {decision===true&& <div className='h-full absolute w-full top-0 left-0'>
          <Backdrop/>
         <form onSubmit={handleSubmit(onSubmit)} className='bg-white w-[500px] h-64 rounded-lg absolute z-20  top-56 left-[30%] flex items-center justify-center flex-col space-y-4'>
           <p className='text-lg text-gray-400 font-bold '>
             Prendre une decision de preinscription
           </p>
           <div className='space-x-7 flex items-center'> 
               <select {...register("decisionType")}   className='outline-none border-b-2 border-b-gray-300 p-2 mb-3 text-center'>
                <option selected={rub.payload.decisionType==="Accepte"} >Accepte</option>
                <option selected={rub.payload.decisionType==="Encours"} >Encours</option>
                <option selected={rub.payload.decisionType==="Retrograde"}>Retrograde</option>
                <option selected={rub.payload.decisionType==="Refuse"}>Refuse</option>
               </select>
               <p className='text-lg font-medium text-gray-400'>en</p>
               <select {...register("diplome")}  className=' outline-none border-b-2 border-b-gray-300 p-2 mb-3 text-center'>
               <option selected={rub.payload.diplome==="Licence2"} >Licence2</option>
                <option selected={rub.payload.diplome==="Licence3"} >Licence3</option>
                <option selected={rub.payload.diplome==="Master1"}>Master1</option>
                <option selected={rub.payload.diplome==="Master2"}>Master2</option>
               </select>
            </div>
            <div className='space-x-7'>    
             <button className='bg-green-500 w-32 h-12 text-white font-medium rounded-lg shadow-md ' onClick={()=>setDecision(false)}>
                   Retour
              </button>
              <button type='submit' className='bg-red-500 w-32 h-12 text-white font-medium rounded-lg shadow-md ' >
                   Modifier
              </button>
              </div>
         </form>
         </div>}
    <div className='flex w-full items-center justify-center cursor-pointer mb-3'> <FaChevronCircleLeft size={30} color='gray' onClick={retour}  />
      <p className='text-xl text-gray-400 font-bold mx-3 text-center' >Detail Preinscription </p></div>
      <div className=' w-full mx-2 bg-gray-100 px-2 py-3 mt-6 rounded-xl overflow-y-scroll '>
          <div className='flex flex-row'>
            <div className='flex flex-row border-r-2  my-1 px-6  border-r-slate-200 '>
             <FaUserCircle size={50} color='gray'/>
            <div className='flex flex-col pl-1'> 
                <p>{rub.payload.nom} {rub.payload.prenoms}</p>
                <p className='text-sm text-green-500'>{rub.payload.numero}</p>
            </div>
            </div>
           
            <div className='flex flex-row px-5 space-x-4 justify-center items-center '> 
               <div className='flex flex-row items-center space-x-1'> <div className={`${colour(rub.payload.filiere)} rounded-full w-2 h-2  `}/>
                <p>{rub.payload.filiere} </p></div>
                <div className='w-2 h-2 bg-black'/>
                <p  className='ml-3'>Preinscription en <span className={`${colourText(rub.payload.filiere)}`}>{rub.payload.diplome}</span></p>
            
            </div>
            <div className='flex flex-row border-l-2  my-1 px-6  border-l-slate-200 '>
            <div className='flex flex-col pl-1'> 
                <p>{rub.payload.email} </p>
                <p className='text-sm text-red-500'>{rub.payload.tel}</p>
            </div>
            </div>
          </div>
          <div className='ml-9 py-4'>
            <p className='text-base underline text-gray-400 font-bold '>Dossiers fournis</p>
            
            <ul className='w-full flex flex-row  space-x-16 mt-2  pl-2'>
              <li className='cursor-pointer' > 
                <iframe title=' '  secure src={rub.payload.fileCv}  className='w-32 h-32' />
                <a href={rub.payload.fileCv} target="_blank" rel='noreferrer' className='hover:underline text-base  font-medium'>Curriculum Vitea</a>
             </li>
              <li className='cursor-pointer' > 
                <iframe title=' '  secure src={rub.payload.fileBac} className='w-32 h-32' />
                <a href={rub.payload.fileBac} target="_blank" rel='noreferrer' className='hover:underline text-base  font-medium'>Bac ou équivalent</a>
             </li>
              <li className='cursor-pointer' > 
                <iframe title=' '  secure src={rub.payload.fileDernierBac} className='w-32 h-32' />
                <a href={rub.payload.fileDernierBac} target="_blank" rel='noreferrer' className='hover:underline text-base  font-medium'>Dernier diplôme</a>
             </li>
          </ul>
          </div>
          <div className='ml-9 py-4'>
            <p className='text-base underline text-gray-400 font-bold '>Decision de preinscription</p>
              {decisionPre(rub.payload.decisionType)}
          </div>

</div>  
</div>
  )
}
