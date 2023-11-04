import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { preinscritActions } from '../reducer/preinscrit';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function STAT_SID() {
    const dispatch = useDispatch();
    const countSid = useSelector((state)=>{
      return state.preinscritReducer
  });
  console.log(countSid)
  
  useEffect(() => { 
  dispatch(preinscritActions.countSid())
  },[])
  const percent=(a,b)=>{
    console.log(Math.round((a/b)*100))
    return Math.round((a/b)*100)
  }
  return (
    <div className=' m-2   h-36 shadow-md  bg-gradient-to-r from-violet-400 from-4% via-violet-500 via-30% to-violet-800 to-90%  rounded-md flex flex-col'> 

    <div className='p-1 flex flex-row items-center  justify-between'>
    <div className='flex items-center space-x-1 justify-center'>
    <div className='bg-violet-600 rounded-full w-3 h-3'/>
    <p className='text-lg text-white font-medium tracking-wider'>SID</p>
    </div>
    {countSid.countSid!==null&& <p className='text-sm text-white font-medium tracking-wider'>Total : {countSid.countSid.total}</p>}
    </div>
    
    <div className='flex flex-row  justify-between px-4 space-x-3'>
        <div className=''>
        {countSid.isLoader===true?<div></div>:<div className='' style={{ width: 70, height: 70 }}>
     {countSid.countSid!==null&&<CircularProgressbar styles={buildStyles({trailColor: '#E5E4E2',pathColor:'8A9A5B',textSize:25,textColor:'8A9A5B'})} value={percent(countSid.countSid.licence2,countSid.countSid.total)} text={`${percent(countSid.countSid.licence2,countSid.countSid.total)}%`} />} 
     <p className='w-40'>Licence 2</p>
    </div>}
        </div>
        <div className=''>
        {countSid.isLoader===true?<div></div>:<div className='' style={{ width: 70, height: 70 }}>
     {countSid.countSid!==null&&<CircularProgressbar styles={buildStyles({trailColor: '#E5E4E2',pathColor:'8A9A5B',textSize:25,textColor:'8A9A5B'})} value={percent(countSid.countSid.licence3,countSid.countSid.total)} text={`${percent(countSid.countSid.licence3,countSid.countSid.total)}%`} />} 
     <p className='w-40'>Licence 3</p>
    </div>}
        </div>
        <div className=''>
        {countSid.isLoader===true?<div></div>:<div style={{ width: 70, height: 70 }}>
        {countSid.countSid!==null&&<CircularProgressbar styles={buildStyles({trailColor: '#E5E4E2',pathColor:'8A9A5B',textSize:25,textColor:'8A9A5B'})} value={percent(countSid.countSid.master1,countSid.countSid.total)} text={`${percent(countSid.countSid.master1,countSid.countSid.total)}%`} />} 
        <p>Master 1</p>
        </div>}
            </div>
            <div className=''>
            {countSid.isLoader===true?<div></div>:<div style={{ width: 70, height: 70 }}>
        {countSid.countSid!==null&&<CircularProgressbar styles={buildStyles({trailColor: '#E5E4E2',pathColor:'8A9A5B',textSize:25,textColor:'8A9A5B'})} value={percent(countSid.countSid.master2,countSid.countSid.total)} text={`${percent(countSid.countSid.master2,countSid.countSid.total)}%`} />} 
        <p>Master 2</p>
        </div>}
        </div>
    </div>
    
     </div>
  )
}
