import React, { useState } from 'react'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
 const FunctionApp = () => {
    const [openDate, setOpenDate] =useState(false)
    const [date ,setDate] =useState({
        stardate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })
    const hanDleChane = (ranges:any)=>{
        setDate(ranges.selection)
    }
    const handleClick = ()=>{
setOpenDate((prev)=>!prev)
    }
  return (
    <div>
        <span className=' select2-title' onClick={handleClick}>
            {`${format(date.stardate, 'MMM,dd,yyyy')} To ${format(date.endDate, 'MMM,dd,yyyy')}`}
        </span>
     { openDate && <DateRangePicker  
     className='dateRanger' 
     ranges={[date]} 
     onChange={hanDleChane}
     minDate={new Date()}
      />}
    </div>
  )
}

export default FunctionApp
