import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    category: [],
    error: null,
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setCategory, setError } = shopSlice.actions;

export const shopReducer = shopSlice.reducer;
