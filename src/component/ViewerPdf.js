import React, { useEffect } from 'react'
import { Page, Text, View, Document, Image, PDFViewer, Link} from '@react-pdf/renderer';
import { useSelector } from 'react-redux';
export default function ViewerPdf(p) {
    // Create styles
    console.log(p)
  return (
<div style={{ flexGrow: 1 }} className='w-full h-[1000px] '>
      <PDFViewer
     // fileName={p}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Document pageMode='fullScreen' file={p}>
        <Page size='A4' style={{padding:10}}/>        
        </Document>

</PDFViewer>
</div>
    
  )
}