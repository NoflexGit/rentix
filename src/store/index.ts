import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/slice";
import propertyDetailsSlice from "./propertyDetails/slice";

const store = configureStore({
  reducer: {
    user: userSlice,
    propertyDetails: propertyDetailsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
