import { Rating } from '@mui/material'
import { Scale } from 'lucide-react'
import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaEye } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/Cart/CartSlice'
import { ToastContainer, toast } from "react-toastify";
import { addToFav } from '../features/favprods/FavSlice'
import "react-toastify/dist/ReactToastify.css";
import { openToast ,closeToast} from '../features/Toaster/ToastSlice'  
const Product = ({data}) => {
  const showToastMessage = () => {  
    toast.success("Success Notification !", {
      position:"top-right"
    });}
  const dispatch=useDispatch()
  const navigate=useNavigate();
  const id=data.id
  const data345=useSelector(state=>state.toast.items)
  const exploreProduct=()=>{
    navigate(`/productpage/${id}`)
  }
  const image=data.images[0];
  const notify = (message) => toast.success(message,{
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    style:{color:"grey",background:"#fff"},
    progressStyle:{backgroundColor:"red"}
    });
const handleAddToCart = () => {
    dispatch(addToCart({ id: data.id, title: data.title, price: data.price ,image:image,quantity:1}));
    notify("item added to cart!")
   console.log(data345)
  };
  const handleaddtofav = () => {
    dispatch(addToFav({ id: data.id, title: data.title, price: data.price ,image:image,quantity:1}));
    notify("item added to favourites!")
   console.log(data345)
  };
  return (

        <div className='bahar mx-2' >
         
            <div className=" product">
            <div className='overlay'>
            <div style={{backgroundColor:"#DB4444",padding:"2px", height:"20px",borderRadius:"4px",color:'#fff'}} className='flex items-center justify-center'>-40%</div>
            <div className='hearteye' style={{display:"flex",flexDirection:"column",gap:"10px"}}>
               <div style={{background:"#fff",borderRadius:"50%",padding:"2px",width:"20px",height:"20px"}} className=' iconer flex items-center justify-center' onClick={handleaddtofav}> <CiHeart style={{Scale:"1.1",borderRadius:"50%"}}/></div>
                <div style={{background:"#fff",borderRadius:"50%",padding:"2px",width:"20px",height:"20px"}} className='iconer flex items-center justify-center'><FaEye style={{Scale:"1.1",borderRadius:"50%"}}/></div>
            </div>
          
        </div>
       
    <div className='hoverer' onClick={exploreProduct}>
    <div className='flex items-center justify-center'> <img src={data.images[0]} style={{height:"120px",width:"max-content",objectFit:"cover"}}/></div>
     </div>
     </div>
   <div className='font-bold'>${data.price}
   <p className='flex  items-center font-normal text-left'>{data.title}</p></div>
   <div className='flex flex-row gap-2'>
   <div><Rating defaultValue={0} value={data.rating} readOnly={true}></Rating ></div><div className=' inline-blocktext-slate-400'>({data.rating})</div>
   </div>
   <div className='iconer carter w-full cursor-pointer  rounded-sm z-40' style={{background:"#Db4444"}} onClick={handleAddToCart}>Add to cart</div>
   
</div>
    

  )
}

export default Product;