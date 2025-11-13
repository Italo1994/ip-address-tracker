import { configureStore } from "@reduxjs/toolkit";
import geoReducer from "./geoSlice";

export const store = configureStore({
  reducer: {
    geo: geoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
