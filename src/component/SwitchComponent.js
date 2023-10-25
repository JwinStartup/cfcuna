import React from 'react'

import CREATIONUSER from './CREATIONUSER.js'
import USERLISTE from './USERLISTE.js'
import PRELISTE from './PRELISTE.js'
import PRELISTESID from './PRELISTESID.js'
import PRELISTEVDAF from './PRELISTEVDAF.js'
import PRELISTEQSE from './PRELISTEQSE.js'
import HOMEDASH from './HOMEDASH.js'
import PREINSCRIPTION from './PREINSCRIPTION.js'
import DECISIONENCOURS from './DECISIONENCOURS.js'
 const SwitchComponent =({rub,retour ,setRub,setBackdrop})=>{
    switch (rub) {
        case 'DASH':
            
            return(
               <HOMEDASH setRub={setRub} />
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
            <CREATIONUSER retour={retour} />
        )

      case 'USERLISTE':
        return(
            <USERLISTE retour={retour} />
        )
      case 'PRELISTE':
        return(
            <PRELISTE retour={retour} />
        )
      case 'PRELISTESID':
        return(
            <PRELISTESID retour={retour}/>
        )
      case 'PRELISTEQSE':
        return(
            <PRELISTEQSE retour={retour}/>
        )
      case 'PRELISTEVDAF':
        return(
            <PRELISTEVDAF retour={retour}/>
        )

        default:
            return(
                <HOMEDASH/>
            )
    }
}
export default SwitchComponent