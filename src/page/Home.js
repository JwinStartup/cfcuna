import React from 'react'
import Header from '../component/header'
import SectionAvant from '../component/SectionAvant.js'
import SectionApres from '../component/SectionApres.js'
import Equipe from '../component/Equipe.js'
import Footer from '../component/Footer.js'

export default function Home() {
  return (
    <div className='w-full'>
  <div className='absolute top-0 right-0 -z-10'>
     <svg width="329" height="381" viewBox="0 0 329 381" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M172.99 172.752C34.2967 130.304 -7.07007 94.1942 0.953251 2.09143V0H929V581C769.989 572.382 639.56 543.307 606.356 478.938C560.807 390.636 526.261 357.261 441.463 339.23C320.123 328.821 272.374 313.17 234.9 263.102C212.95 216.501 199.723 195.054 172.99 172.752Z" fill="#9A3BE5" fill-opacity="0.08"/>
    </svg>
  </div>

       <Header/>
      <SectionAvant/>
      <SectionApres/>
      <Equipe/>
      <Footer/>
    </div>
  )
}
