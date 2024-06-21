import React, { useState } from 'react'

const Products = () => {
    const [name,setname]=useState('');
    const [Description,setDescription]=useState('');
    const [Price,setPrice]=useState('');
    const [Rating,setRating]=useState(0);
    const[manufacturer,setmanufacturer]=useState('');
    const[category,setcategory]=useState('');
    const[image,setimage]=useState()
 async function addproducts(){
    await fetch('http://127.0.0.1:3000/addproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
       body: JSON.stringify({name,Description,Price,Rating,manufacturer,category}),
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
        setcategory('')
     
  }
  return (
    <div className='absolute'>
        <div style={{display:'flex',flexDirection:'column',width:'300px',alignItems:'center',justifyContent:'center'}}>
        <input value={name} placeholder='enter product name' onChange={(e)=>setname(e.target.value)}/>
    <input value={Description} placeholder='enter product description' onChange={(e)=>setDescription(e.target.value)}/>
    <input value={Price} placeholder='enter product price' onChange={(e)=>setPrice(e.target.value)}/>
    <input value={Rating} placeholder='enter product rating' onChange={(e)=>setRating(e.target.value)}/>
    <input value={manufacturer} placeholder='enter product manufacturer' onChange={(e)=>setmanufacturer(e.target.value)}/>
    <input value={category} placeholder='enter product category' onChange={(e)=>setmanufacturer(e.target.value)}/>
    <input type='file' value={image} placeholder='uploadImage' onChange={(e)=>setimage(e.target.value)}/>
    <button onClick={addproducts}>add product</button>
        </div>
    
    </div>
  )
}

export default Products