import React from 'react'

export default function SectionApres() {
  return (
    <div className='absolute top-[650px] '>

      <svg className='-z-10' xmlns="http://www.w3.org/2000/svg" width="1439" height="626" viewBox="0 0 1439 626" fill="none">
        <path d="M0 626V129.694V38.9684C447.763 -32.6142 559.704 13.3765 707.848 28.743C1102.36 69.6646 1196.39 62.6809 1439 4.38754V573.624C1295.22 618.68 1089.03 626 813.547 598.146C538.065 570.292 332.077 535.208 0 626Z" fill="#FFF4F1"/>
      </svg>
    <div className='absolute top-20 left-44 flex flex-col items-center justify-center'>
     <img src={require('../assets/chap.png')} alt='' className='w-[70px] ' />
     <p className='font-sans font-semibold text-[40px] text-black '>Nos <span className='text-[#9A3BE5] '> formations </span> diplômantes</p>
     
       <div className='flex space-x-24 mt-8'>
        <ul className='flex flex-col  items-center justify-center bg-white border-t-O border-l-2 border-r-2 border-b-2  border-white shadow-xl '>
            <li className='bg-[#50982F] w-[300px]  text-center font-light p-2 text-[20px] tracking-widest  text-white'>Qualité, Securité et Environnement (QSE) </li>
            <li className='p-2 text-[20px] font-medium  text-green-600 cursor-pointer  '>Licence 3</li>
            <li className='p-2 text-[20px] font-medium  text-green-600 cursor-pointer  '>Master 1</li>
            <li className='p-2 text-[20px] font-medium  text-green-600 cursor-pointer  '>Master 2</li>
        </ul>
        <ul className='flex flex-col  items-center justify-center bg-white border-t-O border-l-2 border-r-2 border-b-2  border-white shadow-xl '>
            <li className='bg-[#A038F1] w-[300px]  text-center font-light p-2 text-[20px] tracking-widest  text-white'>Statistique et Informatique Décisionnelle (SID) </li>
            <li className='p-2 text-[20px] font-medium  text-violet-600 cursor-pointer  '>Licence 3</li>
            <li className='p-2 text-[20px] font-medium  text-violet-600 cursor-pointer  '>Master 1</li>
            <li className='p-2 text-[20px] font-medium  text-violet-600 cursor-pointer  '>Master 2</li>
        </ul>
        <ul className='flex flex-col  items-center  justify-start bg-white border-t-O border-l-2 border-r-2 border-b-2  border-white shadow-xl '>
            <li className='bg-[#4F4548] w-[300px]  text-center font-light p-2 text-[20px] tracking-widest  text-white'>Valorisation des Dechets Agricoles et Forestiers (VDAF) </li>
            <li className='p-2 text-[20px] font-medium  text-[#4F4548] cursor-pointer  '>Master 2</li>
        </ul>
       </div>
     
     </div>
    </div>
  )
}
