export interface IPizza {
  id: number;
  title: string;
  ingredient: string;
  price: number[];
  src: string;
  alt: string;
  weigth: number[];
}

export interface ICartPizza {
  id: number;
  title: string;
  ingredient: string;
  price: number;
  src: string;
  alt: string;
  size: string;
  quantity: number;
  cost: number
}

export interface INavItem {
  id: number;
  title: string;
  path: string;
}
