import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], isLoading: false },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.item.findIndex(
        (item) => item.title == action.payload.title
      );
      if (index > 0) {
        state.splice(index, 1);
      }
    },
    clearCart: (state) => {
      //   state.items = [] // we can't directly do this.
      state.items.length = 0;
    },
    setLoader: (state, action) => (state.isLoading = action.payload),
  },
});

export const { addItem, removeItem, clearCart, setLoader } = cartSlice.actions;

export default cartSlice.reducer;
