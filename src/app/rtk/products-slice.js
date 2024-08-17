const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts", // Namespace updated
  async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      if (!res.ok) {
        throw new Error("Failed to fetch products"); // Handle response errors
      }
      const data = await res.json();
      console.log(data.products);

      return data.products;
    } catch (err) {
      console.error("Error fetching products:", err);
      throw err; // Throw the error so it can be handled by Redux's lifecycle
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: [], // This should be after name
  reducers: {}, // You can leave this empty if there are no reducers
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    // Optionally handle pending and rejected cases
    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.error("Failed to fetch products:", action.error);
    });
  },
});

export default productsSlice.reducer;
