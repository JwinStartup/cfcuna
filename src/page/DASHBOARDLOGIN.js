import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import { useNavigate } from 'react-router';
import { userActions } from '../reducer/user';
const schema = yup
.object({
  nomUser: yup.string().required(),
  password: yup.string().required(),
})
.required()

export default function DASHBOARDLOGIN() {
    const dispatch = useDispatch();
  const { register,watch,getValues, handleSubmit, formState: { errors },} = useForm(
    { resolver: yupResolver(schema),}
  );
  const [loading,setLoading]=useState(false) 
  const navigate=useNavigate()

  const onSubmit = (data) => {
      setLoading(true)
      console.log(data)
dispatch(userActions.login(data)).then(()=>{ setLoading(false)
      navigate("/Dashboard")})

     
}

  return (
    <div>
      <div className='flex items-center space-x-96'>
      <div className='flex m-1'> 
        <img src={require('../assets/logo_una.png')} style={{width:70 ,height:70} } alt=''/>
        <p className='w-[100px] whitespace-normal text-[14px] ml-1 font-sans text-blue-500 font-bold tracking-wider'>
         CENTRE DE FORMATION CONTINUE
        </p>
    </div>  
    <p className='font-bold text-3xl tracking-widest text-black'> DASHBOARD</p>
      
    </div>

     <div className='w-full flex items-center justify-center mt-32'>
        <form autoComplete='off' className='flex flex-col w-[600px] h-[300px] items-center justify-center bg-green-200 rounded-lg space-y-8' onSubmit={handleSubmit(onSubmit)}>
            <p>Veuillez-vous connécter</p>
        <input {...register("nomUser")} type='text' placeholder='Nom utilisateur' className='outline-none w-[400px] border-b-2 py-1 text-lg border-white bg-transparent placeholder:text-gray-600'/>
        <input {...register("password")} type='password' placeholder='Mot de passe' className='outline-none w-[400px] border-b-2 py-1 text-lg border-white bg-transparent placeholder:text-gray-600'/>
        <button type='submit' className='outline-none flex flex-row items-center justify-center space-x-2  text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-lg  px-5 py-2.5 mr-2 mb-2'>
        {loading===true && <BeatLoader
        color={"white"}
        size={4}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}
        
         <span>se connécter</span>
        </button>
        </form>
     </div>


    </div>
  )
}
