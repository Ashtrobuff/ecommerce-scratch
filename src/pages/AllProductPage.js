import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import Footer from '../components/Footer' 
import { useEffect } from 'react'  
const AllProductPage = () => {
    const[prods,setProds]=useState([])
    const getData=()=>{
      const req= fetch('https://dummyjson.com/products?limit=0&skip=10')
     .then(res => res.json())
     .then(data=>{console.log(data)
      setProds(data.products)                               
      
     })
     .catch(err=>console.log("this is the error:",err.message))
  
  }
  useEffect(()=>{
    getData()
    console.log(prods)
  },[])
    return (
      <div className='absolute w-full'>
        <div>
        <Navbar/>
        </div>
       <div  className=' p-10 font-bold mt-10'>
        <div>you are browsing through, All products</div>
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

export default AllProductPage