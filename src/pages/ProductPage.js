import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { responsiveProperty } from '@mui/material/styles/cssUtils'
import sup from '/Users/ashish/Desktop/ecommerce/src/components/sup.png'
import { Rating } from '@mui/material'
import Footer from '../components/Footer'
import { CiHeart } from 'react-icons/ci'
import { truck } from './icons'
import { cycle } from './icons'
import ProductCarousel from './ProductCarousel'
import LoadingBar from 'react-top-loading-bar'
import { useDispatch,useSelector } from 'react-redux'
import { addToCart } from '../features/Cart/CartSlice'
import { ToastContainer } from 'react-toastify'
const ProductPage = () => {
        const dispatch=useDispatch();
        const navigate=useNavigate();
    const {id}=useParams()
    const [progress,setprogress]=useState(0)
    const[response, setresponse]=useState({});
    const [image,setimage]=useState()
    const [image1,setimage1]=useState()
    const [mainimg,setmainimg]=useState()
    
    const[loading,setloading]=useState(true)
const[rating ,setrating]=useState()
const[similar,setsimilar]=useState([])
const[cat,setcat]=useState()
const[itemquantity,setitemquantity]=useState(1)
const increment=()=>{
const b=itemquantity+1;
setitemquantity(b)
}
const decrement=()=>{
    if(itemquantity>0){
    const b=itemquantity-1;
    setitemquantity(b)}
    }
useEffect(() => {
    window.scrollTo(0, 0);
}, [id]);

    const getData=()=>{
        const req= fetch(`https://dummyjson.com/products/${id}/`)
       .then(res => res.json())
       .then(data=>{console.log(data)
        setresponse(data)                               
        setimage(data.images[0])
        setimage1(data.images)
        setrating(data.rating)
        setcat(data.category)
        setmainimg(data.images[0])
       })
       .catch(err=>console.log("this is the error:",err.message))
       setloading(false)
       setprogress(20)
       setprogress(80)
    }
    const getSimilar=()=>{
       
        const req= fetch(`https://dummyjson.com/products/category/${cat}`)
       .then(res => res.json())
       .then(data=>{console.log(data)
        setsimilar(data.products)
        setprogress(100)
       })
       .catch(err=>console.log("this is the error:",err.message))
    }
useEffect(()=>{
    getData()
    getSimilar()

},[id,cat])
const changeImg = (img) => {
    setmainimg(img);
};

   { /*useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://dummyjson.com/products/${id1}`); // Replace with your API endpoint
            const jsonData = await response.json();
            setresponse(jsonData);
            console.log(jsonData)
          } catch (error) { 
            console.log(error.message)
          }
        };
    
        fetchData();
      }, []); */}
    
      const rating1=response.rating;
      function changeimg(i){
            setmainimg(i)
      }
      const Gotocart=()=>
      {
        dispatch(addToCart({ id: response.id, title: response.title, price: response.price ,image:response.images[0],quantity:itemquantity}))
        navigate('/cart')
      }
    
  return (
    
    <div className='w-full'>
    <Navbar/>
    { 
     response? (

        <div className='flex flex-row justify-evenly w-full' style={{width:"100vw"}}>
            <ToastContainer/>   
            <LoadingBar  color='#f11946'
        progress={progress}
        onLoaderFinished={() => setprogress(0)}></LoadingBar>
            <div className='flex flex-col h-full justify-evenly gap-5 mt-10'>
    
                 {
                    image?(image1.map((i)=>(
                        <div className='h-40  w-40 bg-slate-100 flex items-center justify-center cursor-pointer iconer overflow-hidden' onClick={()=>changeimg(i)}>
                            <img src={i} className='h-40 w40'/>
                        </div>
                    ))):(<div>error</div>)
                }
               
            </div>
            <div className='bg-slate-100 mt-10 flex flex-col items-center justify-center text-left' style={{width:"600px"}}>
                { 
                <img src={mainimg} className='h-96 w-fit'/>
    }
            </div>
            <div className='bg-white mt-10 px-5' style={{width:"500px"}}>
            <h1 className='text-3xl'>{response.title}</h1>
            <div>
                <div className='flex flex-row gap-5'><Rating value={Math.max(0, rating1)}precision={0.5}/>
                <h4 className= ' items-center justify-center flex  text-slate-400'>({rating1})</h4></div>
                
                <h3>{response.availabilityStatus}</h3>
                <span>{response.description}</span>
                <div className=' bg-slate-400 w-full mt-5' style={{height:"1px"}}></div>
                <div className='flex flex-row gap-5 mt-5'>
                    <h3>Colors:</h3>
                    <div className='flex flex-row gap-5'>
                    <div className='h-8 w-8 bg-red-400 border-2 mt-2 border-black p-1 border-solid p-1 rounded-full'>
                        
                        </div>
                        <div className='h-8 w-8 bg-black rounded-full mt-2 border-slate-950 p-1'>
                        </div>
                    </div>
                    
                </div>
    
                <div>
                    Size:
                    <div className='flex flex-row  gap-5 mt-2'>
                    <div className=' flex bg-white rounded-lg h-8 w-8 p-1 text-center items-center justify-center font-bold border-solid border-1 border-slate-200'>S</div>
                    <div className=' flex bg-red-400 font-bold text-white rounded-lg h-8 w-8 p-1 text-center items-center justify-center border-solid border-1 border-slate-200'>M</div>
                    <div className=' flex bg-white rounded-lg h-8 w-8 p-1 text-center items-center justify-center font-bold border-solid border-1 border-slate-200'>L</div>
                    <div className=' flex bg-white rounded-lg h-8 w-8 p-1 text-center items-center justify-center font-bold border-solid border-1 border-slate-200'>XL</div>
                    </div>
                  
                </div>
                <div className='flex flex-row rounded-lg mt-5 gap-5 '>
                    <div className='flex flex-row border-solid border-black rounded-lg'style={{borderWidth:"1px"}}>
                        <div className='h-8 w-8 bg-white p-1 flex items-center justify-center font-bold rounded-l-lg cursor-pointer' onClick={increment}>
        +
                    </div>
                    <div className='h-8 w-20 bg-red-400 text-white font-bold p-1 flex items-center justify-center iconer' style={{borderLeftWidth:"1px", borderRightWidth:"1px"}}>
                        {itemquantity}
                    </div>
                    <div className='h-8 w-8 bg-white p-1 flex items-center justify-center font-bold rounded-r-lg cursor-pointer' onClick={decrement}>
                        -
                    </div></div>
                    
                    <div className='bg-red-400 text-white w-40 flex items-center justify-center rounded-lg iconer cursor-pointer font-bold' onClick={Gotocart}>buy now</div>
                    <div className='border-solid w-10 border-black flex items-center justify-center rounded-lg iconer cursor-pointer' style={{borderWidth:"1px"}}>
                        <CiHeart/>
                    </div>
                </div>
              
                   
            </div>
            <h2>${response.price}</h2>
            <div className='flex flex-col border-solid border-black bg-white mt-10' style={{borderWidth:"1px"}}>
                    <div className='flex flex-row h-20'>   
                    <div className='p-5'>{truck}</div>
                        <div className='flex flex-col items-center justify-center'>
                            <div>Free Delivery</div>
                            <div>Enter your postal code for Delivery Availability</div>
                        </div>
                        </div>
                        <div className='flex flex-row mt-5' style={{borderTopWidth:"1px"}}>
                        <div className='p-5 h-20 flex items-center justify-center'>{cycle}</div>
                        <div className='flex items-center justify-center'>
                            <div>Return Delivery</div>
                            <div>Free 30 Days Delivery Returns. Details</div>
                        </div>
                        </div>
                    </div>
            </div>
        </div>):(<>error</>)
}
    <div className='mb-32'>
    <div className='p-10 text-2xl font-bold flex flex-row gap-2'>
        <div className='h-10 w-4 bg-red-600 rounded-md'></div>Related Items</div>
        <ProductCarousel data={similar}/>
    </div>
   
    <Footer/>
    </div>
  )
}

export default ProductPage