import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import userApi from "../redux/api/apiSlice";

const appStore = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export default appStore;
