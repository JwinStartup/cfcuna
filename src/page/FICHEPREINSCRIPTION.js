import React, { useEffect } from 'react'
import { Page, Text, View, Document, Image, PDFViewer} from '@react-pdf/renderer';
import { useSelector } from 'react-redux';
export default function FICHEPREINSCRIPTION() {
    // Create styles
    const preinscritReducer = useSelector((state) => state);
    useEffect(()=>{
      console.log(preinscritReducer)
    },[preinscritReducer])
  return (
<div style={{ flexGrow: 1 }} className='w-full h-[1000px] '>
      <PDFViewer
        style={{
          width: '100%',
          height: '100%',
        }}
      >
         <Template  />
</PDFViewer>
</div>
    
  )
}

const Template = () => {
    return (
      <Document pageMode='fullScreen'>
        <Page size='A4' style={{padding:10}}>
          <OfficielSection  />
          <CorpsSection  />
        </Page>
      </Document>
    )
  }

  const OfficielSection = () => {
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
            Année academique 2023-2024
        </Text>
      </View>
      </View>
    )
  }

  const CorpsSection = () => {
    return (
      <View >
         {/* Informations génerals sur le preinscrit */}
        <View style={{margin:10,marginLeft:50,marginTop:30}}>
        <Text style={{fontSize:12,fontWeight:'bold',textDecoration:'underline'}} >Informations génerales</Text>
         <View style={{display:'flex',flexDirection:'row',marginTop:3}}>
            <Text style={{fontSize:11,margin:3}}>Nom:</Text>
            <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}>AKOU</Text>
         </View>
         <View style={{display:'flex',flexDirection:'row',marginTop:3}}>
            <Text style={{fontSize:11,margin:3}}>Prenoms:</Text>
            <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}>JEAN PAUL</Text>
         </View>
         <View style={{display:'flex',flexDirection:'row',marginTop:3}}>
            <Text style={{fontSize:11,margin:3}}>Email:</Text>
            <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}>jeanpaul@gmail.com</Text>
         </View>
         <View style={{display:'flex',flexDirection:'row',marginTop:3}}>
            <Text style={{fontSize:11,margin:3}}>Tel:</Text>
            <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}>0500908420</Text>
         </View>
        </View>
        {/* Informations sur le paiement */}
        <View style={{margin:10,marginLeft:50,marginTop:10}}>
        <Text style={{fontSize:12,fontWeight:'bold',textDecoration:'underline'}} >Informations sur le paiement</Text>
         <View style={{display:'flex',flexDirection:'row',marginTop:3}}>
            <Text style={{fontSize:11,margin:3}}>Montant payé:</Text>
            <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}>5000 FCFA</Text>
         </View>
         <View style={{display:'flex',flexDirection:'row',marginTop:3}}>
            <Text style={{fontSize:11,margin:3}}>Référence du paiement (Wave):</Text>
            <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}>JO0GTR2398R</Text>
         </View>
        </View>
        {/* Informations sur formation */}
        <View style={{margin:10,marginLeft:50,marginTop:10}}>
        <Text style={{fontSize:12,fontWeight:'bold',textDecoration:'underline'}} >Formation</Text>
         <View style={{display:'flex',flexDirection:'row',marginTop:3}}>
            <Text style={{fontSize:11,margin:3}}>Diplôme préparé:</Text>
            <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}>LICENCE 3</Text>
         </View>
         <View style={{display:'flex',flexDirection:'row',marginTop:3}}>
            <Text style={{fontSize:11,margin:3}}>Filière :</Text>
            <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}>Statistique et Informatique Decisionnelle (SID)</Text>
         </View>
        </View>

         {/* Informations sur les pieces fournis */}
         <View style={{margin:10,marginLeft:50,marginTop:10}}>
        <Text style={{fontSize:12,fontWeight:'bold',textDecoration:'underline'}} >Dossiers fournis</Text>
         <View style={{display:'flex',flexDirection:'row',marginTop:3}}>
            <Text style={{fontSize:11,margin:3}}>Diplôme préparé:</Text>
            <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}>LICENCE 3</Text>
         </View>
         <View style={{display:'flex',flexDirection:'row',marginTop:3}}>
            <Text style={{fontSize:11,margin:3}}>Filière :</Text>
            <Text style={{fontSize:11,fontWeight:'extrabold',margin:3}}>Statistique et Informatique Decisionnelle (SID)</Text>
         </View>
        </View>
      </View>
    )
  }
