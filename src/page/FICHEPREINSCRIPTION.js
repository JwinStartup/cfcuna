import React, { useEffect, useState } from 'react'
import { Page, Text, View, Document, Image, PDFViewer} from '@react-pdf/renderer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { preinscritActions } from '../reducer/preinscrit';
export default function FICHEPREINSCRIPTION() {
  const {numero} = useParams()
  const [data,setData]= useState(null)
  const dispatch = useDispatch();

    // Create styles
    const preinscritReducer = useSelector((state) => state);
    useEffect(()=>{
      dispatch(preinscritActions.decision(numero)).then((u)=>setData(u.payload))
    },[])
  return (
<div style={{ flexGrow: 1 }} className='w-full h-[1000px] '>
      <PDFViewer
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {data!==null&&<Template data={data} />}
</PDFViewer>
</div>
    
  )
}

const Template = ({data}) => {
    return (
      <Document pageMode='fullScreen'>
        <Page size='A4' style={{padding:10}}>
          <OfficielSection numero={data.numero} annee={data.annee} />
          <CorpsSection  nom={data.nom} prenoms={data.prenoms} email={data.email} tel={data.tel} filiere={data.filiere} diplome={data.diplome} image={data.image} decisionType={data.decisionType} />
        </Page>
      </Document>
    )
  }

  const OfficielSection = ({numero,annee}) => {
    return (
    <View style={{display:'flex',justifyContent:'center'}}>  
        <View  style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}  >
        <View style={{display:'flex',flexDirection:'row'}}> 
            <Image src={require('../assets/logo_una.png')} style={{width:45 ,height:45,marginRight:5} } alt=''/>
            <Text style={{fontSize:13,width:100,fontWeight:'bold'}}>
            CENTRE DE FORMATION CONTINUE
            </Text>
        </View>
        <View style={{display:'flex',alignItems:'center'}} >
            <Text style={{fontSize:13}} >REPUBLIQUE DE CÔTE D'IVOIRE</Text>
            <Text style={{fontSize:12,textAlign:'center'}}>Union - Discipline - Travail</Text>
        </View>
      </View>
      <View style={{borderColor:'gray',width:500,marginLeft:35, borderWidth:1,marginTop:35,padding:5,display:'flex',alignItems:'center'}}>
        <Text style={{fontSize:14,textAlign:'center'}}>
            FICHE DE PRE-INSCRIPTION EN LIGNE
        </Text>
        <Text style={{fontSize:10,textAlign:'center'}}>
            Année academique {annee}
        </Text>
      </View>
      <View style={{width:500,marginLeft:35,marginTop:2,padding:5,display:'flex',alignItems:'center'}}>
        <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}>Numero de preinscription : {numero}  </Text>
      </View>
      </View>
    )
  }

  const CorpsSection = ({nom,prenoms,tel,email,filiere,diplome,decisionType,image}) => {
    return (
      <View >
         {/* Informations génerals sur le preinscrit */}
         <View style={{display:"flex",flexDirection:"row",margin:10,marginLeft:50,marginTop:30,justifyContent:"space-between"}}>
         
        <View style={{}}>
        <Text style={{fontSize:12,fontWeight:'bold',textDecoration:'underline'}} >Informations génerales</Text>
         <View style={{display:'flex',flexDirection:'row',marginTop:3}}>
            <Text style={{fontSize:11,margin:3}}>Nom:</Text>
            <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}>{nom} </Text>
         </View>
         <View style={{display:'flex',flexDirection:'row',marginTop:3}}>
            <Text style={{fontSize:11,margin:3}}>Prenoms:</Text>
            <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}>{prenoms} </Text>
         </View>
         <View style={{display:'flex',flexDirection:'row',marginTop:3}}>
            <Text style={{fontSize:11,margin:3}}>Email:</Text>
            <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}>{email}</Text>
         </View>
         <View style={{display:'flex',flexDirection:'row',marginTop:3}}>
            <Text style={{fontSize:11,margin:3}}>Tel:</Text>
            <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}>{tel}</Text>
         </View>
         </View>
        <View style={{marginRight:25}}>
        <Image source={{uri:image}} style={{width:130 ,height:130,marginRight:5} } alt=''/>
        </View>
       
        </View>
       
        {/* Informations sur formation */}
        <View style={{margin:10,marginLeft:50,marginTop:10}}>
        <Text style={{fontSize:12,fontWeight:'bold',textDecoration:'underline'}} >Formation</Text>
         <View style={{display:'flex',flexDirection:'row',marginTop:3}}>
            <Text style={{fontSize:11,margin:3}}>Diplôme préparé:</Text>
            <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}>{diplome} </Text>
         </View>
         <View style={{display:'flex',flexDirection:'row',marginTop:3}}>
            <Text style={{fontSize:11,margin:3}}>Filière :</Text>
            <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}>{filiere} </Text>
         </View>
        </View>
        {/* Decision de preinscription */}
        <View style={{marginLeft:50,marginTop:10,display:'flex'}}>
           <Text style={{fontSize:12,fontWeight:'bold',textDecoration:'underline'}} >Decision de preinscription</Text>
            <Text style={{fontSize:18,fontWeight:'extrabold',margin:3,height:40,width:500,textAlign:"center",marginTop:5,paddingTop:10,backgroundColor:"gray"}}> {decisionType} </Text>
        </View>

         {/* Pieces à fournir pour l'inscription */}
        <View style={{margin:10,marginLeft:50,marginTop:10}}>
        <Text style={{fontSize:12,fontWeight:'bold',textDecoration:'underline'}} >Pieces à fournir pour l'inscription</Text>
        <View style={{marginTop:5}}>
                    <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}> - Payer au CFC la somme de 5000 FCFA pour les frais de preinscription en ligne</Text>
                    <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}> - Se rendre au CFC pour le retrait du bulletin de versement</Text>
                    <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}>- Se rendre à la caisse de l’UNA pour faire le versement</Text>
                    <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}>- Revenir au bureau avec la photocopie du reçu de paiement</Text>
                   <View> <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}>- Se rendre ensuite à la Scolarité pour finaliser l’inscription munie des pièces ci-dessous :</Text>
                        <View style={{marginLeft:25}}>
                            <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}>• Extrait d’acte de naissance ou une fiche individuelle d’état civil (originale)</Text>
                            <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}>• Photocopie de l’ttestation et relevés de notes du BACCALAUREAT (sur présentation de l’original).</Text>
                            <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}>• Carte nationale d’identité ou passport + une copie  de la pièce présentée</Text>
                            <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}>• 3 photos d’identité couleur du même tirage</Text>
                            <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}>• Le reçu de paiement des frais d’inscripion</Text>
                        </View>
                    </View>
                </View>

      </View>
      </View>
    )
  }
