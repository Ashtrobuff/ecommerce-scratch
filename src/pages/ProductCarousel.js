import React, { useState } from 'react'
import Product from '../components/Product';
import { useRef } from 'react';
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
    <div className='product-carousel h-48' ref={diver}>
      <div className='px-10' style={{height:"120px",width:"full",flexDirection:"row",display:"flex"}} >
      { 
 data.map((i)=>(
         <Product data={i}/>
      ))
    }
    </div>
    </div>
  )
}

export default ProductCarousel