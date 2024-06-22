import React from 'react'
import { useState,useEffect } from 'react';
//@ts-ignore
import {jwtDecode }from 'jwt-decode';
import Noteapp from '../components/Noteapp';
import Chatapp from '../components/Chatapp';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
const Home = () => {
    const navigate=useNavigate();
    const [progress,setprogress]=useState(0)
    const [user, setUser] = useState(null);
  
    useEffect(() => {
        // Retrieve token from local storage
        const token = localStorage.getItem('token');
        if (token) {
            // Decode token
            const decodedToken = jwtDecode(token);
            console.log(decodedToken);
            setUser(decodedToken
            );
            console.log(user)
        } else {
            // Redirect to login page or handle unauthorized access
        }
    }, []);
  return (
    <div className='h-100 w-100 absolute'>
            {user ? (
                <>
                <h1>Welcome, {user.email}!</h1>
                <Noteapp user={user}/>
                <Chatapp user={user}/>
                </>
            ) : (
                <h1>Loading...</h1>
            )}
           <button onClick={()=>{navigate('/shop')}}>shop</button>
           <button onClick={()=>{localStorage.removeItem('token');
            navigate('/login')
           }}>Logout</button>
        </div>
  )
}

export default Home