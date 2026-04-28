import { MdOutlineShoppingCart } from "react-icons/md";
import { useAppSelector } from "../../store/hooks";
import Button from "../ui/Button";

interface ICartButton {
  OpenModal: (value: boolean) => void;
}
export default function CartButton({ OpenModal }: ICartButton) {
  const totalCost = useAppSelector((state) => state.cart.totalCost);
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  return (
    <Button onClick={() => OpenModal(false)} height="4.7rem">
      <div className="pr-3 w-18 lg:w-25 text-[0.7rem] lg:text-base border-r text-right">
        {totalCost} грн
      </div>
      <div className="w-14 lg:w-18 pl-3 relative">
        <MdOutlineShoppingCart className="w-6 h-6 lg:w-9 lg:h-9" />
        <span className="absolute -top-2 right-2 flex justify-center align-center w-4 h-4 text-[0.7rem] lg:text-[0.8rem] lg:w-6 lg:h-6 text-primery bg-white rounded-full text-xs leading-4 lg:leading-6">
          {totalQuantity}
        </span>
      </div>
    </Button>
  );
}
