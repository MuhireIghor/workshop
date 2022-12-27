import React from 'react'
import '../css/sidebar.css'
const InputField = ({name,type,handler,value,max,min,step,style}) => {
  return (
    <div className='flex flex-col items-baseline gap-2'>
<p className='text-xl font-semibold'>{name}</p>
<input type={type} onChange={handler} value={value} max={max} min={min} step={step} style={style} />
    </div>
  )
}

export default InputField