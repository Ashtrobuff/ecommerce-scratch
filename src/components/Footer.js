import React from 'react'
import play from './play.jpg'
import apple from './apple.png'
import qrc from './qrc.png'
import { CiHeart, CiPaperplane } from "react-icons/ci";
import { FaArrowCircleLeft,FaArrowCircleRight, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='px-10 bg-black text-white flex flex-row gap-20 justify-evenly py-10 cursor-pointer'>
    <div className='flex flex-col gap-5'>
       <h2>Exclusive</h2>
       <h3>Subscribe</h3>
       <h4 className='font-normal'>Get 10% off on your first order</h4>
       <div className='flex flex-row gap-5 items-center'><input  style={{height:"30px",
border:"1px solid #ccc", background:"#000",padding:"4px", borderRadius:"5px",color:"#fff"}}type="email"  color="white" placeholder='enter your email...'></input>
<CiPaperplane style={{scale:"2",stroke:"white"}} color='white'/></div>
       
    </div>
    <div className='flex flex-col '>
    <h2>Support</h2>
    <p className='font-normal'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
    <p>exclusive@gmail.com</p>
    <p>+88015-88888-9999</p>
    </div>
    <div className='flex flex-col'>
    <h2>Account</h2>
    <p className='font-normal'>My Account</p>
    <p>Login/Register</p>
    <p>cart</p>
    <p>Wishlist</p>
    <p>Shop</p>
    </div>
    <div className='flex flex-col'>
    <h2>Quick Link</h2>
    <p className='font-normal'>Privacy Policy</p>
    <p>Terms of use</p>
    <p>FAQ</p>
    <p>Contact</p>
    </div>
    <div>
    <h2>Download App</h2>
    <p>Save $3 with App New User Only</p>
    <div className='flex flex-row gap-5'>
       <img src={qrc}/>
    <div className='flex flex-col gap-5'> <img src={play}/>
    <img src={apple}/>
    </div>
    </div>
    <div style={{scale:"2",marginTop:"30px"}} id="footersocial" className='absolute ml-8'>
       <div><FaFacebook color='white'/></div>
       <div><FaTwitter color='white'/></div>
       <div><FaInstagram color='white'/></div>
       <div><FaLinkedin color='white'/></div>
    </div>
    </div>
  </footer>
  )
}

export default Footer