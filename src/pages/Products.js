import React, { useState } from 'react'

const Products = () => {
    const [name,setname]=useState('');
    const [Description,setDescription]=useState('');
    const [Price,setPrice]=useState('');
    const [Rating,setRating]=useState(0);
    const[manufacturer,setmanufacturer]=useState('');
 async function addproducts(){
    await fetch('http://127.0.0.1:3000/addproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
       body: JSON.stringify({name,Description,Price,Rating,manufacturer}),
      })
     .then (response => (
       //get token from response
       response.json()
     )).then(data=>{
        console.log(data)
       const token  = data
        
       

     })
     .catch(err => console.log(err));
     setname('');
        setPrice('');
        setDescription('');
        setRating(0);
        setmanufacturer('');
     
  }
  return (
    <div>
        <div style={{display:'flex',flexDirection:'column',width:'300px',alignItems:'center',justifyContent:'center'}}>
        <input value={name} placeholder='enter product name' onChange={(e)=>setname(e.target.value)}/>
    <input value={Description} placeholder='enter product name' onChange={(e)=>setDescription(e.target.value)}/>
    <input value={Price} placeholder='enter product name' onChange={(e)=>setPrice(e.target.value)}/>
    <input value={Rating} placeholder='enter product name' onChange={(e)=>setRating(e.target.value)}/>
    <input value={manufacturer} placeholder='enter product name' onChange={(e)=>setmanufacturer(e.target.value)}/>
    <button onClick={addproducts}>add product</button>
        </div>
    
    </div>
  )
}

export default Products