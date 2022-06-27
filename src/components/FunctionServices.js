import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FunctionServices = ({icon, title, text}) => {
  return (
    <div className='flex items-center '>
        <div className=' bg-sky-800'>
        <FontAwesomeIcon icon={icon} className="px-4 py-5  rounded-md cursor-pointer serviceIcon text-white"/>
        </div>
        
        <div className='text-center'>
            <h1 className='uppercase font-bold text-sm'>{title}</h1>
            <p className='uppercase text-xs w-3/4 mx-auto'>{text}</p>
        </div>

        
    </div>
  )
}

export default FunctionServices