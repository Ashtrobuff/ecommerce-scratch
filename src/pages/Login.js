import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate ,Navigate} from 'react-router-dom';
const Login = () => {
    const [email,setemail]=useState('');
    const[password,setpassword]=useState('');
    const Navigate=useNavigate();
   async function handleSubmit(){
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
  return (
    <  >
        <input type='text' value={email} onChange={(e)=>setemail(e.target.value)}/>
        <input type='text' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button onClick={handleSubmit}>Login</button>

    </>
  )
}

export default Login