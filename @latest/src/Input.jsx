import React from 'react';
const Input = ({name,type,label,handleChange}) => {
  return (
    <>
    <div className='flex flex-col py-2'>

    <label className='mb-1'>{label}</label>
  <input className='rounded-sm border-none outline-none border-none  focus:border-red-200 ' required type={type} name={name}  onChange = {handleChange}/>
    </div>
    </>
  )
}

export default Input