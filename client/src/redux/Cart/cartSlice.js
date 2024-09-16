import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  error: null,
  loading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addToCartSuccess: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }

      state.totalPrice += newItem.price * newItem.quantity;
      state.loading = false;
    },
    addToCartFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateCartStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateCartSuccess: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.cartItems.find((item) => item.id === id);

      if (itemToUpdate) {
        state.totalPrice -= itemToUpdate.price * itemToUpdate.quantity;
        itemToUpdate.quantity = quantity;
        state.totalPrice += itemToUpdate.price * quantity;
      }

      state.loading = false;
    },
    updateCartFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    removeFromCartStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    removeFromCartSuccess: (state, action) => {
      const itemId = action.payload;
      const itemToRemove = state.cartItems.find((item) => item.id === itemId);

      if (itemToRemove) {
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      }

      state.loading = false;
    },
    removeFromCartFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  addToCartStart,
  addToCartSuccess,
  addToCartFailure,
  updateCartStart,
  updateCartSuccess,
  updateCartFailure,
  removeFromCartStart,
  removeFromCartSuccess,
  removeFromCartFailure,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
