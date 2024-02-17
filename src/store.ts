import { configureStore } from "@reduxjs/toolkit";
import personsReducer from "./features/persons/PersonsSlice";

export const store = configureStore({
  reducer: {
    persons: personsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
