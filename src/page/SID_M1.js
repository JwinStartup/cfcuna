import React, { useState } from 'react'
import Header from '../component/header'
import SousMenuSID from '../component/SousMenuSID.js'
import SurPage from '../component/SurPage.js'
import { Link } from 'react-router-dom'
const rub=[
  {
    nom:'Objectifs de la formation',
    lien:'#of'
  },{ 
  nom:'Modalités de recrutement',
  lien:'#mr'
},
  {
    nom:'Débouchés',
    lien:'#deb'
  },
  {
    nom:'Coût de la formation',
    lien:'#deb'
  },
  
] 
const SID_SWITCH=({tag})=>{
    switch (tag) {
        case 'pre':
          return(  <p className='text-lg text-gray-600 font-normal m-2 p-2'>
              Le postulant se rend au CFC-UNA pour retirer une fiche de préinscription sur laquelle est la liste des pièces à fournir et à déposer pour l’équivalence avec la somme de 5000 FCFA ou  <Link to='/preinscription' className='underline text-green-500'> postuler en ligne </Link> .
              <br/>
              Après analyse de dossiers, les auditeurs dont les dossiers ont été retenus sont contactés par la Direction du CFC-UNA, afin de procéder à leur inscription physique.
            </p>)
        case 'insc':
          return(  <p className='text-lg text-gray-600 font-normal m-2 p-2'>
              Comment se déroule l’inscription au CFC ?
              <br/>
              <dd className='indent-3 space-y-2'>
                    <dt> - Se rendre au CFC pour le retrait du bulletin de versement</dt>
                    <dt>- Se rendre à la caisse de l’UNA pour faire le versement</dt>
                    <dt>- Revenir au bureau avec la photocopie du reçu de paiement</dt>
                    <dt>- Se rendre ensuite à la Scolarité pour finaliser l’inscription munie des pièces ci-dessous :
                        <ul className='ml-5  font-medium text-black'>
                            <li>• Extrait d’acte de naissance ou une fiche individuelle d’état civil (originale)</li>
                            <li>• Photocopie de l’ttestation et relevés de notes du BACCALAUREAT (sur présentation de l’original).</li>
                            <li>• Carte nationale d’identité ou passport + une copie  de la pièce présentée</li>
                            <li>• 3 photos d’identité couleur du même tirage</li>
                            <li>• Le reçu de paiement des frais d’inscripion</li>
                        </ul>
                    </dt>
                </dd>
            </p>)
        case 'cout':
          return( <div> <p className='text-lg text-gray-600 font-normal m-2 p-2'>
              Le Master 1 coûte <span className='text-black'> 1 060 000 F CFA</span></p>
              <div className='flex justify-center items-center flex-col space-y-10'>
              <table>
              <thead>
                <tr>
                  <th class=" w-72 text-center"></th>
                  <th class="border border-slate-300 w-72 text-center">Montant</th>
               </tr>
                </thead>
                <tbody>
                     <tr>
                     <td class="border border-slate-300 w-72 text-center">Inscripton</td>
                     <td class="border border-slate-300 w-72 text-center font-bold">60 000 F CFA </td>
                      </tr>
                      <tr>
                        <td class="border border-slate-300 w-72 text-center">Droit de scolarité </td>
                        <td class="border border-slate-300 w-72 text-center font-bold">1 000 000 F CFA</td>
                        </tr>
                </tbody>
              </table>

              </div>
              </div>
            )
            case 'modal':
                return( <div> <p className='text-lg text-gray-600 font-normal m-2 p-2'>
                    le paiement se fait en 4 versements</p>
                    <div className='flex justify-center items-center flex-col space-y-10'>
                    <table>
                    <thead>
                      <tr>
                        <th class=" w-72 text-center"></th>
                        <th class="border border-slate-300 w-72 text-center">Montant</th>
                      
                     </tr>
                      </thead>
                      <tbody>
                          
                            <tr><td class="border border-slate-300 w-72 text-center ">1ere versement</td><td class="border border-slate-300 w-72 text-center font-bold">460 000   F  (à payer à l’inscription)</td></tr>
                           <tr><td class="border border-slate-300 w-72 text-center ">2éme versement</td><td class="border border-slate-300 w-72 text-center font-bold">200 000   F </td></tr>
                           <tr><td class="border border-slate-300 w-72 text-center ">3éme versement</td><td class="border border-slate-300 w-72 text-center font-bold">200 000 F</td></tr>
                           <tr><td class="border border-slate-300 w-72 text-center ">4éme versement</td><td class="border border-slate-300 w-72 text-center font-bold">200 000  F</td></tr>
                           
                       
                      </tbody>
                    </table>
                    </div>
                    </div>
                  )
    
        default:
            return(  <p className='text-lg text-gray-600 font-normal m-2 p-2'>
            Le postulant se rend au CFC-UNA pour retirer une fiche de préinscription sur laquelle est la liste des pièces à fournir et à déposer pour l’équivalence avec la somme de 5000 FCFA ou  <Link to='/preinscription' className='underline text-green-500'> postuler en ligne </Link> .
            <br/>
            Après analyse de dossiers, les auditeurs dont les dossiers ont été retenus sont contactés par la Direction du CFC-UNA, afin de procéder à leur inscription physique.
          </p>)
    }
}
export default function SID() {
     const [tag,setTag]=useState('cout')
   

  return (
    <div >
          <div className='absolute top-0 right-0 -z-10'>
<svg width="329" height="381" viewBox="0 0 329 381" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M172.99 172.752C34.2967 130.304 -7.07007 94.1942 0.953251 2.09143V0H929V581C769.989 572.382 639.56 543.307 606.356 478.938C560.807 390.636 526.261 357.261 441.463 339.23C320.123 328.821 272.374 313.17 234.9 263.102C212.95 216.501 199.723 195.054 172.99 172.752Z" fill="violet" fill-opacity="0.2"/>
</svg>
</div>
      <Header/>
      <div className='flex flex-row justify-between flex-1'>
       <div className='w-[20%] '> <SousMenuSID/></div>
      <div className='w-[55%] my-8 mx-2 overflow-y-scroll h-[700px] '>
      <ul className=''>
      <li id='of'  className='font-medium text-2xl tracking-wider py-3 px-1 '>Objectifs de la formation</li>
            <div className='mb-5'>
                <p className='text-lg text-gray-600 font-normal'>
                Le cursus de master SID (Statistique et Informatique décisionnelle) propose une formation bi- disciplinaire en mathématique avec une spécialisation en statistique et une formation en informatique. La complémentarité entre les statistiques et l’informatique constitue la base de la science des données (data science) dont l’objectif est de couvrir tous les aspects de l’ingénierie des données. La science des données part de la collecte des données à l’exploitation statistique en prenant en compte les aspects stockage et la gestion de bases de données massives et distribuées de type big data.La formation est orientée vers les applications professionnelles dans les secteurs aussi divers que le marketing, la gestion de la santé, les études économiques, la tarification et les risques en assurance, la gestion des ressources humaines, etc.
                </p>
                </div>
                <li id='mr'  className='font-medium text-2xl tracking-wider py-2 px-1 '>Modalités de recrutement</li>
            <div className='mb-5'>
                <p className='text-lg text-gray-600 font-normal'>
                Titulaires d'un diplôme de niveau Bac + 3
                <br/>
                La sélection des candidats se fait par analyse de dossiers suivie d’un entretien.
                </p>
                </div>

           <li id='deb'  className='font-medium text-2xl tracking-wider py-3 px-1 '>Débouchés</li>
               <div className='mb-5'>
                <p className='text-lg text-gray-600 font-normal'>
                Les diplômés SID possèdent les savoirs et savoir-faire nécessaires à la mise en œuvre des systèmes d'informations décisionnels de tout type d'entreprise dans divers secteurs d'activités : Grande Distribution, Banque et Assurance, Vente à Distance, Télécommunication...
                    <br/>
                Ils deviennent des collaborateurs privilégiés des Directions générales, commerciales, financières, Direction des Ressources Humaines, du marketing... et peuvent occuper les postes suivants : 
                <dd className='indent-3 space-y-2'>
                    <dt>- Consultant architecture Data warehouse ;</dt>
                    <dt>- Assistant responsable technique ;   </dt>
                    <dt>- Consultant décisionnel ; </dt>
                    <dt>- Data miner ;  </dt>
                    <dt>- Responsable des ciblages et extractions de fichiers ; </dt>
                    <dt>- Superviseur de l'activité Web ; </dt>
                    <dt>- Superviseur de l'activité centre d'appel... </dt>
                    <dt>- Administrateur de Bases de données.</dt>
                </dd>
                NB : L'objectif de cette formation est axé sur l'insertion professionnelle, toutefois certains étudiants peuvent faire le choix de continuer leurs études jusqu'au doctorat.
                </p>
                </div>
        </ul>
         <ul className='flex w-[90%] justify-between items-center mx-6 '>
            <li className={`text-lg  ${tag==='pre'&&'border-b-2 border-red-400  text-black font-bold'}  cursor-pointer `} onClick={()=>setTag('pre')} >Pre-inscription</li>
            <li className={`text-lg  ${tag==='insc'&&'border-b-2 border-red-400  text-black font-bold'}  cursor-pointer `} onClick={()=>setTag('insc')} >inscription</li>
            <li className={`text-lg  ${tag==='cout'&&'border-b-2 border-red-400  text-black font-bold'}  cursor-pointer `} onClick={()=>setTag('cout')} >Coût de la formation</li>
            <li className={`text-lg  ${tag==='modal'&&'border-b-2 border-red-400  text-black font-bold'}  cursor-pointer `} onClick={()=>setTag('modal')} >Modalité de paiement</li>
         </ul>
           <div id='pre'> <SID_SWITCH tag={tag} /></div>
      </div>
      <div className='w-[20%] '>
      <SurPage colorTg={'text-violet-500'} rub={rub} />
      </div> </div>
    </div>
  )
}
