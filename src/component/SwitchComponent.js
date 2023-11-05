import React from 'react'

import CREATIONUSER from './CREATIONUSER.js'
import USERLISTE from './USERLISTE.js'
import PRELISTE from './PRELISTE.js'
import PRELISTESID from './PRELISTESID.js'
import PRELISTEVDAF from './PRELISTEVDAF.js'
import PRELISTEQSE from './PRELISTEQSE.js'
import PRELISTENSA from './PRELISTENSA.js'
import PREDETAIL from './PREDETAIL.js'
import HOMEDASH from './HOMEDASH.js'
import PREINSCRIPTION from './PREINSCRIPTIONCOMP.js'
import DECISIONENCOURS from './DECISIONENCOURS.js'
 const SwitchComponent =({rub,retour ,setRub,setBackdrop,setBackdropUser})=>{
    switch (rub.nom) {
        case 'DASH':
            
            return(
               <HOMEDASH setRub={setRub}   />
            )
        case 'PRE':
            
            return(
               <PREINSCRIPTION  retour={retour} setBackdrop={setBackdrop}/>
            )
        case 'DPEC':
            
            return(
               <DECISIONENCOURS  retour={retour}/>
            )
    
      case 'USERCREER':
        return(
            <CREATIONUSER retour={retour} setRub={setRub}/>
        )

      case 'USERLISTE':
        return(
            <USERLISTE retour={retour} setBackdropUser={setBackdropUser} />
        )
      case 'PRELISTE':
        return(
            <PRELISTE retour={retour}  setRub={setRub} />
        )
      case 'PRELISTESID':
        return(
            <PRELISTESID retour={retour} setRub={setRub} />
        )
      case 'PRELISTEQSE':
        return(
            <PRELISTEQSE retour={retour} setRub={setRub} />
        )
      case 'PRELISTEVDAF':
        return(
            <PRELISTEVDAF retour={retour} setRub={setRub} />
        )
      case 'PREDETAIL':
        return(
            <PREDETAIL retour={retour} rub={rub}/>
        )
      case 'PRELISTENSA':
        return(
            <PRELISTENSA retour={retour} rub={rub}/>
        )

        default:
            return(
                <HOMEDASH/>
            )
    }
}
export default SwitchComponent