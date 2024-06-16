import React from 'react'
import { FaMobileScreen } from 'react-icons/fa6'
import { CgScreen } from "react-icons/cg";

const Category = ({component}) => {
  return (
    <div className='rounded-xl' style={{background:"grey",height:"200px",width:"200px"}}>
        {component}
        </div>
  )
}

export default Category