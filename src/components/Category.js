import React, { useState } from 'react'
import { FaMobileScreen } from 'react-icons/fa6'
import { CgScreen } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

const Category = ({component,name}) => {
  const navigate=useNavigate()
  function browsecategory(){
      navigate(`/browsecategory/${name}`)
  }
  return (
    <div className=' categorybox' onClick={browsecategory}>
        <div className='flex flex-col gap-10 text-center items-center justify-center'>
        {component}
        <div>{name}</div>
        </div>
        
        </div>
  )
}

export default Category