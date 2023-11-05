import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {preinscritActions}from '../reducer/preinscrit'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { PropagateLoader } from 'react-spinners';
export default function STAT_NSA() {
  const dispatch = useDispatch();
  const countNsa = useSelector((state)=>{
    return state.preinscritReducer
});
console.log(countNsa)

useEffect(() => { 
dispatch(preinscritActions.countNsa())
},[])
const percent=(a,b)=>{
  console.log(a,b)
  return Math.round((a/b)*100)
}
  return (
    <div className=' m-2 w-[500px] h-36 shadow-md  bg-gradient-to-r from-blue-100 from-5% via-blue-400 via-50% to-blue-500 to-90%  rounded-md flex flex-col'> 

    <div className='p-1 flex flex-row items-center  justify-between w-[150px] '>
    <div className='flex items-center justify-center space-x-1'>
        <div className='bg-blue-300 rounded-full w-3 h-3'/>
    <p className='text-lg text-white font-medium tracking-wider'>NSA</p>
    </div>
    {countNsa.countNsa!==null&&<p className='text-sm text-white font-medium tracking-wider'>Total : {countNsa.countNsa.total}</p>}
    </div>
    {countNsa.isLoader===true?
      <div className='flex items-center justify-center h-full w-[400px]'>
    <PropagateLoader
        color={"white"}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>:

    <div className='flex flex-row  justify-between px-4 space-x-3 w-full'>
        {/*<div className=''>
        <div style={{ width: 70, height: 70 }}>
        {countNsa.countNsa!==null&&<CircularProgressbar styles={buildStyles({trailColor: '#E5E4E2',pathColor:'8A9A5B',textSize:25,textColor:'8A9A5B'})} value={percent(countNsa.countNsa.licence2,countNsa.countNsa.total)} text={`${percent(countNsa.countNsa.licence2,countNsa.countNsa.total)}%`} />} 
     <p className='w-40'>Licence 2</p>
    </div>
    </div>*/}
       { /*<div className=''>
        <div style={{ width: 70, height: 70 }}>
        {countNsa.countNsa!==null&&<CircularProgressbar styles={buildStyles({trailColor: '#E5E4E2',pathColor:'8A9A5B',textSize:25,textColor:'8A9A5B'})} value={percent(countNsa.countNsa.licence3,countNsa.countNsa.total)} text={`${percent(countNsa.countNsa.licence3,countNsa.countNsa.total)}%`} />} 
     <p className='w-40'>Licence 3</p>
    </div>
    </div>*/}
       {/* <div className=''>
        <div style={{ width: 70, height: 70 }}>
        {countNsa.countNsa!==null&&<CircularProgressbar styles={buildStyles({trailColor: '#E5E4E2',pathColor:'8A9A5B',textSize:25,textColor:'8A9A5B'})} value={percent(countNsa.countNsa.master1,countNsa.countNsa.total)} text={`${percent(countNsa.countNsa.master1,countNsa.countNsa.total)}%`} />} 
        <p>Master 1</p>
        </div>
    </div>*/}
           
            <div className=' ml-8' style={{ width:70,  height: 70 }}>
        {countNsa.countNsa!==null&&<CircularProgressbar styles={buildStyles({trailColor: '#E5E4E2',pathColor:'8A9A5B',textSize:25,textColor:'8A9A5B'})} value={percent(countNsa.countNsa.master2,countNsa.countNsa.total)} text={`${percent(countNsa.countNsa.master2,countNsa.countNsa.total)}%`} />} 
        <p>Master 2</p>
        </div>
    </div>}
    
     </div>
  )
}
