import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../reducer/user';
import { BeatLoader } from 'react-spinners';
import { set } from 'lodash';

const schema = yup.object({
  
  nom: yup.string().matches(/^\S*$/, 'Pas espace').required("Veuillez renseigner votre nom"),
  password: yup.string().min(6).required('Mot de passe requit'),
  confirme: yup.string().min(6)
     .oneOf([yup.ref('password')], '')
  
})
.required()

export default function CREATIONUSER({retour,setRub}) {
  const { register,watch,getValues, handleSubmit, formState: { errors },} = useForm(
    { resolver: yupResolver(schema)}
   );
   const dispatch =useDispatch()
   const [loading,setLoading]=useState(false) 
 
 
  const onSubmit = (data) => {
    console.log(data)
    setLoading(true)
    dispatch(userActions.inscription(data)).then(()=>{
      setLoading(false)
      setRub({nom:"USERLISTE"})
    })
  }
  return (
    <form autoComplete='off'  className='  space-y-2 ml-40' onSubmit={handleSubmit(onSubmit)} >
       <div className='flex w-full items-center justify-center cursor-pointer'> <FaChevronCircleLeft size={30} color='gray' onClick={retour}  />
        <p className='text-xl text-gray-400 font-bold mx-3 text-center' >Creer un utilisateur</p></div>
        <div className='w-full flex justify-center flex-col items-center space-y-6'>
      <input {...register("nom")}   type='text' placeholder='Nom utilisateur' className='outline-none w-[600px] border-b-2 py-1 text-lg'/>
      <select {...register("role")} defaultValue='Conseiller' className='outline-none w-[600px] border-b-2 py-1 text-lg'>
            <option>Conseiller</option>
            <option>Admin</option>
            <option>Directeur</option>
            <option>Analyste</option>
        </select>
     
      <input {...register("password")} placeholder='Mot de passe'  type='password' className='outline-none w-[600px] border-b-2 py-1 text-lg'/>
     
      <input {...register("Confirme")} type='password' placeholder='Confirme mot de passe' className='outline-none w-[600px] border-b-2 py-1 text-lg'/>

      <button type='submit' className='outline-none w-28 flex flex-row justify-center items-center space-x-1 text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-lg  px-5 py-2.5 mr-2 mb-2'>
      {loading===true && <BeatLoader
        color={"white"}
        size={4}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}
         <span>  Créer </span>
        </button>
      </div>
    </form>
  )
}
