import React, { useState } from 'react'
import Product from '../components/Product';
import { useRef } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';
const ProductCarousel = ({data=[]}) => {

    const diver=useRef()
function scrollLeft(){
  if(diver.current){
  diver.current.scrollLeft -= 600;}
}
function scrollRight(){
  if(diver.current){
  diver.current.scrollLeft +=600}
}
  return (
    <>
    <div id="navbtn">
          <div className='iconer cursor-pointer' onClick={scrollLeft}> <FaArrowCircleLeft style={{scale:"2"}}/></div>
          <div className='iconer cursor-pointer' onClick={scrollRight}> <FaArrowCircleRight style={{scale:"2"}}/></div>
          
         </div>
     <div className='product-carousel' ref={diver}>
      <div className='pl-5' style={{height:"120px",width:"full",flexDirection:"row",display:"flex"}} >
      { 
 data.map((i)=>(
         <Product data={i}/>
      ))
    }
    </div>
    </div></>
   
  )
}

export default ProductCarousel