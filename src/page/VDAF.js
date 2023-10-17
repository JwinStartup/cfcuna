
import React from 'react'
import Header from '../component/header'
import SousMenu from '../component/SousMenuVDAF.js'
import SurPage from '../component/SurPage.js'
import INFORMATION_VDAF from '../component/INFORMATION_VDAF.js'
const rub=[
  {
    nom:'Besoins de formation',
    lien:'#bf'
  },
  {
    nom:'Connaissances à acquérir ',
    lien:'#cac'
  },
 
  {
    nom:'Public visé ',
    lien:'#pv'
  },
  {
    nom:'Déroulement des cours',
    lien:'#ddc'
  },
  {
    nom:'Les examens ',
    lien:'#exa'
  },
  {
    nom:'Diplôme',
    lien:'#dip'
  }
]
export default function VDAF() {
  return (
    <div >
       <div className='absolute top-0 right-0 -z-10'>
<svg width="329" height="381" viewBox="0 0 329 381" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M172.99 172.752C34.2967 130.304 -7.07007 94.1942 0.953251 2.09143V0H929V581C769.989 572.382 639.56 543.307 606.356 478.938C560.807 390.636 526.261 357.261 441.463 339.23C320.123 328.821 272.374 313.17 234.9 263.102C212.95 216.501 199.723 195.054 172.99 172.752Z" fill="rgb(133 77 14)" fill-opacity="0.2"/>
</svg>
</div>
      <Header/>
      <div className='flex flex-row justify-between flex-1'>
       <div className='w-[20%] '> <SousMenu/></div>
      <div className='w-[55%] my-8 mx-2 overflow-y-scroll h-[700px] '>
        <INFORMATION_VDAF/>
      </div>
      <div className='w-[20%] '>
      <SurPage colorTg={'text-yellow-500'} rub={rub} />
      </div> </div>
    </div>
  )
}

