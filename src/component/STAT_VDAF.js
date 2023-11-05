import React, { useEffect } from 'react'
import { preinscritActions } from '../reducer/preinscrit';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { PropagateLoader } from 'react-spinners';

export default function STAT_VDAF() {
    const dispatch = useDispatch();
    const countVdaf = useSelector((state)=>{
      return state.preinscritReducer
  });
  console.log(countVdaf)
  
  useEffect(() => { 
  dispatch(preinscritActions.countVdaf())
  },[])
  const percent=(a,b)=>{
    console.log(Math.round((a/b)*100))
    return Math.round((a/b)*100)
  }
  return (
    <div className=' m-2  h-36 shadow-md  bg-gradient-to-r from-yellow-500 from-10% via-yellow-500 via-30% to-yellow-800 to-90%  rounded-md flex flex-col'> 

    <div className='p-1 flex flex-row items-center  justify-between'>
    <div className='flex items-center justify-center space-x-1'>
    <div className='bg-yellow-600 rounded-full w-3 h-3'/>
    <p className='text-lg text-white font-medium tracking-wider'>VDAF</p>
    </div>
    {countVdaf.countVdaf!==null&& <p className='text-sm text-white font-medium tracking-wider'>Total : {countVdaf.countVdaf.total}</p>}
    </div>
    {countVdaf.isLoader===true?
      <div className='flex items-center justify-center h-full w-80'>
    <PropagateLoader
        color={"white"}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>:
    <div className='flex flex-row  justify-between px-4 space-x-3'>
       {/* <div className=''>
       <div style={{ width: 70, height: 70 }}>
     {countVdaf.countVdaf!==null&&<CircularProgressbar styles={buildStyles({trailColor: '#E5E4E2',pathColor:'8A9A5B',textSize:25,textColor:'8A9A5B'})} value={percent(countVdaf.countVdaf.licence2,countVdaf.countVdaf.total)} text={`${percent(countVdaf.countVdaf.licence2,countVdaf.countVdaf.total)}%`} />} 
     <p className='w-40'>Licence 2</p>
    </div>
    </div>*/}
       { /* <div className=''>
      <div style={{ width: 70, height: 70 }}>
     {countVdaf.countVdaf!==null&&<CircularProgressbar styles={buildStyles({trailColor: '#E5E4E2',pathColor:'8A9A5B',textSize:25,textColor:'8A9A5B'})} value={percent(countVdaf.countVdaf.licence3,countVdaf.countVdaf.total)} text={`${percent(countVdaf.countVdaf.licence3,countVdaf.countVdaf.total)}%`} />} 
     <p className='w-40'>Licence 3</p>
    </div>
        </div>*/}
        <div className=''>
       <div style={{ width: 70, height: 70 }}>
        {countVdaf.countVdaf!==null&&<CircularProgressbar styles={buildStyles({trailColor: '#E5E4E2',pathColor:'8A9A5B',textSize:25,textColor:'8A9A5B'})} value={percent(countVdaf.countVdaf.master1,countVdaf.countVdaf.total)} text={`${percent(countVdaf.countVdaf.master1,countVdaf.countVdaf.total)}%`} />} 
        <p>Master 1</p>
        </div>
            </div>
            <div className=''>
           <div style={{ width: 70, height: 70 }}>
        {countVdaf.countVdaf!==null&&<CircularProgressbar styles={buildStyles({trailColor: '#E5E4E2',pathColor:'8A9A5B',textSize:25,textColor:'8A9A5B'})} value={percent(countVdaf.countVdaf.master2,countVdaf.countVdaf.total)} text={`${percent(countVdaf.countVdaf.master2,countVdaf.countVdaf.total)}%`} />} 
        <p>Master 2</p>
        </div>
        </div>
    </div>}
    
     </div>
  )
}
