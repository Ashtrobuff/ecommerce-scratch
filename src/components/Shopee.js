import React from 'react'
import { useState } from 'react';
import {jwtDecode }from 'jwt-decode';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Shopcard from '../elements/Shopcard';
import data from '../data/data';
import { Grid } from '@mui/material';
const Shopee = () => {
    const [user, setUser] = useState(null);
    const [isAdmin,setAdminstatus]=useState(false);
    const [prods,setprods]=useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        // Retrieve token from local storage
        const token = localStorage.getItem('token');
        if (token) {
            // Decode token
            const decodedToken = jwtDecode(token);
            console.log(decodedToken);
            setUser(decodedToken);
                  setAdminstatus(decodedToken.admin);
        } else {
            // Redirect to login page or handle unauthorized access
        }
        getproduct();
    }, []);
async function getproduct(){

    await fetch('https://fakestoreapi.com/products/category/jewelery', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
   
      })
     .then (response => (
       //get token from response
       response.json()
     )).then(data=>{
        console.log(data)
       setprods(data)
        
       

     })
     .catch(err => console.log(err));
     
  }


  return (
    <div className='w-full h-full absolute'>Shopee
        {isAdmin?(<button onClick={()=>{navigate("/products")}}>Admin button</button>):(null)}

        
    </div>
  )
}

export default Shopee