import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user.js/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
