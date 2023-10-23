import React from 'react'
import { useForm } from 'react-hook-form';
import { FaChevronCircleLeft } from 'react-icons/fa';

export default function CREATIONUSER({retour}) {
  const { register, handleSubmit } = useForm();


  const onSubmit = (data) => {
console.log(data)
  }
  return (
    <form className='  space-y-2 ml-40' onSubmit={handleSubmit(onSubmit)} >
       <div className='flex w-full items-center justify-center cursor-pointer'> <FaChevronCircleLeft size={30} color='gray' onClick={retour}  />
        <p className='text-xl text-gray-400 font-bold mx-3 text-center' >Creer un utilisateur</p></div>
        <div className='w-full flex justify-center flex-col items-center space-y-6'>
      <input 
     {...register("nom")} 
      type='text' placeholder='Nom' className='outline-none w-[600px] border-b-2 py-1 text-lg'/>
      
      <input 
     {...register("email")} 
      type='text' placeholder='Email' className='outline-none w-[600px] border-b-2 py-1 text-lg'/>
      <select {...register("role")} defaultValue='Conseiller' className='outline-none w-[600px] border-b-2 py-1 text-lg'>
            <option>Conseiller</option>
            <option>Admin</option>
            <option>Directeur</option>
            <option>Analyste</option>
        </select>
     
      <input 
     {...register("password")} 
      type='text' placeholder='Mot de passe' className='outline-none w-[600px] border-b-2 py-1 text-lg'/>
     
      <input 
     {...register("Confirme")} 
      type='text' placeholder='Confirme mot de passe' className='outline-none w-[600px] border-b-2 py-1 text-lg'/>

      <button type='submit' className='outline-none w-28  text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-lg  px-5 py-2.5 mr-2 mb-2'>
         <span>  Créer </span>
        </button>
      </div>
    </form>
  )
}
