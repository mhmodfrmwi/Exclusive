import { fetchFromLocalStorage } from "@/lib/utils";

const { createSlice } = require("@reduxjs/toolkit");

const watchLaterSlice = createSlice({
  initialState: fetchFromLocalStorage("watchLater") || [],
  name: "watchLaterSlice",
  reducers: {
    addToWatchLater: (state, action) => {
      state.push(action.payload);
    },
    deleteFromWatchLater: (state, action) => {
      state.pop(action.payload);
    },
    clearWatchLater: (state, action) => {
      state = [];
    },
  },
});
export const { addToWatchLater, deleteFromWatchLater, clearWatchLater } =
  watchLaterSlice.actions;
export default watchLaterSlice.reducer;
