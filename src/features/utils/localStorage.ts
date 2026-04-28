import type { ICartState } from "../types/types";

export const loadState = () => {
  try {
    const savedState = localStorage.getItem("cart_storage");
    if (savedState === null) return undefined;
    return JSON.parse(savedState);
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};

export const saveState = (state: ICartState) => {
  try {
    const savedState = JSON.stringify(state);
    localStorage.setItem("cart_storage", savedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};
