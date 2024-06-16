import React, { useEffect } from 'react'
import { IoMdCart } from "react-icons/io";
import { CiHeart, CiPaperplane } from "react-icons/ci";
import { FaArrowCircleLeft,FaArrowCircleRight, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useState } from 'react';
import Product from '../components/Product';
import data from '../data/data';
import Category from '../components/Category';
import { CgScreen } from 'react-icons/cg';

import Footer from '../components/Footer';
import Support from '../components/Support';
const Landin = () => {
   const[response, setresponse]=useState([]);
   const getData= async ()=>{
       const req=await fetch('https://dummyjson.com/products/category/smartphones')
      .then(res => res.json())
      .then(data=>setresponse(data.products))
      
   }
    useEffect(()=>{
         getData()
},[])
const mapper=response.products
  return (
    <div className='w-full'>
      <div className='navbar'>
    <h1>Exclusive</h1>
    <nav className='naver text-center justify-evenly'>
      <ul>
      <div style={{margin:" 0px 120px"}}>
      <li>Home</li>
   <li>Contact</li>
   <li>About</li>
   <li>Sign up</li>
      </div>
   
   </ul>
   <div style={{display:"inline-block", marginLeft:"120px"}}>
   <input type='text'></input>
   <IoMdCart  style={{scale:"2", color:"grey",marginLeft:"30px"}}/>
   <CiHeart  style={{scale:"2", color:"grey",marginLeft:"30px"}}/>
   </div>
   </nav>
   </div>
   <div id="lowerbox" className='lowerbox p-5 w-full'>
    <div className='categories'>
      <div className='lister'>
         <div>Women's fashion</div>
         <div>Women's fashion</div>
         <div>Women's fashion</div>
         <div>Women's fashion</div>
         <div>Women's fashion</div>
         <div>Women's fashion</div>
         <div>Women's fashion</div>
         
      </div>
    </div>
    <div className='banner'><div><img style={{width:"100%"}} src='https://thumbs.dreamstime.com/b/vector-banner-iphone-vinnytsia-ukraine-september-illustration-app-web-presentation-design-229970813.jpg'/></div></div>
   </div>
   <div className='p-10'>

    <h1 className='todayspecial'>Today's Special</h1>
    </div>
    <div className='name-timer-nav'>
        <div className='px-10'>
            <h1>Flash Sale</h1>
        </div>
         <div id="timer">
            Timer
         </div>
         <div id="navbtn">
           <FaArrowCircleLeft style={{scale:"2"}}/>
           <FaArrowCircleRight style={{scale:"2"}}/>
         </div>
    </div>
    <div>
    <div className='product-carousel'>
      <div style={{height:"200px",width:"full",flexDirection:"row",display:"flex"}}>
      { 
 response.map((i)=>(
         <Product data={i}/>
      ))
    }
    </div>
    </div>
    </div>
    <div className='flex items-center justify-center cursor-pointer iconer'>
      <div className='h-fit mt-5 rounded-sm p-5 w-fit text-white' style={{background:"#DB4444"}}>View All products</div>
      </div>
    <div className='px-10'>
      <div className='text-3xl'>This month</div>
      <div className='text-4xl'>Shop by category</div>
    </div>
   
    <div className='product-carousel sm:flex-row'>
      <div style={{height:"200px",width:"full",flexDirection:"row",display:"flex"}} className=' w-full flex px-5  justify-evenly items-center'>
   
   <Category component={<CgScreen/>}/>
   <Category />
   <Category />
   <Category />
    </div>
    </div>
    <Support/>
   <Footer/>
   </div>
 
  )
}

export default Landin