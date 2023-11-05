import React from 'react'

export default function SectionAvant() {
  return (
    <div className=''>
    <div className='absolute left-[50px] top-[20px] -z-10' > 
      <svg width="694" height="695" viewBox="0 0 694 695" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g >
        <path d="M500 310.292C500 471.465 469.846 566 297.15 566C124.453 566 0 445.934 0 284.761C0 123.587 143.793 46 316.49 46C489.186 46 500 149.118 500 310.292Z" fill="#479933" fill-opacity="0.74"/>
        <path fill-rule="evenodd"  d="M358.5 48.2011C445.348 51.3744 532.109 104.006 566.084 182.535C598.105 256.546 558.643 338.505 512.506 404.166C476.626 455.229 413.024 467.684 352.521 486.471C283.828 507.801 211.082 554.025 149.089 517.013C83.6781 477.96 63.469 392.184 70.2928 317.969C76.2471 253.21 133.307 213.239 181.137 168.469C235.798 117.305 282.454 45.4224 358.5 48.2011Z" fill="#419933"/>
        </g>
    </svg>
    </div>
    <div className='absolute right-[500px] top-[25px] '>
        <svg width="70" height="450" viewBox="0 0 104 350" fill="none" xmlns="http://www.w3.org/2000/svg">
         <rect width="70" height="450" fill="#FCBE00"/>
        </svg>
    </div>
    <div className='absolute right-[15px] top-[50px] '>
        <svg width="70" height="450" viewBox="0 0 104 450" fill="none" xmlns="http://www.w3.org/2000/svg">
         <rect className='absolute right-0' width="70" height="450" fill="#9A3BE5"/>
        </svg>
    </div>
      <p className='text-[60px] absolute left-[70px] top-[170px] z-10 w-[540px] text-center text-white'>
      Etudier au CFC de l’Université NANGUI ABROGOUA
      </p>
    <img className='absolute right-[50px] top-[140px]' src={require('../assets/una.jpeg')} alt='' width={500}  />
    </div>
  )
}
