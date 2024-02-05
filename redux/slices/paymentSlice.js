// src/slices/paymentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    fullname: '',
    address: '',
    selectedPackage: null, 
    // other initial state properties...
  },
  reducers: {
    setFullname: (state, action) => {
      state.fullname = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setSelectedPackage: (state, action) => {
        state.selectedPackage = action.payload;
      },
    // other reducer actions...
  },
});

export const { actions, reducer } = paymentSlice;
export default paymentSlice.reducer;
