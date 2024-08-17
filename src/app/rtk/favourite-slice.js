const { createSlice } = require("@reduxjs/toolkit");

const favouriteSlice = createSlice({
  initialState: [],
  name: "favouriteSlice",
  reducers: {
    addToFavourite: (state, action) => {
      state.push(action.payload);
    },
    deleteFromFavourite: (state, action) => {
      state.pop(action.payload);
    },
    clearFavourite: (state, action) => {
      state = [];
    },
  },
});
export const { addToFavourite, deleteFromFavourite, clearFavourite } =
  favouriteSlice.actions;
export default favouriteSlice.reducer;
