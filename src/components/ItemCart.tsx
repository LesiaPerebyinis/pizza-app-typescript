import { MdOutlineDeleteForever } from "react-icons/md";
import { type ICartPizza } from '../features/types/types';
import Counter from "./layout/Counter";

interface ItemCartProps extends ICartPizza {
  addQuantity: (index: number) => void;
  minusQuantity: (index: number) => void;
  deletePiza: (index: number) => void;
}

export default function ItemCart({
  id,
  src,
  alt,
  title,
  size,
  quantity,
  cost,
  addQuantity,
  minusQuantity,
  deletePiza
}: ItemCartProps) {
  return (
    <div className="w-full flex items-center gap-1 text-dark bg-gray-100">
      <div className="w-2/10 flex items-center justify-center">
        <img src={src} alt={alt} width={120} height={100} />
      </div>
      <div className="w-3/10 text-[0.7rem] md:text-xs sm:text-sm lg:text-base font-bold text-center">
        <h3>{title}</h3>

        <small>{size}</small>
      </div>
      <div className="w-2/10 flex justify-center px-1">
        <Counter
          quantity={quantity}
          minusQuantity={() => minusQuantity(id)}
          addQuantity={() => addQuantity(id)}
        />
      </div>
      <div className="w-2/10 text-center text-[0.7rem] md:text-xs sm:text-sm lg:text-base">
        {cost} грн.
      </div>
      <button
        onClick={() => deletePiza(id)}
        className="w-1/10 flex justify-center align-center text-primery cursor-pointer hover:text-accent"
      >
        <MdOutlineDeleteForever className="w-5 h-5 lg:w-7 lg:h-7" />
      </button>
    </div>
  );
}
