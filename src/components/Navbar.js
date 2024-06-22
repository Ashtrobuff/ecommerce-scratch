import React, { useRef } from 'react'
import { IoMdCart } from "react-icons/io";
import { CiHeart } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import { Badge } from '@mui/material';
const Navbar = () => {
  const navigate=useNavigate();
  const cartItems = useSelector(state => state.cart.items);
  const navtabs=useRef();
  const quant=cartItems.length;
  function onHover(){
    navtabs.current.style.background="rgba(255,255,255,0.5)";
  }
  return (
    <div className='navbar w-full'>
    <h1 className='cursor-pointer' onClick={()=>{navigate("/landing")}}>Zipcart</h1>
    <nav className='naver text-center justify-evenly'>
      <ul>
      <div style={{margin:" 0px 120px"}} className='cursor-pointer' onho>
      <li ref={navtabs} onClick={()=>(navigate("/landing"))}>Home</li>
   <li ref={navtabs}>Contact</li>
   <li ref={navtabs}>About</li>
   <li ref={navtabs}>Sign up</li>
      </div>
   
   </ul>
   <div style={{display:"inline-block", marginLeft:"120px"}}>
   <input type='text' className='border-none bg-slate-100 rounded-sm'></input>
   <Badge color="secondary" badgeContent={quant} className='cursor-pointer iconer'>
   <IoMdCart  style={{scale:"2", color:"grey",marginLeft:"30px"}} onClick={()=>(navigate("/cart"))}/>{" "}
                </Badge>
 
   <CiHeart  style={{scale:"2", color:"grey",marginLeft:"30px"}}/>
   </div>
   </nav>
   
   </div>
  )
}

export default Navbar