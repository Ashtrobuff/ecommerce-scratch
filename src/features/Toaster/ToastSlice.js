import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 isOpen: false,
};

export const ToastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    openToast: (state) => {
      
      state.isOpen =!state.isOpen

    },
    closeToast:(state)=>{
        state.isOpen=false
    }
  },
});

// Action creators generated for each case reducer function
export const {openToast,closeToast} = ToastSlice.actions;

export default ToastSlice.reducer;
