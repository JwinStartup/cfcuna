import React, { useState } from 'react'
import Header from '../component/header'
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from "yup"
import { BeatLoader } from 'react-spinners';
import { useNavigate } from 'react-router';
import { preinscritActions } from '../reducer/preinscrit';
import Backdrop from '../component/Backdrop';
const schema = yup
.object({
    Numero: yup.string().required()
})
.required()
export default function PREINSCRIPTIONHOME() {
    const dispatch = useDispatch();
    const { register,watch,getValues, handleSubmit, formState: { errors }} = useForm(
      { resolver: yupResolver(schema),}
    );
    const [loading,setLoading]=useState(false) 
    const [dashboard,setDashboard]=useState(false) 
    const [numero,setNumero]=useState(null) 
      const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data)
        setLoading(true)
        dispatch(preinscritActions.decision(data.Numero)).then((u)=>
       { setLoading(false)
        setDashboard(true)
        setNumero(u.payload)
       }
        )
        console.log(data)
        
  }
  const decisionPre =(p)=>{
    switch (p) {
      case "Encours":
        return(
          <div className='w-full flex items-center justify-center'>
        <div className='flex justify-center items-center   rounded-lg  bg-yellow-100 p-10 w-full text-lg  flex-col space-y-2'> 
         <p className='font-medium'>
              La preinscription est <span className='text-red-400'> en cours </span>de traitement
          </p>
          
        </div></div>
        )
      case "Accepte":
        return(
          <div className='w-full flex items-center justify-center'>
        <div className='flex justify-center items-center   rounded-lg  bg-green-100 p-10 w-full text-lg  flex-col space-y-2'> 
         <p className='font-medium'>
              Votre preinscription a étè <span className='text-green-400'> accepté</span> 
          </p>
          
        </div></div>
        )
      case "Refuse":
        return(
          <div className='w-full flex items-center justify-center'>
        <div className='flex justify-center items-center   rounded-lg  bg-red-100 p-10 w-full text-lg  flex-col space-y-2'> 
         <p className='font-medium'>
              votre preinscription a étè <span className='text-red-700'> refusé </span>
          </p>
          
        </div></div>
        )
      case "Retrograde":
        return(
          <div className='w-full flex items-center justify-center'>
        <div className='flex justify-center items-center   rounded-lg  bg-orange-100 p-10 w-full text-lg  flex-col space-y-2'> 
         <p className='font-medium'>
              Vous avez étè <span className='text-orange-700'> rétrogradé au niveau inferieur </span>
          </p>
         
        </div></div>
        )
    
      default:
        break;
    }
   }   
      

  return (
    <div>
         {dashboard===true&& <div className='h-full absolute w-full'>
          <Backdrop/>
         <div className='bg-white w-[500px] h-64 rounded-lg absolute z-20  top-56 left-[30%] flex items-center justify-center flex-col space-y-4 '>
           <p className='text-[24px] text-red-500 '>
             Decision de preinscription
           </p>
           {decisionPre(numero.decisionType)}
             <div className='flex space-x-3'>
              <button className='bg-green-500 w-32 h-12 rounded-lg shadow-md' onClick={()=>navigate("/")}>
                   Retour
              </button>
              <button className='bg-blue-400  px-2 h-12 rounded-lg shadow-md' onClick={()=>navigate(`/preinscription/fiche/${numero.numero}`)}>
                   Telecharger sa fiche
              </button></div>
         </div>
         </div>}
        <Header/>
        <div className='w-full flex flex-col items-center justify-center mt-32 space-y-16'>
        <form autoComplete='off' className='flex flex-col w-[600px] h-[300px] items-center justify-center bg-blue-200 rounded-lg space-y-8' onSubmit={handleSubmit(onSubmit)}>
            <p className='text-2xl font-bold text-gray-400 '>Voir la décision de preinscription</p>
        <input {...register("Numero")} type='text' placeholder='Numero de preinscription' className='outline-none w-[400px] border-b-2 border-white py-1 text-lg bg-transparent placeholder:text-gray-600'/>
        <button type='submit' className='outline-none flex flex-row items-center justify-center space-x-2 w-32  text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-lg  px-5 py-2.5 mr-2 mb-2'>
        {loading===true && <BeatLoader
        color={"white"}
        size={4}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}
        
         <span>Voir</span>
        </button>
        </form>

        <button type='button' onClick={()=>navigate("/preinscription/faire")} className='outline-none flex flex-row items-center justify-center space-x-2  text-white bg-blue-600 hover:bg-blue-600  font-medium rounded-lg text-lg  px-5 py-2.5 mr-2 mb-2'>Faire une preinscription</button>
     </div>
      
    </div>
  )
}
