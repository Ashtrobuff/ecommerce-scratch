import React from 'react'
import { useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [email,setemail]=useState('');
  const[password,setpassword]=useState('');
  const[error,seterror]=useState('');
  const admin=true;
  const Navigate=useNavigate();
 async function handleSubmit(){
  await fetch('http://127.0.0.1:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
     body: JSON.stringify({ email, password,admin }),
    })
   .then (response => (
     //get token from response
     response.json()
   )).then(data=>{
      console.log(data)

   })
   .catch(err =>{ 
    seterror(err)
    console.log(err)});
     Navigate("/login")

  }
return (
  <  >
      <input type='text' value={email} onChange={(e)=>setemail(e.target.value)}/>
      <input type='text' value={password} onChange={(e)=>setpassword(e.target.value)}/>
      <button onClick={handleSubmit}>Register</button>
    {<p>{error}</p>}
  </>
)
}

export default Register