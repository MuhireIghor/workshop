import React from 'react'

const InputField = ({name,type,handler}) => {
  return (
    <div className='flex flex-col items-baseline'>
<p>{name}</p>
<input type={type} onChange={handler} />
    </div>
  )
}

export default InputField