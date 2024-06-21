import React, { useEffect } from 'react'
import { IoMdCart } from "react-icons/io";
import { CiHeart, CiLaptop, CiMemoPad, CiMobile1, CiPaperplane, CiShirt, CiTablets1 } from "react-icons/ci";
import { FaArrowCircleLeft,FaArrowCircleRight, FaCar, FaFacebook, FaInstagram, FaLaptop, FaLinkedin, FaMobile, FaShoePrints, FaTablet, FaTwitter } from "react-icons/fa";
import { useState } from 'react';
import { useRef } from 'react';
import Product from '../components/Product';
import data from '../data/data';
import Category from '../components/Category';
import { CgPhone, CgScreen } from 'react-icons/cg';

import Footer from '../components/Footer';
import Support from '../components/Support';
import { FaGear, FaScreenpal } from 'react-icons/fa6';
import { PiDeviceTabletThin } from 'react-icons/pi';
import { GoGear } from 'react-icons/go';
import Navbar from '../components/Navbar';
import { TbShoe } from 'react-icons/tb';
import ProductCarousel from './ProductCarousel';
import { useNavigate } from 'react-router-dom';
const Landin = () => {
   const[response, setresponse]=useState([]);
   const [data1,setdata1]=useState([])
   const navigate=useNavigate()
   const getData= async ()=>{
       const req=await fetch('https://dummyjson.com/products/category/smartphones')
      .then(res => res.json())
      .then(data=>setresponse(data.products))
      
   }
   const getData1= async ()=>{
    const req=await fetch('https://dummyjson.com/products/')
   .then(res => res.json())
   .then(data=>setdata1(data.products))
   
}
    useEffect(()=>{
         getData()
         getData1()
},[])
const lefter=useRef()
const righter=useRef()
const diver=useRef()
function scrollLeft(){
  if(diver.current){
  diver.current.scrollLeft -= 600;}
}
function scrollRight(){
  if(diver.current){
  diver.current.scrollLeft +=600}
}
const mapper=response.products
  return (
    <div className=' absolute h-full w-full'>
     <Navbar className='absolute w-full h-full'/>
   <div id="lowerbox" className='lowerbox p-5 w-full'>
    <div className='categories'>
      <div  id="side-section"className='lister cursor-pointer'>
         <div onClick={()=>navigate(`/browsecategory/skin-care`)}>Skin Care</div>
         <div onClick={()=>navigate(`/browsecategory/sunglasses`)}>Lifestyle</div>
         <div onClick={()=>navigate(`/browsecategory/mobile-accesories`)}>Mobile Accessories</div>
         <div onClick={()=>navigate(`/browsecategory/motorcycle`)}>Ride</div>
         <div onClick={()=>navigate(`/browsecategory/mens-watches`)}>Watches</div>
         <div onClick={()=>navigate(`/browsecategory/groceries`)}>Grocery</div>
         <div onClick={()=>navigate(`/browsecategory/home-decoration`)}>Home Decor</div>
         
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
          <div className='iconer cursor-pointer' onClick={scrollLeft}> <FaArrowCircleLeft style={{scale:"2"}}/></div>
          <div className='iconer cursor-pointer' onClick={scrollRight}> <FaArrowCircleRight style={{scale:"2"}}/></div>
          
         </div>
    </div>
    <div>
    <div className='product-carousel h-48' ref={diver}>
      <div className='px-10' style={{height:"120px",width:"full",flexDirection:"row",display:"flex"}} >
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

      <div className='w-full mt-12 bg-white text-center mb-11 flex justify-center' style={{height:"10px"}}>
         <div style={{height:"1px", width:"95%", background:"#dadad7", alignSelf:"flex-center"}}></div>
      </div>
    <div className='px-10'>
      
      <div className='text-4xl font-semibold'>Shop by category</div>
    </div>
   
    <div className='product-carousel sm:flex-row'>
      <div style={{height:"200px",width:"full",flexDirection:"row",display:"flex"}} className=' w-full flex px-10 gap-40 items-center justify-evenly mt-10'>
   <Category component={<CiShirt style={{scale:"4"}}/>} name={"mens-shirts"}/>
   <Category component={<CiMobile1 style={{scale:"4"}}/>} name={"smartphones"}/>
   <Category component={<CiLaptop style={{scale:"4"}}/>} name={"Laptops"}/>
   <Category component={<TbShoe style={{scale:"4"}}/>} name={"mens-shoes"}/>
    </div>
    </div>
    <div>
    <ProductCarousel data={data1}/>
    </div>
    <hr  style={{color:"red",height:0.005,paddingX:"10px"}}></hr>
    <Support/>
   <Footer/>
   </div>
 
  )
}

export default Landin