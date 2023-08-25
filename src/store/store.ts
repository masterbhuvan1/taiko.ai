// store.ts
import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./contactSlice"; // Update the path if needed

const store = configureStore({
  reducer: {
    contact: contactSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
