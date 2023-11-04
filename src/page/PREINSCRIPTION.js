import React, { useState } from 'react'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Header from '../component/header'
import {Cloudinary} from "@cloudinary/url-gen";
import {ImCheckboxChecked,ImCheckboxUnchecked} from 'react-icons/im' 
import {FaCamera, FaChevronDown, FaChevronUp, FaUserPlus} from 'react-icons/fa' 
import { useForm } from "react-hook-form";
import { useDispatch,  } from "react-redux";
import {preinscritActions}from '../reducer/preinscrit'
import { BeatLoader } from 'react-spinners';
import  Axios  from 'axios';
import Backdrop from '../component/Backdrop';
import { useNavigate } from 'react-router-dom';
import PREINSCRIPTIONCOMP from '../component/PREINSCRIPTIONCOMP';
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

export default function PREINSCRIPTION() {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors },} = useForm(
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
    const [mask,setMask]=useState(false) 
    const [maskCV,setMaskCV]=useState(false) 
    const [file,setFile]=useState(null)
    const [fileCV,setFileCV]=useState(null)
    const [fileDerBAC,setFileDerBAC]=useState(null)
    const [fileAT,setFileAT]=useState(null)
    const [fileBAC,setFileBAC]=useState(null)
    const [image,setImage]=useState(null)
     const onChangeFileDerBAC=(p)=>{
      
        setFileDerBAC(p)
     }
     const onChangeFileBAC=(p)=>{
    
        setFileBAC(p)
     }
   
     const onChangeFileCV=(p)=>{
        setFileCV(p)
     }
     const onChangeImage=(p)=>{
        setImage(p)
     }
     
     const lodi = loadingDerBac===true &&loadingBAC ===true &&loadingCv===true
     const onSubmit = (data) => {
       setLoading(true)
     
      // console.log(filiere(data.filiere),niveau(data.niveau))

     // if(lodi===true){
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
    //  }
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
      case "QSE":
        return(
          <div>
            <option>Preinscription en Licence 2</option>
            <option>Preinscription en Licence 3</option>
            <option>Preinscription en Master 1</option>
            <option>Preinscription en Master 2</option>
          </div>
        )
      case "SID":
        return(
          <div>
            <option>Preinscription en Licence 2</option>
            <option>Preinscription en Licence 3</option>
            <option>Preinscription en Master 1</option>
            <option>Preinscription en Master 2</option>
          </div>
        )
      case "VDAF":
        return(
          <div>
            <option>Preinscription en Master 1</option>
            <option>Preinscription en Master 2</option>
          </div>
        )
      case "NSA":
        return(
          <div>
            <option>Preinscription en Master 2</option>
          </div>
        )
        
       
    
      default:
        break;
    }
  }
  const uploadCloud =(p,set,setLo)=>{
    setLoading(true)
     const formdata = new FormData()
     formdata.append("file",p)
     formdata.append("upload_preset","cfcpdf")
     Axios.post(
      "https://api.cloudinary.com/v1_1/cfcunadoc/image/upload",
      formdata
     ).then((response)=>{
      console.log(response.data)
       set(response.data.url)
       setLoading(false)
       setLo(true)
    })
  }
  return (
    <div>
      <Header/>
      <PREINSCRIPTIONCOMP/>
    </div>)
    }