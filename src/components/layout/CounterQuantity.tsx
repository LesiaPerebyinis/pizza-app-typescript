import Button from "../ui/Button"

interface ICounterQuantityProps {
  quantity: number;
  minusQuantity: () => void;
  addQuantity: () => void;
}

export default function CounterQuantity({quantity, minusQuantity, addQuantity}: ICounterQuantityProps) {
  return (
    <div className="flex justify-center items-center">
      <Button onClick={minusQuantity} width="1.7rem" height="1.7rem">
        -
      </Button>
      <div className="w-7 text-center text-sm">{quantity}</div>
      <Button onClick={addQuantity} width="1.7rem" height="1.7rem">
        +
      </Button>
    </div>
  );
}
