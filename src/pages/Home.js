import React from 'react'
import { useState,useEffect } from 'react';
//@ts-ignore
import {jwtDecode }from 'jwt-decode';
import Noteapp from '../components/Noteapp';
import Chatapp from '../components/Chatapp';
const Home = () => {

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
    <div>
            {user ? (
                <>
                <h1>Welcome, {user.email}!</h1>
                <Noteapp user={user}/>
                <Chatapp user={user}/>
                </>
            ) : (
                <h1>Loading...</h1>
            )}
           
        </div>
  )
}

export default Home