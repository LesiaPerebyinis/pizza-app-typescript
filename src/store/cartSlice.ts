import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {ICartPizza, ICartState } from "../features/types/types";


const initialState: ICartState = {
  items: [],
  totalCost: 0,
  totalQuantity: 0,
};

const calcCost = (price: number, num: number) => price * num;
const calcTotalCost = (arr: ICartPizza[]) =>
  arr.reduce((sum, item) => sum + item.cost, 0);

const calcTotalQuantity = (arr: ICartPizza[]) =>
  arr.reduce((sum, item) => sum + item.quantity, 0);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartPizza>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        existingItem.cost = calcCost(existingItem.price, existingItem.quantity);

        state.totalCost = calcTotalCost(state.items);
        state.totalQuantity = calcTotalQuantity(state.items);

      } else {
        state.items.push({ ...action.payload });
        state.totalCost = calcTotalCost(state.items);
        state.totalQuantity = calcTotalQuantity(state.items);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalCost = calcTotalCost(state.items);
      state.totalQuantity = calcTotalQuantity(state.items);
    },
    addQuantity: (state, action: PayloadAction<ICartPizza>) => {
      const updateItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (updateItem) {
        updateItem.quantity += 1;
        updateItem.cost = calcCost(updateItem.price, updateItem.quantity);
        state.totalCost = calcTotalCost(state.items);
        state.totalQuantity = calcTotalQuantity(state.items);
      }
    },
    minusQuantity: (state, action: PayloadAction<ICartPizza>) => {
      const updateItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (updateItem && updateItem.quantity > 1) {
        updateItem.quantity -= 1;
        updateItem.cost = calcCost(updateItem.price, updateItem.quantity);
        state.totalCost = calcTotalCost(state.items);
        state.totalQuantity = calcTotalQuantity(state.items);
      }
    },
  },
});

export const { addToCart, removeFromCart, addQuantity, minusQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
