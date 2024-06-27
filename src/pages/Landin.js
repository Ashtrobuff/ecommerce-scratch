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
import LoadingBar from 'react-top-loading-bar';
import Footer from '../components/Footer';
import Support from '../components/Support';
import { FaGear, FaScreenpal } from 'react-icons/fa6';
import { PiDeviceTabletThin } from 'react-icons/pi';
import { GoGear } from 'react-icons/go';
import Navbar from '../components/Navbar';
import { TbShoe } from 'react-icons/tb';
import ProductCarousel from './ProductCarousel';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from 'react-redux';
import Countdown from 'react-countdown';
const Landin = () => {
   const[response, setresponse]=useState([]);
   const [progress,setprogress]=useState(0)
   const [data1,setdata1]=useState([])
   const navigate=useNavigate();
   const getData= async ()=>{
    setprogress(10)
       const req=await fetch('https://dummyjson.com/products?sortBy=title&order=asc')
      .then(res => res.json())
      .then(data=>setresponse(data.products))
      setprogress(80)
      setprogress(100)
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
    <div className=' overflow-clip flex flex-col h-full w-full'>
      <LoadingBar  color='#f11946'
        progress={progress}
        onLoaderFinished={() => setprogress(0)}></LoadingBar>
        
     <Navbar className='absolute w-full h-full'/>
   <div id="lowerbox" className='flex flex-col items-center justify-center w-full sm:flex-row sm:lowerbox sm:p-5 sm:w-full'>
    <div className='absolute'>
      <ToastContainer/>
    </div>
    <div className='categories justify-self-auto' id='categories'>
      <div  id="side-section"className='lister cursor-pointer'>
         <div onClick={()=>navigate(`/browsecategory/skin-care`)}>Skin Care</div>
         <div onClick={()=>navigate(`/browsecategory/sunglasses`)}>Lifestyle</div>
         <div onClick={()=>navigate(`/browsecategory/mobile-accessories`)}>Mobile Accessories</div>
         <div onClick={()=>navigate(`/browsecategory/motorcycle`)}>Ride</div>
         <div onClick={()=>navigate(`/browsecategory/mens-watches`)}>Watches</div>
         <div onClick={()=>navigate(`/browsecategory/groceries`)}>Grocery</div>
         <div onClick={()=>navigate(`/browsecategory/home-decoration`)}>Home Decor</div>
         
      </div>
    </div>
    <div id="banner" className='banner w-full overflow-scroll w-40 p-10 bg-red-500'><div><img id='bannerimg' src='https://static.vecteezy.com/system/resources/previews/002/006/774/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg'/></div></div>
   </div>
   <div className='p-10 justify-center items-center self-center sm:self-start'>

    <h1 className='todayspecial'>Today's Special</h1>
    </div>
    <div className='name-timer-nav' style={{width:"100vw"}}>
        <div className='px-10'>
            <h1>Flash Sale</h1>
        </div>
         <div id="timer">
         <Countdown date={Date.now() + 10000000} />
         </div>
<div></div>
    </div>
    <div className='w-full'>
    <ProductCarousel data={response}/>
    </div>
    <div className='flex items-center justify-center cursor-pointer iconer'>
      <div className='h-fit mt-5 rounded-sm p-5 w-fit text-white' style={{background:"#DB4444"}} onClick={()=>navigate("/allproducts")}>View All products</div>
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
   <Category component={<FaShoePrints style={{scale:"4"}}/>} name={"mens-shoes"}/>
   <Category component={ <CiHeart style={{scale:"4"}}/>} name={"beauty"}/>
   <Category component={<TbShoe style={{scale:"4"}}/>} name={"fragrances"}/>
   <Category component={<TbShoe style={{scale:"4"}}/>} name={"furniture"}/>
   <Category component={<TbShoe style={{scale:"4"}}/>} name={"groc"}/>
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