import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate ,Navigate} from 'react-router-dom';
const Login = () => {
    const [email,setemail]=useState('');
    const[password,setpassword]=useState('');
    const[error,seterror]=useState('')
    const[wannalog,setwannalog]=useState(true)
    const Navigate=useNavigate();
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
    var loginform=document.getElementById("login-form")
    var regform=document.getElementById("reg-form")
    function logintoggle(){
      setwannalog(true)
      
    }
    function regtoggle(){
      setwannalog(false)
  
    }
  return (
    <>
    <div className='loginbody'>
      <div className='form-container'>
     <div className='form-btn'>
      <span id='login' onClick={logintoggle} style={{cursor:"pointer"}}>Login</span>
        <span id="register" onClick={regtoggle} style={{cursor:"pointer"}}>Register</span>
        </div>
        <div className='form-cont'>
        <form id="login-form">
        <input placeholder='email' type='text' value={email} onChange={(e)=>setemail(e.target.value)}/>
        <input type='text' placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button className="btn" onClick={handleSubmit}>Login</button>
        <a href="">Forgot password?</a>
        {error}
        </form>  
        <form id="reg-form">
        <input placeholder='email' type='text' value={email} onChange={(e)=>setemail(e.target.value)}/>
        <input type='text' placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button className="btn" onClick={handleSubmit}>Register</button>
        <a href="">Forgot password?</a>
        {error}
        </form> 
       
        </div>
        </div>
      
    
        </div>
    </>

  
  )
}

export default Login