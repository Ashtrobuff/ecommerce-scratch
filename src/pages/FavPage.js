import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToFav,removeFromFav,updateQuantity,clearFav } from '../features/favprods/FavSlice';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { FaDumpster, FaTrash } from 'react-icons/fa';
const FavPage = () => {
    const cartItems = useSelector(state => state.fav.items);
  const cartTotal = useSelector(state => state.fav.total);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  const handleAddToCart = (item) => {
    dispatch(addToFav(item));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromFav(itemId));
  };

  const handleUpdateQuantity = (itemId, quantity) => {
    dispatch(updateQuantity({ id: itemId, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearFav());
  };
useEffect(()=>{
    console.log(cartItems)
},[])
  return (<>
    <div className='h-full w-full flex flex-col gap-10'>
        <Navbar/>
    {/* Display cart items */}
    {/*
    <ul>
      {cartItems.map(item => (
        <li key={item.id}>
          {item.title} - Quantity: {item.quantity} - Price: ${item.price * item.quantity}
          <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
          <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
        </li>
      ))}
    </ul>
    */}
    <div className='p-5 w-full shadow-md bg-white flex flex-row gap-10 justify-evenly'>
       <div className='inline-block ml-20 '>Product</div>
       <div className='inline-block ml-20'>Price</div>
       <div className='inline-block ml-20'>Quantity</div>
       <div className='inline-block ml-20'>Total</div>

    </div>
    {cartItems.length===0 ? (<div className='w-full p-5 flex flex-col  scrollhide items-center justify-center' style={{height:"1000px"}}> No favorites yet :(</div>):( <div className=' w-full p-5 bg-white flex flex-col gap-10 justify-evenly overflow-scroll h-full scrollhide'>
    {cartItems.map(item => (
        <div key={item.id} className='p-5 w-full shadow-md bg-white flex flex-row gap-10 justify-around overflow-clip scrollhide'>
           
           <div className='inline-block'>
            <div className='flex flex-row items-center justify-center'>
            <img className='h-20 w-fit' src={item.image}/>
        <div className='w-20 overflow-clip'>{item.title}</div>
            </div>
           </div>
       <div className='inline-block text-center'>
        <div className='flex flex-col items-center justify-center h-full'>{item.price}</div>
        </div>
       <div className='inline-block '>
        <div className='flex items-center justify-center h-full'>
        <div className='flex flex-row'>
        <div className='flex items-center justify-center w-5 p-2 bg-red-400 iconer rounded-lg cursor-pointer text-white font-bold'>+</div>
        <div className='flex items-center justify-center p-2 w-12 bg-white bg-red-400 rounded-lg cursor-pointer'>{item.quantity}</div>
        <div className='flex items-center justify-center w-5 p-2 bg-red-400 iconer rounded-lg cursor-pointer text-white font-bold'>-</div>
        </div>
        </div>
       </div>
       <div className='inline-block mr-20'>
       <div className='flex items-center justify-center h-full'>
       <div onClick={() => handleRemoveFromCart(item.id)} className=' w-10 h-10 transition ease-in-out delay-50 bg-red-400 rounded-lg flex  font-bold items-center justify-center p-2 text-white shadow-lg cursor-pointer hover:scale-110 duration-100 '>
           <FaTrash  style={{scale:"1.5"}}/>
            </div>
        </div>
       </div>
       
        </div>
      ))}
      </div>
)}
 

 
          
    {/* Display total */}


{/* Clear cart button */}
<div className='flex gap-10 flex-1 mb-20 p-5'>

</div>
    </div>
    
   
    <Footer className='mt-10'/>
  
  </>
  )
}

export default FavPage