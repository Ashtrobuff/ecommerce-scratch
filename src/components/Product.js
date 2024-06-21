import { Rating } from '@mui/material'
import { Scale } from 'lucide-react'
import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaEye } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/Cart/CartSlice'
const Product = ({data}) => {
  const dispatch=useDispatch()
  const navigate=useNavigate();
  const id=data.id
  const exploreProduct=()=>{
    navigate(`/productpage/${id}`)
  }
  const handleAddToCart = () => {
    dispatch(addToCart({ id: data.id, title: data.title, price: data.price }));
  };
  return (

        <div className='bahar mx-2' onClick={exploreProduct}>
         
            <div className=" product">
            <div className='overlay'>
            <div style={{backgroundColor:"#DB4444",padding:"2px", height:"20px",borderRadius:"4px",color:'#fff'}} className='flex items-center justify-center'>-40%</div>
            <div className='hearteye' style={{display:"flex",flexDirection:"column",gap:"10px"}}>
               <div style={{background:"#fff",borderRadius:"50%",padding:"2px",width:"20px",height:"20px"}} className=' iconer flex items-center justify-center'> <CiHeart style={{Scale:"1.1",borderRadius:"50%"}}/></div>
                <div style={{background:"#fff",borderRadius:"50%",padding:"2px",width:"20px",height:"20px"}} className='iconer flex items-center justify-center'><FaEye style={{Scale:"1.1",borderRadius:"50%"}}/></div>
            </div>
          
        </div>
       
    <div className='hoverer'>
    <div className='flex items-center justify-center'> <img src={data.images[0]} style={{height:"120px",width:"max-content",objectFit:"cover"}}/></div>
     </div>
     </div>
   <p className='text-center flex  items-center justify-center'>{data.title}</p>
   <div className='font-bold'>${data.price}</div>
   <Rating defaultValue={0} value={data.rating}></Rating>
   
   <div className=' iconer carter w-full' style={{background:"#Db4444"}} onClick={handleAddToCart}>Add to cart</div>
</div>
    

  )
}

export default Product