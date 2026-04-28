import { PIZAS_DATA } from "../lib/data";

export const fetchPizzas = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return PIZAS_DATA;
};