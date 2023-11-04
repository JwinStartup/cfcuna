import React from 'react'

export default function IframePdf(p) {
  return (
    <div >
      <iframe src={p} className='w-32 h-32' />
    </div>
  )
}
