import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { loadState, saveState } from "../features/utils/localStorage";

const persistedState = loadState();
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: persistedState,
  },
});
store.subscribe(() => {
  saveState(store.getState().cart);
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
