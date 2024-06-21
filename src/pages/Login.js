import React, { useEffect, useReducer, useRef, useState } from 'react'
import axios from 'axios';
import { useNavigate ,Navigate} from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
const Login = () => {
    const [email,setemail]=useState('');
    const[password,setpassword]=useState('');
    const[error,seterror]=useState('')
    const[wannalog,setwannalog]=useState(true)
    const Navigate=useNavigate();
    const loginref=useRef();
    const regref=useRef();
   async function handleSubmit(e){
    e.preventDefault()
    if(email || password=="")
      {
       seterror("enter details")
      }
    await fetch('http://127.0.0.1:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
       body: JSON.stringify({ email, password }),
      })
     .then (response => (
       //get token from response
       response.json()
     )).then(data=>{
        console.log(data)
       const token  = data
        
       //set JWT token to local
       localStorage.setItem("token", token);

     })
     .catch(err => console.log(err));
       Navigate("/")
      
    }
   const bar=useRef();
    function logintoggle(){
     loginref.current.style.transform="translateX(500px)"
     regref.current.style.transform="translateX(500px)"
      bar.current.style.transform="translateX(0px)"
    }
    function regtoggle(){
      loginref.current.style.transform="translateX(0px)"
     regref.current.style.transform="translateX(0px)"
     bar.current.style.transform="translateX(140px)"
    }

  return (
    <>
    <div className='loginbody w-full h-full'>
      <div className='form-container'>
     <div className='form-btn'>
      <span id='login' onClick={logintoggle} style={{cursor:"pointer"}} >Login</span>
        <span id="register" onClick={regtoggle} style={{cursor:"pointer"}}>Register</span>
        <div style={{height:"4px", width:"150px",background:"#DB4444",transitionDuration:"0.5s"}} className="  mx-2 mt-5 rounded-xl"ref={bar}></div>

        </div>
        <div className='form-cont'>
        <form id="login-form" ref={loginref}>
        <input placeholder='email' type='text' value={email} onChange={(e)=>setemail(e.target.value)}/>
        <div id="lowbord"></div>
        <input type='text' placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button className="btn" onClick={handleSubmit}>Login</button>
        <button className="btngoogle iconer" onClick={handleSubmit}><div className='flex flex-row gap-4 items-center justify-center p-2'><FcGoogle style={{scale:"2"}}/><h3>Sign up with google</h3></div></button>
        <a href="">Forgot password?</a>
        {error}
        </form>  
        <form id="reg-form" ref={regref}>
        <input placeholder='email' type='text' value={email} onChange={(e)=>setemail(e.target.value)}/>
        <input type='text' placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button className="btn" onClick={handleSubmit}>Register</button>
        <a className='mt-8' href="">Forgot password?</a>
        {error}
        </form> 
       
        </div>
        </div>
      
    
        </div>
    </>

  
  )
}

export default Login