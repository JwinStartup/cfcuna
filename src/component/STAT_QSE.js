import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {preinscritActions}from '../reducer/preinscrit'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function STAT_QSE() {
  const dispatch = useDispatch();
  const countQse = useSelector((state)=>{
    return state.preinscritReducer
});
console.log(countQse)

useEffect(() => { 
dispatch(preinscritActions.countQse())
},[])
const percent=(a,b)=>{
  console.log(a,b)
  return Math.round((a/b)*100)
}
  return (
    <div className=' m-2  h-36 shadow-md  bg-gradient-to-r from-green-400 from-10% via-green-500 via-30% to-emerald-500 to-90%  rounded-md flex flex-col'> 

    <div className='p-1 flex flex-row items-center  justify-between'>
    <div className='flex items-center justify-center space-x-1'><div className='bg-green-600 rounded-full w-3 h-3'/>
    <p className='text-lg text-white font-medium tracking-wider'>QSE</p>
    </div>
    {countQse.countQse!==null&&<p className='text-sm text-white font-medium tracking-wider'>Total : {countQse.countQse.total}</p>}
    </div>
      

    <div className='flex flex-row  justify-between px-4 space-x-3'>
        <div className=''>
        {countQse.isLoader===true?<div></div>:<div style={{ width: 70, height: 70 }}>
        {countQse.countQse!==null&&<CircularProgressbar styles={buildStyles({trailColor: '#E5E4E2',pathColor:'8A9A5B',textSize:25,textColor:'8A9A5B'})} value={percent(countQse.countQse.licence2,countQse.countQse.total)} text={`${percent(countQse.countQse.licence2,countQse.countQse.total)}%`} />} 
     <p className='w-40'>Licence 2</p>
    </div>}
        </div>
        <div className=''>
        {countQse.isLoader===true?<div></div>:<div style={{ width: 70, height: 70 }}>
        {countQse.countQse!==null&&<CircularProgressbar styles={buildStyles({trailColor: '#E5E4E2',pathColor:'8A9A5B',textSize:25,textColor:'8A9A5B'})} value={percent(countQse.countQse.licence3,countQse.countQse.total)} text={`${percent(countQse.countQse.licence3,countQse.countQse.total)}%`} />} 
     <p className='w-40'>Licence 3</p>
    </div>}
        </div>
        <div className=''>
        {countQse.isLoader===true?<div></div>:<div style={{ width: 70, height: 70 }}>
        {countQse.countQse!==null&&<CircularProgressbar styles={buildStyles({trailColor: '#E5E4E2',pathColor:'8A9A5B',textSize:25,textColor:'8A9A5B'})} value={percent(countQse.countQse.master1,countQse.countQse.total)} text={`${percent(countQse.countQse.master1,countQse.countQse.total)}%`} />} 
        <p>Master 1</p>
        </div>}
            </div>
            <div className=''>
            {countQse.isLoader===true?<div></div>:<div style={{ width: 70, height: 70 }}>
        {countQse.countQse!==null&&<CircularProgressbar styles={buildStyles({trailColor: '#E5E4E2',pathColor:'8A9A5B',textSize:25,textColor:'8A9A5B'})} value={percent(countQse.countQse.master2,countQse.countQse.total)} text={`${percent(countQse.countQse.master2,countQse.countQse.total)}%`} />} 
        <p>Master 2</p>
        </div>}
        </div>
    </div>
    
     </div>
  )
}
