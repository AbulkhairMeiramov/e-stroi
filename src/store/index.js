import { configureStore } from "@reduxjs/toolkit";
import { shopReducer } from "./slice/shop";

const store = configureStore({
  reducer: { shop: shopReducer },
});

// store.subscribe(() => {
//   localStorage.setItem("basket", JSON.stringify(store.getState().shop.basket));
// });

export default store;
