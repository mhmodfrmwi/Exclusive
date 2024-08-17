import cartSlice from "@/app/rtk/cart-slice";
import favouriteSlice from "@/app/rtk/favourite-slice";
import productsSlice from "@/app/rtk/products-slice";
import watchLaterSlice from "@/app/rtk/watchLater-slice";
import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
  return configureStore({
    reducer: {
      products: productsSlice,
      cart: cartSlice,
      favourite: favouriteSlice,
      watchLater: watchLaterSlice,
    },
  });
};
