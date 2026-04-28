import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";

import type { IPizza, ICartPizza } from "../features/types/types";
import CounterQuantity from "./layout/CounterQuantity";
import Button from "./ui/Button";

interface PizzaCardProps extends IPizza {
  product: IPizza,
  addPizaToCart: (pizzaItem: ICartPizza) => void
}

export default function PizzaCard({
  
  title,
  ingredient,
  price,
  src,
  alt,
  weigth,
  product,
  addPizaToCart
}: PizzaCardProps) {
  
  const [sizePizza, setSizePizza] = useState<number>(0);
  const [quantity, setQuantity] = useState(1);
  const minusQuantity = () => quantity !== 1 && setQuantity(quantity - 1);
  const addQuantity = () => setQuantity(quantity + 1);
  
  const addPiza = (product: IPizza) => {
    const sizePizaItem =
      sizePizza === 0 ? "мала" : sizePizza === 1 ? "середня" : "велика";
    const pizaItem: ICartPizza = {
      id: product.id / product.weigth[sizePizza],
      title: product.title,
      ingredient: product.ingredient,
      price: product.price[sizePizza],
      src: product.src,
      alt: product.alt,
      size: sizePizaItem,
      quantity: quantity,
      cost: quantity * product.price[sizePizza],
    };    
    addPizaToCart(pizaItem);
    setQuantity(1);
  }
 
  return (
    <div className="w-full border border-dark rounded-md p-1">
      <div className="w-full relative">
        <img src={src} alt={alt} />
        <small className="absolute bottom-5 right-4 z-5 bg-gray-200 font-bold rounded-md pr-1 pl-1 opacity-75">
          {weigth[sizePizza]} г
        </small>
      </div>

      <div className="text-center pt-3  bg-white">
        <div className="">
          <h2 className="h-10 lg:h-15 font-bold">{title}</h2>
          <p className="h-15 lg:h-20 text-sm">{ingredient}</p>
        </div>
        <div className="grid grid-cols-3">
          {["мала", "середня", "велика"].map((tab, ind) => (
            <button
              onClick={() => setSizePizza(ind)}
              className={
                sizePizza === ind
                  ? "bg-[#f3f3f2] pt-1 pb-1 rounded-t-xl font-semibold"
                  : "pt-2 pb-2 cursor-pointer"
              }
              key={ind}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex justify-between pt-3 pb-3 pl-7 pr-7 bg-[#f3f3f2]">
          <CounterQuantity
            quantity={quantity}
            minusQuantity={minusQuantity}
            addQuantity={addQuantity}
          />
          <div className="font-semibold">
            {price[sizePizza]}
            <span> грн</span>
          </div>
        </div>
      </div>
      <Button onClick={() => addPiza(product)} width="100%" height="3.5rem">
        <p>В кошик</p>
        <div className="relative inline-block pl-3">
          <MdOutlineShoppingCart size="2em" />
          {quantity > 1 && (
            <span className="absolute -top-2 -right-3 flex justify-center align-center w-6 h-6 text-dark bg-white rounded-full text-xs leading-6">
              {quantity}
            </span>
          )}
        </div>
      </Button>
    </div>
  );
}
