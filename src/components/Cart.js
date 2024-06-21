import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart,removeFromCart,updateQuantity,clearCart } from '../features/Cart/CartSlice';
import Navbar from './Navbar';
import Footer from './Footer';
const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);
  const cartTotal = useSelector(state => state.cart.total);
  const dispatch = useDispatch();

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
    <div className='absolute h-full'>
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
    </div>
    <div className='w-full p-5 bg-white flex flex-col gap-10 justify-evenly'>
    {cartItems.map(item => (
        <div key={item.id} className='p-5 w-full shadow-md bg-white flex flex-row gap-10 justify-evenly'>
          <div>{item.title}</div>
          <div>{item.price}</div>
          <div>
          <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
            {item.quantity}
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
          </div>
          <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          
          
        </div>
      ))}
    </div>
    {/* Display total */}
    <p>Total: ${cartTotal}</p>

    {/* Clear cart button */}
    <button onClick={handleClearCart}>Clear Cart</button>
    <Footer/>
  </div>
  </>
  )
}

export default Cart