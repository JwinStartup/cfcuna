import React from 'react'

export default function Equipe() {
  return (
    <div className='absolute top-[1250px] flex items-center justify-center flex-col w-full space-y-4'>
      <p className='font-sans font-semibold text-[40px] text-black'>Notre <span className='text-[#9A3BE5]'>équipe</span>, c’est ?</p>
      <p className='w-[800px] text-center font-sans text-gray-400 tracking-wide font-light indent-10'>
      Une team de passionnée de Digital ayant travaillé pour les plus grandes entreprises au Canada et en France, en Agence ou chez l’annonceur. Une nouvelle génération d’experts qui cassent les codes des agences traditionnelles en proposant les meilleures activations digitales de l’écosystème des médias payants.
      </p>
      <div className='flex flex-row space-x-8'>
        <div className='w-[400px] rounded-3xl h-[400px]  border border-gray-100 shadow-md flex flex-col items-center justify-center  m-2'>
            <img src={require('../assets/coursenligne.jpeg')} alt=''  className='w-[250px] ' />
            <p className='text-red-500 text-[80px] font-bold -tracking-normal text-center whitespace-pre'>80%</p>
            <p className='text-[25px] font-normal text-gray-400 '>des cours sont  <span className='text-green-500'> en ligne</span></p>
        </div>
        <div className='w-[400px] rounded-3xl h-[400px]  border border-gray-100 shadow-md flex flex-col items-center justify-center  m-2'>
            <img src={require('../assets/rdd.jpeg')} alt=''  className='w-[250px] ' />
            <p className='text-red-500 text-[80px] font-bold tracking-wider text-center whitespace-pre'>+1,5 M</p>
            <p className='text-[25px] font-normal text-gray-400 '>d'etudiants <span className='text-green-500'> formés</span> chaque année  </p>
        </div>
        <div className='w-[400px] rounded-3xl h-[400px]  border border-gray-100 shadow-md flex flex-col items-center justify-center p-2 m-2'>
            <img src={require('../assets/cames.avif')} alt=''  className='w-[200px] rounded-full  ' />
            <p className='text-red-500 text-[80px] font-bold tracking-wider text-center whitespace-pre'>+3</p>
            <p className='text-[25px] font-normal text-gray-400 px-2 text-center'>diplômes universitaires <span className='text-red-500 bg-red-200 p-1 font-bold'> certifié </span>par le <span className='text-green-500'> CAMES </span> </p>
        </div>
      </div>
    </div>
  )
}
