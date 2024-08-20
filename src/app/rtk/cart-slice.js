import { fetchFromLocalStorage } from "@/lib/utils";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: fetchFromLocalStorage("cart") || [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
      window.alert("added successfully");
    },
    deleteFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clearCart: () => {
      return [];
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.find((item) => item.id === id);
      if (product) {
        product.quantity = quantity;
      }
    },
  },
});

export const { addToCart, deleteFromCart, clearCart, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
