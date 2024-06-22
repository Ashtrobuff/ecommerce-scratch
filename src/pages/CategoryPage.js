import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useLocation, useParams } from 'react-router-dom'
import { BiCategoryAlt } from 'react-icons/bi';
import {StyleSheet} from 'react'
import { useState } from 'react';
import Footer from '../components/Footer';
import Product from '../components/Product';

const CategoryPage = () => {
  const location=useLocation();
  const category=new URLSearchParams(
    location.search
  )
  const {id}=useParams()
  const[prods,setProds]=useState([])
  const getData=()=>{
    const req= fetch(`https://dummyjson.com/products/category/${id}`)
   .then(res => res.json())
   .then(data=>{console.log(data)
    setProds(data.products)                               
    
   })
   .catch(err=>console.log("this is the error:",err.message))

}
useEffect(()=>{
  getData()
  console.log(prods)
},[id])
  return (
    <div className='w-full'>
      
      <Navbar/>
   
     <div  className=' p-10 font-bold mt-10'>
      <div>you are browsing through,{id}</div>
      <div className='categoryshow flex items-center justify-center'>
       
      {prods.map((i)=>(
        <div className=' flex items-center justify-center'>
        <Product data={i}/>
        </div>
      ))}
      </div>
     </div>
     <Footer/>
    </div>
  )
}

export default CategoryPage



