import { Rating } from '@mui/material'
import { Scale } from 'lucide-react'
import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaEye } from 'react-icons/fa'

const Product = ({data}) => {
  return (

        <div className='bahar mx-2'>
         
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
   <div>{data.title}</div>
   <div>{data.price}</div>
   <Rating></Rating>
   
   <div className=' iconer carter' style={{background:"#Db4444"}}>Add to cart</div>
</div>
    

  )
}

export default Product