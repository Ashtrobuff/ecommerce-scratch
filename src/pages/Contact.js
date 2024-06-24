import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaEnvelope, FaPhone, FaPhoneSlash } from 'react-icons/fa'

const ContactPage = () => {
  return (
    <div  className='w-full'>
        <Navbar/>
        <div className='p-10 flex flex-row gap-10'>
            <div id="address-card">
                <div className='w-fit shadow-lg p-5'>
                    <div className='p-10 flex flex-col gap-10 w-fit' style={{borderBottomWidth:"1px",borderBottom:"solid",borderBottomColor:"#000"}}>
                        <div className='flex flex-row gap-5 '> <FaPhone style={{scale:"2"}}></FaPhone>Call to us:</div>
                        <div className='flex flex-col gap-5'>
                            <span>We are available 24/7, 7 days a week.</span>
                            Phone: 9320400123
                        </div>
                    </div>
                    <div className='p-10 flex flex-col gap-10 w-fit' style={{borderBottomWidth:"1px",borderBottom:"",borderBottomColor:"#000"}}>
                        <div className='flex flex-row gap-5 '> <FaEnvelope style={{scale:"2"}}></FaEnvelope>Write to us:</div>
                        <div className='flex flex-col gap-5'>
                            <span>We are available 24/7, 7 days a week.</span>
                            email: queries@zipcart.com
                        </div>
                    </div>
                </div>
            </div>
            <div id="message-card">
                <div className='w-full shadow-lg p-5 flex flex-col gap-5'>
                    <div id="top-input" className='flex flex-row w-40 gap-10 w-full'>
                        <input className='h-12 w-48 px-2 text-gray text-md rounded-sm flex items-center justify-center bg-slate-200 border-none' placeholder='Name 🪪'></input>
                        <input className='h-12 w-48 px-2 text-gray text-md rounded-sm flex items-center justify-center bg-slate-200 border-none' placeholder='email 📩' type='text'></input>
                        <input className='h-12 w-48 px-2 text-gray text-md rounded-sm flex items-center justify-center bg-slate-200 border-none' placeholder='Contact 📞'></input>
                    </div>
                    <div id="top-input" className='flex flex-row  gap-10 w-full'>
                        <input className='h-80 w-full px-2 text-gray text-md rounded-sm flex flex-col text-start items-start justify-start bg-slate-200 border-none' placeholder='Name 🪪'></input>
                    </div>
                    <div id="top-input" className='flex flex-row  gap-10 w-full' style={{alignSelf:"flex-end"}}>
                        <div className='w-40 h-12 bg-red-400 rounded-md text-white text-center flex items-center justify-center cursor-pointer iconer' placeholder='Name 🪪' style={{alignSelf:"flex-end"}}>Send</div>
                    </div>
                </div>
                
            </div>
            
        </div>
        <Footer/>
    </div>
  )
}

export default ContactPage