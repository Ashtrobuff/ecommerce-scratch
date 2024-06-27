import React, { useEffect, useRef, useState } from 'react'
import { IoMdCart } from "react-icons/io";
import { CiHeart, CiMenuBurger } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import { Badge } from '@mui/material';
import { TbSettingsMinus } from 'react-icons/tb';
const Navbar = () => {
  const navigate=useNavigate();
  const cartItems = useSelector(state => state.cart.items);
  const navtabs=useRef();
  const quant=cartItems.length;
  const[smallitem,setmallitem]=useState()
  const[query,setquery]=useState()
  function onHover(){
    navtabs.current.style.background="rgba(255,255,255,0.5)";
  }
  const getItem=()=>{
    fetch(`https://dummyjson.com/products/search?q=${query}`)
.then(res => res.json())
.then(data=>{setmallitem(data)})
  }
  useEffect(()=>{
    if(query==" ")
      {
        setmallitem([])
      }
    if(query!=" "){
      getItem()
    }
  },[query])


  return (
    <div className='navbar w-screen' id="topper">
       <div id="menuicon"><CiMenuBurger id="burger"/></div>
    <h1 className='cursor-pointer headerbhai' id="headerbhai" onClick={()=>{navigate("/landing")}}>Zipcart</h1>
    <nav className='naver text-center justify-evenly' id="naver">
      <ul id='lister'>
      <div style={{margin:" 0px 120px"}} className='cursor-pointer' onho>
      <li ref={navtabs} onClick={()=>(navigate("/"))}>Home</li>
   <li ref={navtabs} onClick={()=>{navigate("/contact")}}>Contact</li>
   <li ref={navtabs}>About</li>
   <li ref={navtabs}>Sign up</li>
      </div>
   
   </ul>
   <div  id="input-thing">
    <div id="search"className='inline-flex'>
      <div className='flex flex-col overflow-scroll'>
      <input id="searchwala" type='text' value={query} className='border-none bg-slate-100 rounded-sm' onChange={(e)=>setquery(e.target.value)}></input>
      {
        query==="" ? <></> : <div className= 'absolute mt-10 h-42 overflow-scroll' >
        <div className='overflow-y-scroll z-40'>
        {smallitem?.products?.map((item)=>{return <div className='h-12 w-60 cursor-pointer bg-white flex flex-row items-center ' onClick={()=>{ setquery(" "); navigate(`/productpage/${item.id}`)}} key={item.id}><img  className='h-10 w-10'src={item.thumbnail}/>{item.title}</div>})}
      </div>
        </div>
      }
      </div>
    
    </div>
   <Badge color="secondary" badgeContent={quant} className='cursor-pointer iconer'>
   <IoMdCart id="cart" onClick={()=>(navigate("/cart"))}/>{" "}
                </Badge>
   <CiHeart id='heart' className='iconer'  onClick={()=>{navigate("/favs")}}/>
   </div>
   </nav>
   
   </div>
  )
}

export default Navbar