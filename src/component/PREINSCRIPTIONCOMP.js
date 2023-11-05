import React, { useState } from 'react'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {ImCheckboxChecked,ImCheckboxUnchecked} from 'react-icons/im' 
import {FaCamera, FaChevronDown, FaChevronUp,} from 'react-icons/fa' 
import { useForm } from "react-hook-form";
import { useDispatch,  } from "react-redux";
import {preinscritActions}from '../reducer/preinscrit'
import { BeatLoader } from 'react-spinners';
import  Axios  from 'axios';
import Backdrop from './Backdrop';
import { useNavigate } from 'react-router-dom';
const schema = yup
.object({
  nom: yup.string().required("Veuillez renseigner votre nom"),
  prenoms: yup.string().required("Veuillez renseigner votre prenom"),
  email: yup.string("Veuillez renseigner votre email").email("format email incorrect "),
  tel: yup.number().typeError("Veuillez renseigner votre numero de telephone")
  .positive()
  .integer()
  .min(10)
  .required('Un numero de telephone est require'),
  whatshapp: yup.number().typeError("Veuillez renseigner votre numero de telephone")
  .positive()
  .integer()
})
.required()

export default function PREINSCRIPTIONCOMP() {
  const dispatch = useDispatch();
  const { register,watch,getValues, handleSubmit, formState: { errors },} = useForm(
   { resolver: yupResolver(schema),}
  );
  const navigate = useNavigate()
    const [loading,setLoading]=useState(false) 
    const [loadingCv,setLoadingCv]=useState(false) 
    const [loadingBAC,setLoadingBAC]=useState(false) 
    const [loadingDerBac,setLoadingDerBac]=useState(false) 
    const [retour,setRetour]=useState(false) 
    const [maskBAC,setMaskBAC]=useState(false) 
    const [maskDerBAC,setMaskDerBAC]=useState(false) 
    const [maskCV,setMaskCV]=useState(false) 
    const [fileCV,setFileCV]=useState(null)
    const [fileDerBAC,setFileDerBAC]=useState(null)
    const [fileBAC,setFileBAC]=useState(null)
    const [image,setImage]=useState("")
    const [lord,setLordImage]=useState("")
     const onChangeFileDerBAC=(p)=>{
      console.log(p)
      if(p.size > 2097152){
        alert("La taille du fiché ne doit pas dépasser 2 MO");
        setFileDerBAC(null);
        setMaskDerBAC(false);
     }
      
        setFileDerBAC(p)
     }
     const onChangeFileBAC=(p)=>{
    
        setFileBAC(p)
     }
   
     const onChangeFileCV=(p)=>{
        setFileCV(p)
     }
     const onChangeImage=(p)=>{
      uploadCloud(p,setImage,setLordImage)
     }
     
     const lodi = loadingDerBac===true &&loadingBAC ===true &&loadingCv===true
     const onSubmit = (data) => {
       setLoading(true)
        dispatch(preinscritActions.faire({
          nom:data.nom,
          prenoms:data.prenoms,
          email:data.email,
          annee:data.annee,
          whatshapp:data.whatshapp,
          diplome:niveau(data.diplome),
          fileBac:fileBAC,
          image:image,
          fileDernierBac:fileDerBAC,
          fileCv:fileCV,
          tel:data.tel,
          filiere:filiere(data.filiere)
        })).then(()=>{
          setLoading(false)
        }).then(()=>setRetour(true)) 
  }
  const filiere =(p)=>{
    switch (p) {
      case 'Qualité, Securité et Environnement (QSE)':
       return 'QSE'
      case 'Nutrition et Securités alimentaires (NSA)':
       return 'NSA'
      case 'Statistique et Informatique Décisionnelle (SID)':
       return 'SID'
      case 'Valorisation des Dechets Agricoles et Forestiers (VDAF)':
       return 'VDAF'
      default:
        return 'QSE'
    }
  }
  const niveau =(p)=>{
    switch (p) {
      case 'Preinscription en Licence 2':
       return 'Licence2'
      case 'Preinscription en Licence 3':
       return 'Licence3'
      case 'Preinscription en Master 1':
       return 'Master1'
      case 'Preinscription en Master 2':
       return 'Master2'
      default:
        return 'Licence3'
    }
  }
  const option=(p)=>{
    switch (p) {
      case "Qualité, Securité et Environnement (QSE)":
        return(
          <>
            <option>Preinscription en Licence 2</option>
            <option>Preinscription en Licence 3</option>
            <option>Preinscription en Master 1</option>
            <option>Preinscription en Master 2</option>
          </>
        )
      case "Statistique et Informatique Décisionnelle (SID)":
        return(
          <>
            <option>Preinscription en Licence 2</option>
            <option>Preinscription en Licence 3</option>
            <option>Preinscription en Master 1</option>
            <option>Preinscription en Master 2</option>
          </>
        )
      case "Valorisation des Dechets Agricoles et Forestiers (VDAF)":
        return(
          <>
            <option>Preinscription en Master 1</option>
            <option>Preinscription en Master 2</option>
          </>
        )
      case "Nutrition et Securités alimentaires (NSA)":
        return(
          <>
            <option>Preinscription en Master 2</option>
          </>
        )
    
      default:
        return(
          <>
            <option>Preinscription en Licence 2</option>
            <option>Preinscription en Licence 3</option>
            <option>Preinscription en Master 1</option>
            <option>Preinscription en Master 2</option>
          </>
        )
    }
  }
  const uploadCloud =(p,set,setLo)=>{
    try {
      setLoading(true)
     const formdata = new FormData()
     formdata.append("file",p)
     formdata.append("upload_preset","cfcpdf")
     Axios.post(
      "https://api.cloudinary.com/v1_1/cfcunadoc/image/upload",
      formdata
     ).then((response)=>{
      console.log(response.data)
       set(response.data.secure_url)
       setLoading(false)
       setLo(true)
      })
    } catch (error) {
      setLoading(false)
       
    }
    
  }
  console.log(watch("filiere"))
  return (
    <div className='w-full items-center justify-center'>
     {retour===true&& <div className='h-full absolute w-full'>
          <Backdrop/>
         <div className='bg-white w-[500px] h-64 rounded-lg absolute z-20  top-56 left-[30%] flex items-center justify-center flex-col space-y-4 '>
           <p className='text-[24px] text-red-500 '>
             !! Felicitation !!
           </p>
           <p className='text-[20px] tracking-wider font-medium '>
             Votre préinscrition a étè effectuée avec success
           </p>
             <p className='text-gray-500'>Veuillez patienter dans 72h pour avoir la decision finale</p>
              <button className='bg-green-500 w-32 h-12 rounded-lg shadow-md' onClick={()=>navigate("/")}>
                   Retour
              </button>
         </div>
         </div>}
      <form autoComplete='off' className='flex justify-center h-full items-center flex-col space-y-4 p-9 overflow-y-scroll' onSubmit={handleSubmit(onSubmit)} >
            <p className='text-[35px] text-blue-600 font-medium'>PRE-INSCRIPTION EN LIGNE</p>
            <div className='flex flex-row'>
                <p>Année Academique </p>
                <select {...register("annee")} defaultValue='2023-2024' className='outline-none border-b-2 py-1 text-gray-400 p-2 text-sm'>
                    <option className='py-1' >2023-2024</option>
                    </select>
            </div>
       <div className='flex '>
        <div className='flex flex-col mx-4 space-y-4'>
        <input {...register("nom")} type='text' placeholder='Nom' className='outline-none w-[400px] border-b-2 py-1 text-lg'/>
        {errors.nom?.message&&<p className='text-red-400 text-sm '>{errors.nom?.message}</p>}
        <input {...register("prenoms")} type='text' placeholder='Prenoms' className='outline-none w-[400px] border-b-2 py-1 text-lg'/>
        {errors.prenoms?.message&&<p className='text-red-400 text-sm '>{errors.prenoms?.message}</p>}
        <input {...register("tel")} type='number' placeholder='Tel' className='outline-none w-[400px] border-b-2 py-1 text-lg'/>
        {errors.tel?.message&&<p className='text-red-400 text-sm '>{errors.tel?.message}</p>}
        <input {...register("email")} type='email' placeholder='Email' className='outline-none w-[400px] border-b-2 py-1 text-lg'/>
        {errors.email?.message&&<p className='text-red-400 text-sm '>{errors.email?.message}</p>}
       </div> 
     
            {image===""?<div className="flex items-center justify-center w-[200px] h-[200px] ">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
                <div className="flex flex-col items-center justify-center pt-5 pb-6 space-y-2">
                    <FaCamera size={32} color='gray'/>
                    <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Ajouter une image</span></p>
                </div>
                <input  onInput={(e)=>onChangeImage(e.target.files[0])}  id="dropzone-file" {...register("image")} type="file" className="hidden" accept="image/png, image/jpeg, image/*" />
            </label>
        </div>:<div> 
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 shadow-lg rounded-lg cursor-pointer bg-gray-50 ">
          <img alt='' src={image} className='w-[200px] h-[200px] rounded-lg' />
          <input  onInput={(e)=>onChangeImage(e.target.files[0])}  id="dropzone-file" {...register("image")} type="file" className="hidden" />
          </label>
          </div>}
       </div>
        <input {...register("Whatshapp")} type='Whatshapp' placeholder='Whatshapp' className='outline-none w-[600px] border-b-2 py-1 text-lg'/>
        {errors.email?.message&&<p className='text-red-400 text-sm '>{errors.email?.message}</p>}
        <select  {...register("filiere")} defaultValue='Qualité, Securité et Environnement (QSE)' className='outline-none w-[600px] border-b-2 py-1 text-lg'>
            <option>Qualité, Securité et Environnement (QSE)</option>
            <option>Statistique et Informatique Décisionnelle (SID)</option>
            <option>Valorisation des Dechets Agricoles et Forestiers (VDAF)</option>
            <option>Nutrition et Securités alimentaires (NSA)</option>
        </select>
        <select {...register("diplome")} defaultValue='Preinscription en Licence 3' className='outline-none w-[600px] border-b-2 py-1 text-lg'>
             {option(getValues("filiere")||watch("filiere"))}
        </select>
       
        <div className='flex flex-col my-2 bg-gray-100'> 
           <div className='flex flex-row items-center w-[600px]'> {fileCV!==null?<ImCheckboxChecked size={35} color={"green"} />:<ImCheckboxUnchecked size={35} color={"green"} />}
            <p className=' border-2 p-1 ml-1 w-full flex items-center justify-between cursor-pointer' onClick={()=>setMaskCV(!maskCV)}>
                Curriculum Vitea (CV)
                {loadingCv===true?<FaChevronUp size={10} />:<FaChevronDown size={10} />}
            </p>
            </div>
            {maskCV&&<div className='flex flex-row'>  <input {...register("cv")} type='file' accept="application/pdf"  
            className='block w-full text-sm text-slate-500 mt-2 p-3
                        file:mr-4 file:py-2 file:px-4 file:rounded-md 
                        file:border-0 file:text-sm file:font-semibold
                      file:bg-pink-50 file:text-pink-700
                      hover:file:bg-pink-100'
                     onChange={(e)=>onChangeFileCV(e.target.files[0])} 
                      />
                      {fileCV !==null &&<div className='m-2'>{loadingCv===false?
                      <button onClick={()=>uploadCloud(fileCV,setFileCV,setLoadingCv)} type='button' className='bg-green-700  px-4 py-1 flex items-center space-x-1 justify-center text-white font-medium rounded-lg'>
                       {loading===true && <BeatLoader
                                color={"white"}
                                size={4}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />}
                        Envoyer
                        </button>:<p className='text-green-700 px-4 py-3'>Envoyé</p>}</div>}
                      </div>}
        </div>
        <div className='flex flex-col my-2 bg-gray-100'> 
           <div className='flex flex-row items-center w-[600px]'> {fileBAC!==null?<ImCheckboxChecked size={35} color={"green"} />:<ImCheckboxUnchecked size={35} color={"green"} />}
            <p className=' border-2 p-1 ml-1 w-full flex items-center justify-between cursor-pointer' onClick={()=>setMaskBAC(!maskBAC)}>
                BAC ou Diplôme équivalent
                {loadingBAC===true?<FaChevronUp size={10} />:<FaChevronDown size={10} />}
            </p>
            </div>
            {maskBAC&&<div className='flex flex-row'><input {...register("bac")} type='file'  accept="application/pdf" 
            className='block w-full text-sm text-slate-500 mt-2 p-3  file:mr-4 file:py-2 file:px-4 file:rounded-md 
                        file:border-0 file:text-sm file:font-semibold
                      file:bg-pink-50 file:text-pink-700
                      hover:file:bg-pink-100'
                     onChange={(e)=>onChangeFileBAC(e.target.files[0])} 
                      />
                      {fileBAC !==null &&<div className='m-2'>{loadingBAC===false?
                      <button onClick={()=>uploadCloud(fileBAC,setFileBAC,setLoadingBAC)} type='button' className='cursor-pointer bg-green-700  px-4 py-1 flex items-center space-x-1 justify-center text-white font-medium rounded-lg'>
                       {loading===true && <BeatLoader
                                color={"white"}
                                size={4}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />}
                        Envoyer
                        </button>:<p className='text-green-700 px-4 py-3'>Envoyé</p>}</div>}
                      </div>
                      }
        </div>
        <div className='flex flex-col my-2 bg-gray-100'> 
           <div className='flex flex-row items-center w-[600px]'> {fileDerBAC!==null?<ImCheckboxChecked size={35} color={"green"} />:<ImCheckboxUnchecked size={35} color={"green"} />}
            <p className=' border-2 p-1 ml-1 w-full flex items-center justify-between cursor-pointer' onClick={()=>setMaskDerBAC(true)}>
                Dernier diplôme après le BAC ou relevés de notes
                {loadingDerBac===true?<FaChevronUp size={10} />:<FaChevronDown size={10} />}
            </p>
            </div>
            {maskDerBAC===true&&<div className='flex flex-row'><input {...register("autre")} type='file'  accept="application/pdf" 
            className='block w-full text-sm text-slate-500 mt-2
                        p-3 file:mr-4 file:py-2 file:px-4 file:rounded-md 
                        file:border-0 file:text-sm file:font-semibold
                      file:bg-pink-50 file:text-pink-700
                      hover:file:bg-pink-100'
                     onChange={(e)=>onChangeFileDerBAC(e.target.files[0])} 
                      />
                      {fileDerBAC !==null &&<div className='m-2'>{loadingDerBac===false?
                        <button onClick={()=>uploadCloud(fileDerBAC,setFileDerBAC,setLoadingDerBac)} type='button' className='cursor-pointer bg-green-700  px-4 py-1 flex items-center space-x-1 justify-center text-white font-medium rounded-lg'>
                         {loading===true && <BeatLoader
                                  color={"white"}
                                  size={4}
                                  aria-label="Loading Spinner"
                                  data-testid="loader"
                                />}
                          Envoyer
                          </button>:<p className='text-green-700 px-4 py-3'>Envoyé</p>}</div>}
                        </div>
                        }
        </div>
      {lodi&&<button type='submit' className='outline-none flex flex-row items-center justify-center space-x-2  text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-lg  px-5 py-2.5 mr-2 mb-2'>
        {loading===true && <BeatLoader
        color={"white"}
        size={4}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}
        
         <span>   Se preinscrire</span>
        </button>}
      </form>
    </div>
  )
}
