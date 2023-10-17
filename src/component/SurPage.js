import React from 'react'

export default function SurPage({colorTg,rub}) {
  return (
    <div>
    <ul className='p-5 text-base rounded-2xl font-medium tracking-wider font-sans text-start bg-gray-100 w-[250px] mr-5 mt-10   space-y-3 '>
      <li className={`cursor-pointer flex flex-row space-x-2 ${colorTg} items-center`}> 
         <p> Sur la page  </p>
          </li>
          {rub.map(u=><li className='cursor-pointer flex flex-row space-x-2 text-gray-500'> 
         <a href={u.lien} >  {u.nom} </a>
          </li>)}
      
    </ul>
  </div>
  )
}
