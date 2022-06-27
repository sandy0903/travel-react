import React from 'react'

const SelectCard = ({card}) => {
    const {img, name}=card


  return (
    <div className='relative w-full h-60 '>

        <img src={img} className="absolute top-0 bottom-0 left-0 h-full "/>


        <h1 className='z-20 text-white absolute bottom-0 uppercase font-bold left-4'>{name}</h1>
    </div>
  )
}

export default SelectCard