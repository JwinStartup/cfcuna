import React from 'react'

export default function DataDecision({listeDec,setRub}) {
   const decisionColor =(p)=>{
    switch (p) {
      case "Accepte":
        
        return "text-green-400"
      case "Retrograde":
        
        return "text-orange-400"
      case "Refuse":
        
        return "text-red-800"
      case "Encours":
        
        return "text-red-400"
    
      default:
        break;
    }
   }
  return (
    <div>
      {listeDec.map((u,i)=>
                   <div onClick={()=>setRub({nom:"PREDETAIL",payload:u})} key={i} className='flex justify-between w-full py-2 hover:bg-green-100 px-3 cursor-pointer'>
                    <p className='text-sm text-black font-medium'>{u.numero} </p>
                    <p className={`text-sm ${decisionColor(u.decisionType)}  font-medium`} >{u.decisionType} </p>
                   </div>)}
    </div>
  )
}
