import React from 'react'
import {CgFacebook} from 'react-icons/cg'
import {IoLogoWhatsapp} from 'react-icons/io'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaMapPin} from 'react-icons/fa'
import {FcCalendar} from 'react-icons/fc'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Footer() {
  const navigate =useNavigate()
  return (
    <div id='contact' className='bg-[#9A3BE5] w-full h-[230px] absolute top-[1950px] py-4 px-10 flex flex-row justify-between '>
      
      <div>
      <div className='flex m-1'> 
        <div className='bg-white p-1 cursor-pointer'> <img src={require('../assets/logo_una.png')} style={{width:60 ,height:60} } alt='' onClick={()=>navigate('/login')}/></div>
        <p className='w-[100px] whitespace-normal text-[14px] ml-2 font-sans text-white font-bold tracking-wider'>
         CENTRE DE FORMATION CONTINUE
        </p>
        
    </div>
    <p className='w-[300px] text-white font-light tracking-wide pt-3 '>existe dépuis  octobre 2012 au sein de l'université NANGUI ABROUGOUA</p>
    <div  className='flex flex-row space-x-10 mt-5'>
        <div className='cursor-pointer bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center'>
        <CgFacebook size={30} color='white'/>
        </div>
        <div className='cursor-pointer bg-white p-0 w-10 h-10 rounded-full flex items-center justify-center'>
        <IoLogoWhatsapp size={35} color='green'/>
        </div>
        <div className='cursor-pointer bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center'>
        <FaLinkedinIn size={30} color='white'/>
        </div>
        </div>
     
      </div>
      <div>
        <p className='text-[16px]  ml-2 mb-4 font-sans text-white font-bold tracking-widest '>Nos liens Utiles</p>
        <p className='cursor-pointer text-[14px] m-2 font-sans text-white font-normal tracking-wider '>QSE</p>
        <p className='cursor-pointer text-[14px] m-2 font-sans text-white font-normal tracking-wider '>SID</p>
        <p className='cursor-pointer text-[14px] m-2 font-sans text-white font-normal tracking-wider '>VDAF</p>
      </div>
      <div className='space-y-5'>
        <div className='flex flex-end cursor-pointer'> <FaMapPin size={25} color='black'/>
        <a href='https://maps.app.goo.gl/RzktCLraufqjaB1y7' className='text-white underline'> Abidjan - Abobo - Adjamé</a >
        </div>
        <div className='flex flex-end cursor-pointer'> <FcCalendar size={25} />
        <p className='text-white'> Du Lundi au Vendredi de 08h à 16h </p>
        </div>
      </div>
      
    </div>
  )
}
