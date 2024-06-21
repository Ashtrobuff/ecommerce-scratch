import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Check if item already exists in cart
       const { id, title, price } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        // If item exists, update quantity
        existingItem.quantity += 1;
      } else {
        // If item does not exist, add it to cart
        state.items.push({ id, title, price, quantity: 1 });
      }
      // Recalculate total price
      state.total += action.payload.price;
    },
    removeFromCart: (state, action) => {
      // Find index of item to remove
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        // Subtract item price from total
        state.total -= state.items[index].price * state.items[index].quantity;
        // Remove item from cart
        state.items.splice(index, 1);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      // Find item by id
      const itemToUpdate = state.items.find(item => item.id === id);
      if (itemToUpdate) {
        // Update item quantity
        state.total += (quantity - itemToUpdate.quantity) * itemToUpdate.price;
        itemToUpdate.quantity = quantity;
      }
    },
    clearCart: (state) => {
      // Reset cart state
      state.items = [];
      state.total = 0;
    },
  },
});

// Action creators generated for each case reducer function
export const { addToCart, removeFromCart, updateQuantity, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
