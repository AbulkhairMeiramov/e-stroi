import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    category: [],
    product: [],
    error: null,
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setProduct(state, action) {
      state.product = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setCategory, setProduct, setError } = shopSlice.actions;

export const shopReducer = shopSlice.reducer;
