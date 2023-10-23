import React, { useState } from 'react'
import Header from '../component/header'
import {ImCheckboxChecked,ImCheckboxUnchecked} from 'react-icons/im' 
import {FaChevronDown, FaChevronUp} from 'react-icons/fa' 
import { useForm } from "react-hook-form";
import { useDispatch,  } from "react-redux";
import {preinscription}from '../reducer/preinscrit'
export default function PREINSCRIPTION() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
    const [maskCNI,setMaskCNI]=useState(false) 
    const [maskAT,setMaskAT]=useState(false) 
    const [maskBAC,setMaskBAC]=useState(false) 
    const [maskDerBAC,setMaskDerBAC]=useState(false) 
    const [mask,setMask]=useState(false) 
    const [maskCV,setMaskCV]=useState(false) 
    const [file,setFile]=useState(null)
    const [fileCV,setFileCV]=useState(null)
    const [fileDerBAC,setFileDerBAC]=useState(null)
    const [fileAT,setFileAT]=useState(null)
    const [fileBAC,setFileBAC]=useState(null)
    const [fileCNI,setFileCNI]=useState(null)
     const onChangeFile=(p)=>{
        console.log(p)
        setFile(p)
     }
     const onChangeFileCNI=(p)=>{
        console.log(p)
        setFileCNI(p)
     }
     const onChangeFileDerBAC=(p)=>{
        console.log(p)
        setFileDerBAC(p)
     }
     const onChangeFileBAC=(p)=>{
        console.log(p)
        setFileBAC(p)
     }
     const onChangeFileAT=(p)=>{
        console.log(p)
        setFileAT(p)
     }
     const onChangeFileCV=(p)=>{
        console.log(p)
        setFileCV(p)
     }
     const onSubmit = (data) => {
      dispatch(preinscription({
        nom:data.nom,
        prenoms:data.prenoms,
        email:data.email,
        annee:data.annee,
        niveau:data.niveau,
        tel:data.tel,
        filiere:data.filiere
      }))
    }
  return (
    <div>
      <Header/>
      <form className='flex justify-center items-center flex-col space-y-5 p-9 overflow-y-scroll' onSubmit={handleSubmit(onSubmit)} >
            <p className='text-[45px] text-blue-600 font-medium'>PRE-INSCRIPTION EN LIGNE</p>
            <div className='flex flex-row'>
                <p>Année Academique </p>
                <select {...register("annee")} defaultValue='2023-2024' className='outline-none border-b-2 py-1 text-gray-400 p-2 text-sm'>
                    <option className='py-1 ' >2023-2024</option>
                    </select>
            </div>

        <input {...register("nom")} type='text' placeholder='Nom' className='outline-none w-[600px] border-b-2 py-1 text-lg'/>
        <input {...register("prenoms")} type='text' placeholder='Prenoms' className='outline-none w-[600px] border-b-2 py-1 text-lg'/>
        <input {...register("tel")} type='text' placeholder='Tel' className='outline-none w-[600px] border-b-2 py-1 text-lg'/>
        <input {...register("email")} type='text' placeholder='Email' className='outline-none w-[600px] border-b-2 py-1 text-lg'/>
        <select {...register("filiere")} defaultValue='Qualité, Securité et Environnement (QSE)' className='outline-none w-[600px] border-b-2 py-1 text-lg'>
            <option>Qualité, Securité et Environnement (QSE)</option>
            <option>Statistique et Informatique Décisionnelle (SID)</option>
            <option>Valorisation des Dechets Agricoles et Forestiers (VDAF)</option>
        </select>
        <select {...register("niveau")} defaultValue='Preinscription en Licence 3' className='outline-none w-[600px] border-b-2 py-1 text-lg'>
            <option>Preinscription en Licence 3</option>
            <option>Preinscription en Master 1</option>
            <option>Preinscription en Master 2</option>
        </select>
        <div className='flex flex-col my-2 bg-gray-100'> 
           <div className='flex flex-row items-center w-[600px]'> {file!==null?<ImCheckboxChecked size={35} color={"green"} />:<ImCheckboxUnchecked size={35} color={"green"} />}
            <p className=' border-2 p-1 ml-1 w-full flex items-center justify-between cursor-pointer' onClick={()=>setMask(!mask)}>
                Demande manuscrite adressée au Directeur de CFC
                {mask?<FaChevronUp size={10} />:<FaChevronDown size={10} />}
            </p>
            </div>
            {mask&&<input {...register("lm")} type='file'  
            className='block w-full text-sm text-slate-500 mt-2 p-3
                        file:mr-4 file:py-2 file:px-4 file:rounded-md 
                        file:border-0 file:text-sm file:font-semibold
                      file:bg-pink-50 file:text-pink-700
                      hover:file:bg-pink-100'
                     onChange={(e)=>onChangeFile(e.target.files[0])} 
                      />}
        </div>
        <div className='flex flex-col my-2 bg-gray-100'> 
           <div className='flex flex-row items-center w-[600px]'> {fileCV!==null?<ImCheckboxChecked size={35} color={"green"} />:<ImCheckboxUnchecked size={35} color={"green"} />}
            <p className=' border-2 p-1 ml-1 w-full flex items-center justify-between cursor-pointer' onClick={()=>setMaskCV(!maskCV)}>
                Curriculum Vitea (CV)
                {maskCV?<FaChevronUp size={10} />:<FaChevronDown size={10} />}
            </p>
            </div>
            {maskCV&&<input {...register("cv")} type='file'  
            className='block w-full text-sm text-slate-500 mt-2 p-3
                        file:mr-4 file:py-2 file:px-4 file:rounded-md 
                        file:border-0 file:text-sm file:font-semibold
                      file:bg-pink-50 file:text-pink-700
                      hover:file:bg-pink-100'
                     onChange={(e)=>onChangeFileCV(e.target.files[0])} 
                      />}
        </div>
        <div className='flex flex-col my-2 bg-gray-100'> 
           <div className='flex flex-row items-center w-[600px]'> {fileBAC!==null?<ImCheckboxChecked size={35} color={"green"} />:<ImCheckboxUnchecked size={35} color={"green"} />}
            <p className=' border-2 p-1 ml-1 w-full flex items-center justify-between cursor-pointer' onClick={()=>setMaskBAC(!maskBAC)}>
                BAC ou Diplôme équivalent
                {maskBAC?<FaChevronUp size={10} />:<FaChevronDown size={10} />}
            </p>
            </div>
            {maskBAC&&<input {...register("bac")} type='file'  
            className='block w-full text-sm text-slate-500 mtt2 p-3  file:mr-4 file:py-2 file:px-4 file:rounded-md 
                        file:border-0 file:text-sm file:font-semibold
                      file:bg-pink-50 file:text-pink-700
                      hover:file:bg-pink-100'
                     onChange={(e)=>onChangeFileBAC(e.target.files[0])} 
                      />}
        </div>
        <div className='flex flex-col my-2 bg-gray-100'> 
           <div className='flex flex-row items-center w-[600px]'> {fileDerBAC!==null?<ImCheckboxChecked size={35} color={"green"} />:<ImCheckboxUnchecked size={35} color={"green"} />}
            <p className=' border-2 p-1 ml-1 w-full flex items-center justify-between cursor-pointer' onClick={()=>setMaskDerBAC(!maskDerBAC)}>
                Dernier diplôme après le BAC ou relevés de notes
                {maskDerBAC?<FaChevronUp size={10} />:<FaChevronDown size={10} />}
            </p>
            </div>
            {maskDerBAC&&<input {...register("autre")} type='file'  
            className='block w-full text-sm text-slate-500 mt-t
                        p-3file:mr-4 file:py-2 file:px-4 file:rounded-md 
                        file:border-0 file:text-sm file:font-semibold
                      file:bg-pink-50 file:text-pink-700
                      hover:file:bg-pink-100'
                     onChange={(e)=>onChangeFileDerBAC(e.target.files[0])} 
                      />}
        </div>
        <div className='flex flex-col my-2 bg-gray-100'> 
           <div className='flex flex-row items-center w-[600px]'> {fileAT!==null?<ImCheckboxChecked size={35} color={"green"} />:<ImCheckboxUnchecked size={35} color={"green"} />}
            <p className=' border-2 p-1 ml-1 w-full flex items-center justify-between cursor-pointer' onClick={()=>setMaskAT(!maskAT)}>
                Attestations de travail pour les travailleurs
                {maskAT?<FaChevronUp size={10} />:<FaChevronDown size={10} />}
            </p>
            </div>
            {maskAT&&<input {...register("at")} type='file'  
            className='block w-full text-sm text-slate-500 mt-2 p-3
                        file:mr-4 file:py-2 file:px-4 file:rounded-md 
                        file:border-0 file:text-sm file:font-semibold
                      file:bg-pink-50 file:text-pink-700
                      hover:file:bg-pink-100'
                     onChange={(e)=>onChangeFileAT(e.target.files[0])} 
                      />}
        </div>
        <div className='flex flex-col my-2 bg-gray-100'> 
           <div className='flex flex-row items-center w-[600px]'> {fileCNI!==null?<ImCheckboxChecked size={35} color={"green"} />:<ImCheckboxUnchecked size={35} color={"green"} />}
            <p className=' border-2 p-1 ml-1 w-full flex items-center justify-between cursor-pointer' onClick={()=>setMaskCNI(!maskCNI)}>
                Carte Nationale d'Identité ou autres pieces
                {maskCNI?<FaChevronUp size={10} />:<FaChevronDown size={10} />}
            </p>
            </div>
            {maskCNI&&<input {...register("cni")} type='file'  
            className='block w-full text-sm text-slate-500 mtt2 p-3                        
                        file:mr-4 file:py-2 file:px-4 file:rounded-md 
                        file:border-0 file:text-sm file:font-semibold
                      file:bg-pink-50 file:text-pink-700
                      hover:file:bg-pink-100'
                     onChange={(e)=>onChangeFileCNI(e.target.files[0])} 
                      />}
        </div>

        <button type='submit' className='outline-none  text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-lg  px-5 py-2.5 mr-2 mb-2'>
         <span>   Se preinscrire</span>
        </button>
      </form>
    </div>
  )
}
