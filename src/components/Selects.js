import React from 'react'
import SelectCard from './SelectCard'
import bora from "../assets/borabora2.jpg"
import keywest from "../assets/keywest.jpg"
import maldives from "../assets/maldives.jpg"
import maldives2 from "../assets/maldives2.jpg"
import maldives3 from "../assets/maldives3.jpg"

const Selects = () => {
   
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-11/12 lg:w-10/12 mx-auto '>
        <SelectCard card={{img:bora, name:"Bora"}}/>
        <SelectCard card={{img:keywest, name:"Key West"}}/>
        <SelectCard card={{img:maldives, name:"Maldives"}}/>
        <SelectCard card={{img:maldives2, name:"Jamaica"}}/>
        <SelectCard card={{img:maldives3, name:"Antigua"}}/>
        <SelectCard card={{img:maldives2, name:"Cozumel"}}/>

    </div>
  )
}

export default Selects