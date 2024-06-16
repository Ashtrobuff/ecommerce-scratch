import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState,useEffect } from 'react';
import { Paper } from '@mui/material';
import Rating from '@mui/material/Rating';
const Shopcard = ({item}) => {
    const item1={
        "price": "$17.99",
        "name": "Piraat Ale",
        "rating": {
          "average": 2.94233495501944,
          "reviews": 185
        },
        "image": "https://www.totalwine.com/media/sys_master/twmmedia/h67/he1/9071469920286.png",
        "id": 176
      }
  return (
    <div style={{height:"120px",width:"120px"}}>
        <Paper elevation={4}  style={{height:"400px", width:"300px"}}>
            <img src={item.image}/>
            <h1>{item.name}</h1>
            <h2>{item.price}</h2>
            <Rating defaultValue={item.rating.average} max={5}/>
            <h4>Reviews:{item.rating.reviews}</h4>
        </Paper>
    </div>
  )
}

export default Shopcard