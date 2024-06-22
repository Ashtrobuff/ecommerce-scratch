import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart,removeFromCart,updateQuantity,clearCart } from '../features/Cart/CartSlice';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaDumpster, FaTrash } from 'react-icons/fa';
const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);
  const cartTotal = useSelector(state => state.cart.total);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleUpdateQuantity = (itemId, quantity) => {
    dispatch(updateQuantity({ id: itemId, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
useEffect(()=>{
    console.log(cartItems)
},[])
  return (<>
    <div className='absolute h-full w-full flex flex-col'>
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
       <div>Product</div>
       <div>Price</div>
       <div>Quantity</div>
       <div>Total</div>
       <div className=''>
    
 </div>
    </div>
    {cartItems.length===0 ? (<div className='w-full p-5 flex flex-col  scrollhide items-center justify-center bg-red-500' style={{height:"1000px"}}> CART EMPTY</div>):( <div className=' w-full p-5 bg-white flex flex-col gap-10 justify-evenly overflow-scroll h-full scrollhide'>
    {cartItems.map(item => (
        <div key={item.id} className='p-5 w-full shadow-md bg-white flex flex-row gap-10 justify-evenly overflow-clip scrollhide'>
            <div>
              <img src={item.image} className='h-20 w-max-content object-cover'/> 
                </div> 
          <div>{item.title}</div>
          <div>${item.price}</div>
          <div className='flex flex-row'>
            
          <div className='flex h-10 w-10 bg-red-400 rounded-l-lg text-white font-bold iconer cursor-pointer items-center justify-center' onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</div>
            <div className='items-center  text-center justify-center flex h-10 w-10 font-bold bg-slate-200'>{item.quantity}</div>
            <div className='flex h-10 w-10 bg-red-400 rounded-r-lg text-white iconer cursor pointer items-center justify-center cursor-pointer' onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</div>
          </div>
          <div onClick={() => handleRemoveFromCart(item.id)} className=' w-10 h-10 transition ease-in-out delay-50 bg-red-400 rounded-lg flex  font-bold items-center justify-center p-2 text-white shadow-lg cursor-pointer hover:scale-110 duration-100 '>
           <FaTrash  style={{scale:"1.5"}}/>
            </div>
          
          
        </div>
      ))}
      </div>
)}
    {/* Display total */}
  
    <div className='flex flex-row justify-evenly w-full'>
    <div className='h-20 font-bold text-3xl justify-end'>Total:${cartTotal}</div>

{/* Clear cart button */}
<div className='flex gap-10 flex-1 mb-20 p-5'>
<div onClick={handleClearCart} className='h-5 flex items-center justify-center rounded-lg w-fit p-5 bg-red-400 cursor-pointer text-white font-bold shadow-2xl'>Clear Cart</div>
<div onClick={handleClearCart} className='h-5 flex items-center justify-center rounded-lg w-48 p-5 bg-red-400 cursor-pointer text-white font-bold shadow-2xl'>Checkout</div>
</div>
    </div>
    
   
    <Footer className='mt-10'/>
  </div>
  </>
  )
}

export default Cart